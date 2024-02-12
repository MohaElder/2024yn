export interface Card {
    id: number;
    imgUrl: string;
    text: string;
    swipeLeft: CardAction;
    swipeRight: CardAction;
  }

export interface CardAction {
    cardId: number;
    transitionText: string;
  }