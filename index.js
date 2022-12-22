const wrapper__card = document.querySelector(".wrapper__card");
const cards = document.querySelector(".cards");

let isPressedDown = false;

let cursorXSpace;

wrapper__card.addEventListener("mousedown", (e) => {
  isPressedDown = true;
  cursorXSpace = e.offsetX - cards.offsetLeft;
  wrapper__card.style.cursor = "graing";
});

wrapper__card.addEventListener("mouseup", () => {
  wrapper__card.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  isPressedDown = false;
});

wrapper__card.addEventListener("mousemove", (e) => {
  if (!isPressedDown) return;
  e.preventDefault();
  cards.style.left = `${e.offsetX - cursorXSpace}px`;
  boundcards();
});

function boundcards() {
  const wrapper__card_rect = wrapper__card.getBoundingClientRect();
  const cards_rect = cards.getBoundingClientRect();

  if (parseInt(cards.style.left) > 0) {
    cards.style.left = 0;
  } else if (cards_rect.right < wrapper__card_rect.right) {
    cards.style.left = `-${cards_rect.width - wrapper__card_rect.width}px`;
  }
}
