<script lang="ts">
    import { writable } from "svelte/store";
    import Card from "../lib/Card.svelte";
    import type { Card as CardType } from "../lib/types";
    import { fade } from "svelte/transition";

    let cards: CardType[] = [
        {
            id: 1,
            imgUrl: "/src/assets/21.png",
            text: "这是什么花",
            swipeLeft: { cardId: 2, transitionText: "紫罗兰" },
            swipeRight: { cardId: 2, transitionText: "报春花" },
        },
        {
            id: 2,
            imgUrl: "/src/assets/22.png",
            text: "SHSID",
            swipeLeft: { cardId: 3, transitionText: "I love Shanghai" },
            swipeRight: { cardId: 4, transitionText: "I love Brown" },
        },
        {
            id: 3,
            imgUrl: "/src/assets/20.png",
            text: "上海的夏如暴雨热烈",
            swipeLeft: { cardId: 4, transitionText: "看看别的地方" },
            swipeRight: { cardId: 8, transitionText: "吾是上海宁" },
        },
        {
            id: 4,
            imgUrl: "/src/assets/15.png",
            text: "Boston！",
            swipeLeft: { cardId: 5, transitionText: "！！" },
            swipeRight: { cardId: 3, transitionText: "看看别的地方" },
        },
        {
            id: 5,
            imgUrl: "/src/assets/16.png",
            text: "Boston！！",
            swipeLeft: { cardId: 6, transitionText: "！！！" },
            swipeRight: { cardId: 3, transitionText: "看看别的地方" },
        },
        {
            id: 6,
            imgUrl: "/src/assets/17.png",
            text: "Boston！！！",
            swipeLeft: {
                cardId: 7,
                transitionText: "不管怎么样，我们总是会见",
            },
            swipeRight: { cardId: 4, transitionText: "再看一遍！" },
        },
        {
            id: 7,
            imgUrl: "/src/assets/11.png",
            text: "先打个电话吧",
            swipeLeft: { cardId: 16, transitionText: "继续vc" },
            swipeRight: { cardId: 18, transitionText: "不聊啦" },
        },
        {
            id: 16,
            imgUrl: "/src/assets/12.png",
            text: "最近咋样？Everything's so far so good",
            swipeLeft: { cardId: 17, transitionText: "继续vc" },
            swipeRight: { cardId: 18, transitionText: "不聊啦" },
        },
        {
            id: 17,
            imgUrl: "/src/assets/13.png",
            text: "我最近好烦好累。。。It's ok~",
            swipeLeft: { cardId: 18, transitionText: "再打一会儿" },
            swipeRight: { cardId: 18, transitionText: "不聊啦" },
        },
        {
            id: 18,
            imgUrl: "/src/assets/14.png",
            text: "那先这样咯，今年有机会见吧！",
            swipeLeft: {
                cardId: 19,
                transitionText: "不知道下次是什么时候见了",
            },
            swipeRight: { cardId: 7, transitionText: "再打一会儿吧" },
        },
        {
            id: 19,
            imgUrl: "/src/assets/24.png",
            text: "waz每次自拍都很丑",
            swipeLeft: { cardId: 20, transitionText: "叫他再拍一张" },
            swipeRight: { cardId: 24, transitionText: "这张挺好的" },
        },
        {
            id: 20,
            imgUrl: "/src/assets/25.png",
            text: "这张。。。",
            swipeLeft: { cardId: 21, transitionText: "叫他再拍一张" },
            swipeRight: { cardId: 24, transitionText: "这张挺好的" },
        },
        {
            id: 21,
            imgUrl: "/src/assets/26.png",
            text: "这张。。。",
            swipeLeft: { cardId: 22, transitionText: "叫他再拍一张" },
            swipeRight: { cardId: 24, transitionText: "这张挺好的" },
        },
        {
            id: 22,
            imgUrl: "/src/assets/27.png",
            text: "这张。。。",
            swipeLeft: { cardId: 23, transitionText: "叫他再拍一张" },
            swipeRight: { cardId: 24, transitionText: "这张挺好的" },
        },
        {
            id: 23,
            imgUrl: "/src/assets/28.png",
            text: "这张。。。",
            swipeLeft: { cardId: 24, transitionText: "这张挺好的" },
            swipeRight: {
                cardId: 24,
                transitionText: "行吧。。。就拍成这样吧！",
            },
        },
        {
            id: 24,
            imgUrl: "/src/assets/5.png",
            text: "帮waz庆祝一下生日，又是他拍照。。。",
            swipeLeft: { cardId: 26, transitionText: "这张挺好的" },
            swipeRight: { cardId: 25, transitionText: "重新拍！" },
        },
        {
            id: 25,
            imgUrl: "/src/assets/23.png",
            text: "这张。。。",
            swipeLeft: { cardId: 26, transitionText: "这张挺好的。" },
            swipeRight: { cardId: 24, transitionText: "重新拍！" },
        },
        {
            id: 26,
            imgUrl: "/src/assets/18.png",
            text: "waz测试ios抠图功能时候拍的我。。。",
            swipeLeft: { cardId: 27, transitionText: "好吧" },
            swipeRight: { cardId: 8, transitionText: "气死我了，我要回上海" },
        },
        {
            id: 27,
            imgUrl: "/src/assets/19.png",
            text: "生日快乐～",
            swipeLeft: { cardId: 100, transitionText: "黄色" },
            swipeRight: { cardId: 100, transitionText: "绿色" },
        },
        {
            id: 8,
            imgUrl: "/src/assets/2.png",
            text: "这是哪里？",
            swipeLeft: { cardId: 9, transitionText: "外滩" },
            swipeRight: { cardId: 4, transitionText: "不想回答这种无聊的问题" },
        },
        {
            id: 9,
            imgUrl: "/src/assets/3.png",
            text: "外滩！",
            swipeLeft: { cardId: 10, transitionText: "重新拍！" },
            swipeRight: {
                cardId: 11,
                transitionText: "这张挺好的，吃饭去吧～",
            },
        },
        {
            id: 10,
            imgUrl: "/src/assets/4.png",
            text: "额，这张。。。",
            swipeLeft: { cardId: 11, transitionText: "拍得我饿了" },
            swipeRight: { cardId: 4, transitionText: "我要回去啦" },
        },
        {
            id: 11,
            imgUrl: "/src/assets/6.png",
            text: "和waz吃个早茶",
            swipeLeft: { cardId: 12, transitionText: "看一下吃什么" },
            swipeRight: { cardId: 4, transitionText: "我要回去啦" },
        },
        {
            id: 12,
            imgUrl: "/src/assets/7.png",
            text: "我不喜欢吃油的东西，但waz一定要点油条",
            swipeLeft: { cardId: 13, transitionText: "看一下左边是谁" },
            swipeRight: { cardId: 14, transitionText: "我还要吃别的" },
        },
        {
            id: 13,
            imgUrl: "/src/assets/8.png",
            text: "蛮好吃滴",
            swipeLeft: { cardId: 14, transitionText: "我还要吃别的" },
            swipeRight: { cardId: 4, transitionText: "我要回去啦" },
        },
        {
            id: 14,
            imgUrl: "/src/assets/9.png",
            text: "这顿饭好贵。。。",
            swipeLeft: { cardId: 15, transitionText: "吃饱了" },
            swipeRight: { cardId: 4, transitionText: "我要回去啦" },
        },
        {
            id: 15,
            imgUrl: "/src/assets/10.png",
            text: "但很开心～虽然这张照片好丑。。。",
            swipeLeft: { cardId: 4, transitionText: "该回去啦" },
            swipeRight: { cardId: 4, transitionText: "我要回去啦" },
        },
    ];
    let currentCardIndex = writable(0);

    $: currentCard =
        $currentCardIndex < cards.length ? cards[$currentCardIndex] : null;

    let backgroundDiv: HTMLDivElement;

    function handleSwipe(direction: string): void {
        let idx = currentCard?.swipeLeft?.cardId;
        if (direction === "right") {
            idx = currentCard!.swipeRight.cardId;
        }
        if (idx! <= cards.length) {
            currentCardIndex.update((n) => {
                const card = cards.find((card) => card.id === idx);
                if (card) {
                    n = cards.indexOf(card);
                }
                return n;
            });
        } else {
            // Handle the end of the cards array, maybe reset or show a message
            if (direction === "right") {
                backgroundDiv.classList.add("bg-green");
                backgroundDiv.classList.add("background-transition");
            } else {
                backgroundDiv.classList.add("bg-yellow");
                backgroundDiv.classList.add("background-transition");
            }
            currentCard = null;
        }
    }
</script>

<div class="full-screen" bind:this={backgroundDiv}>
    <div class="container">
        {#if currentCard}
            <!-- Use the card's id (or index) as a key to reset component state -->
            {#key currentCard.id}
                <div transition:fade={{ duration: 300 }}>
                    <Card card={currentCard} onSwipe={handleSwipe} />
                </div>
            {/key}
        {:else}
            <p>生日快乐～希望今年你的生日也开心：）即使我不在你身边，为此我感到很抱歉。因为我生日的时候你为我过了两次生日！今年也许是你最后一次在Providence过生日啦，明年真的不知道会怎么样。你会去纽约，我不知道会在哪里。But I guess we will figure it out. 有一件事情我是确定的，就是我们一定会在今年的某一个时间和地点见面，我保证～绿色和黄色是我喜欢的颜色。我觉得他们不像红色或蓝色那么受欢迎，但却代表着最生机盎然的季节：春天。你的生日总是在冬日的末尾，我也知道你总是最钟情春天。我在不久前听一个人说：“春如春溪长”。我很喜欢人们将触不可及的事物进行具像化比喻，因为这样我反复看得见摸得着了。我觉得我们之间的情谊就像春天一样，如春溪长，如夏雨热烈，也如秋田灿烂。即使我们曾经有过不愉快和分离的伤感，可他们也像冬天的瑞雪般终会融入春天。我希望你能在生日尽情享受冬天，观测我们去年的冰如何浸润2024的万物。21岁生日快乐！
            </p>
            <div class="firework"></div>
            <div class="firework"></div>
            <div class="firework"></div>
        {/if}
    </div>
</div>

<style>
    .container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .full-screen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        overflow: hidden;
    }

    :global(.background-transition) {
        transition: background-color 0.5s ease;
    }

    :global(.bg-yellow) {
        background-color: rgb(240, 224, 0);
    }
    :global(.bg-green) {
        background-color: rgb(44, 202, 62);
    }

    @keyframes firework {
        0% {
            transform: translate(var(--x), var(--initialY));
            width: var(--initialSize);
            opacity: 1;
        }
        50% {
            width: 0.5vmin;
            opacity: 1;
        }
        100% {
            width: var(--finalSize);
            opacity: 0;
        }
    }

    .firework,
    .firework::before,
    .firework::after {
        --initialSize: 0.5vmin;
        --finalSize: 45vmin;
        --particleSize: 0.2vmin;
        --color1: yellow;
        --color2: khaki;
        --color3: white;
        --color4: lime;
        --color5: gold;
        --color6: mediumseagreen;
        --y: -30vmin;
        --x: -50%;
        --initialY: 60vmin;
        content: "";
        animation: firework 2s infinite;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, var(--y));
        width: var(--initialSize);
        aspect-ratio: 1;
        background: 
    /*
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 0% 0%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 100% 0%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 100% 100%,
    radial-gradient(circle, var(--color1) var(--particleSize), #0000 0) 0% 100%,
    */
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0)
                50% 0%,
            radial-gradient(circle, var(--color2) var(--particleSize), #0000 0)
                100% 50%,
            radial-gradient(circle, var(--color3) var(--particleSize), #0000 0)
                50% 100%,
            radial-gradient(circle, var(--color4) var(--particleSize), #0000 0)
                0% 50%,
            /* bottom right */
                radial-gradient(
                    circle,
                    var(--color5) var(--particleSize),
                    #0000 0
                )
                80% 90%,
            radial-gradient(circle, var(--color6) var(--particleSize), #0000 0)
                95% 90%,
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0)
                90% 70%,
            radial-gradient(circle, var(--color2) var(--particleSize), #0000 0)
                100% 60%,
            radial-gradient(circle, var(--color3) var(--particleSize), #0000 0)
                55% 80%,
            radial-gradient(circle, var(--color4) var(--particleSize), #0000 0)
                70% 77%,
            /* bottom left */
                radial-gradient(
                    circle,
                    var(--color5) var(--particleSize),
                    #0000 0
                )
                22% 90%,
            radial-gradient(circle, var(--color6) var(--particleSize), #0000 0)
                45% 90%,
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0)
                33% 70%,
            radial-gradient(circle, var(--color2) var(--particleSize), #0000 0)
                10% 60%,
            radial-gradient(circle, var(--color3) var(--particleSize), #0000 0)
                31% 80%,
            radial-gradient(circle, var(--color4) var(--particleSize), #0000 0)
                28% 77%,
            radial-gradient(circle, var(--color5) var(--particleSize), #0000 0)
                13% 72%,
            /* top left */
                radial-gradient(
                    circle,
                    var(--color6) var(--particleSize),
                    #0000 0
                )
                80% 10%,
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0)
                95% 14%,
            radial-gradient(circle, var(--color2) var(--particleSize), #0000 0)
                90% 23%,
            radial-gradient(circle, var(--color3) var(--particleSize), #0000 0)
                100% 43%,
            radial-gradient(circle, var(--color4) var(--particleSize), #0000 0)
                85% 27%,
            radial-gradient(circle, var(--color5) var(--particleSize), #0000 0)
                77% 37%,
            radial-gradient(circle, var(--color6) var(--particleSize), #0000 0)
                60% 7%,
            /* top right */
                radial-gradient(
                    circle,
                    var(--color1) var(--particleSize),
                    #0000 0
                )
                22% 14%,
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0)
                45% 20%,
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0)
                33% 34%,
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0)
                10% 29%,
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0)
                31% 37%,
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0)
                28% 7%,
            radial-gradient(circle, var(--color1) var(--particleSize), #0000 0)
                13% 42%;
        background-size: var(--initialSize) var(--initialSize);
        background-repeat: no-repeat;
    }

    .firework::before {
        --x: -50%;
        --y: -50%;
        --initialY: -50%;
        /*   transform: translate(-20vmin, -2vmin) rotate(40deg) scale(1.3) rotateY(40deg); */
        transform: translate(-50%, -50%) rotate(40deg) scale(1.3) rotateY(40deg);
        /*   animation: fireworkPseudo 2s infinite; */
    }

    .firework::after {
        --x: -50%;
        --y: -50%;
        --initialY: -50%;
        /*   transform: translate(44vmin, -50%) rotate(170deg) scale(1.15) rotateY(-30deg); */
        transform: translate(-50%, -50%) rotate(170deg) scale(1.15)
            rotateY(-30deg);
        /*   animation: fireworkPseudo 2s infinite; */
    }

    .firework:nth-child(2) {
        --x: 30vmin;
    }

    .firework:nth-child(2),
    .firework:nth-child(2)::before,
    .firework:nth-child(2)::after {
        --color1: pink;
        --color2: violet;
        --color3: fuchsia;
        --color4: orchid;
        --color5: plum;
        --color6: lavender;
        --finalSize: 40vmin;
        left: 30%;
        top: 60%;
        animation-delay: -0.25s;
    }

    .firework:nth-child(3) {
        --x: -30vmin;
        --y: -50vmin;
    }

    .firework:nth-child(3),
    .firework:nth-child(3)::before,
    .firework:nth-child(3)::after {
        --color1: cyan;
        --color2: lightcyan;
        --color3: lightblue;
        --color4: PaleTurquoise;
        --color5: SkyBlue;
        --color6: lavender;
        --finalSize: 35vmin;
        left: 70%;
        top: 60%;
        animation-delay: -0.4s;
    }
</style>
