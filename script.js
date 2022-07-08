function openPopup(pop) {
  const popup = document.querySelector(pop);
  popup.classList.add("popup_active");
 
}

function closePopup(pop) {
  const close = document.querySelector(pop);
  close.classList.remove("popup_active");
}

const changeBtn = document.querySelector(".profile__change-button");
changeBtn.addEventListener("click", () => {
  openPopup(".popup-change");
});

const addBtn = document.querySelector(".profile__add-button");
addBtn.addEventListener("click", () => {
  openPopup(".popup-add");
});

const closeBtnChange = document.querySelector(".popup__close_change");
closeBtnChange.addEventListener("click", () => {
  closePopup(".popup-change");
});

const closeBtnAdd = document.querySelector(".popup__close_add");
closeBtnAdd.addEventListener("click", () => {
  closePopup(".popup-add");
});

const formElement = document.querySelector(".popup__container_change");
const nameInput = document.querySelector(".popup__item_name");
const jobInput = document.querySelector(".popup__item_about");

function formSubmitHandler(evt) {
  evt.preventDefault();
  // console.log('submiiiiit');
  let name = document.querySelector(".profile__name");
  let about = document.querySelector(".profile__about");
  name.textContent = nameInput.value;
  about.textContent = jobInput.value;
}

formElement.addEventListener("submit", formSubmitHandler);

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function addCard(titleInput, linkInput) {
  const cardContent = cardTemplate.querySelector(".card").cloneNode(true);
  cardContent.querySelector(".card__title").textContent = titleInput;
  cardContent.querySelector(".card__image").src = linkInput;
  gallery.append(cardContent);
}

const cardTemplate = document.querySelector("#card-template").content;
const gallery = document.querySelector(".gallery");

for (let i = 0; i < initialCards.length; i++) {
  addCard(initialCards[i].name, initialCards[i].link);
}

const formElementAdd = document.querySelector(".popup__container_add");
const titleInput = document.querySelector(".popup__item_title");
const linkInput = document.querySelector(".popup__item_link");

formElementAdd.addEventListener("submit", () => {
  e.preventDefault();
  addCard(titleInput.value, linkInput.value);
});

const hearts = document.querySelectorAll(".card__heart");

hearts.forEach((heart) => {
  heart.addEventListener("click", (evt) => {
    evt.target.classList.toggle("card__heart_active");
  });
});

const trashCans = document.querySelectorAll(".card__delete");
trashCans.forEach((del) => {
  del.addEventListener("click", (evt) => {
    gallery.removeChild(evt.target.parentNode);
  });
});

const picTemplate = document.querySelector("#popup-pic-id").content;
// console.log(picTemplate);
// console.log(picTemplate.querySelector(".popup-pic"));
function popupPic(imgToOpen, desc) {
  const pic = picTemplate.querySelector(".popup-pic").cloneNode(true);
  pic.querySelector(".popup-pic__img").src = imgToOpen;
  document.querySelector(".page").append(pic);
  const caption = document.querySelector(".popup-pic__desc");
  caption.textContent = desc.textContent;
  pic.classList.add("popup-pic_active");
  const clsPic = document.querySelector(".popup-pic__close");
  clsPic.addEventListener("click", (evt) => {
    // console.log(evt.target.parentNode.parentNode);
    // console.log(document.querySelector(".page").childNodes);
    document.querySelector(".page").removeChild(evt.target.parentNode.parentNode);
  });
}
//  document.querySelector(".card__title")
const images = document.querySelectorAll(".card__image");
images.forEach((img) => {
  img.addEventListener("click", (evt) => {
    let desc = evt.target.parentNode.querySelector(".card__title");
    popupPic(img.src, desc);
  });
});

