<script lang="ts">
    import type { Card } from './types';
  
    export let card: Card;
    export let onSwipe: (direction: 'left' | 'right') => void;
  
    let startX: number;
    let isDragging = false;
    let dragDirection: 'left' | 'right' | null = null;
    let transformAmount: number = 0;
    let rotationDegrees: number = 0;
  
    function startDrag(event: MouseEvent | TouchEvent) {
      isDragging = true;
      startX = event.type === 'touchstart' 
               ? (event as TouchEvent).touches[0].clientX 
               : (event as MouseEvent).clientX;
      document.addEventListener('mousemove', handleDrag);
      document.addEventListener('touchmove', handleDrag);
      document.addEventListener('mouseup', endDrag);
      document.addEventListener('touchend', endDrag);
    }
  
    function handleDrag(event: MouseEvent | TouchEvent) {
      if (!isDragging) return;
      const currentX = event.type === 'mousemove' 
                       ? (event as MouseEvent).clientX 
                       : (event as TouchEvent).touches[0].clientX;
      const draggedDistance = currentX - startX;
      dragDirection = draggedDistance > 0 ? 'right' : 'left';
      transformAmount = draggedDistance;
      rotationDegrees = Math.max(Math.min(transformAmount / 10, 15), -15);
    }
  
    function endDrag() {
      isDragging = false;
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('touchmove', handleDrag);
      document.removeEventListener('mouseup', endDrag);
      document.removeEventListener('touchend', endDrag);
  
      if (Math.abs(transformAmount) > 100) {
        if (dragDirection !== null) {
            onSwipe(dragDirection);
        }
      } else {
        transformAmount = 0;
        rotationDegrees = 0;
      }
  
      dragDirection = null; // Reset direction after swipe detection
    }
  </script>
  

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="card"
    on:mousedown={startDrag} 
    on:touchstart={startDrag}
    style="background-image: url({card.imgUrl}); transform: translateX({transformAmount}px) rotate({rotationDegrees}deg);"
>
    <p class="card-text">{card.text}</p>
    <div class="card-transition-text">
        {#if isDragging && dragDirection === "left"}
            <p class="swipe-text left">{card.swipeLeft?.transitionText}</p>
        {/if}
        {#if isDragging && dragDirection === "right"}
            <p class="swipe-text right">{card.swipeRight?.transitionText}</p>
        {/if}
    </div>
</div>

<style>
    .card {
        position: relative;
        width: 300px;
        height: 400px;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 20px;
        overflow: hidden;
        transition: transform 0.3s ease-out;
        user-select: none;
        cursor: grab;
    }
    .card:active {
        cursor: grabbing;
    }
    .card-transition-text {
        position: absolute;
        height: 100%;
        width: 100%;
    }

    .card-text {
        bottom: -20px;
        position: absolute;
        background: black;
        width: 100%;
        height: 20%;
        color: white;
        padding-top: 20px;
    }
    .swipe-text {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
        font-size: 1em;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 5px;
        padding: 5px 10px;
    }
    .left {
        right: 200px;
    }
    .right {
        left: 200px;
    }
</style>
