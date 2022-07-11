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

const cardTemplate = document.querySelector("#card-template").content;
const gallery = document.querySelector(".gallery");
const formProfileElement = document.querySelector(".popup__container_change");

const formProfileElementAdd = document.querySelector(".popup__container_add");
const titleInput = document.querySelector(".popup__item_title");
const linkInput = document.querySelector(".popup__item_link");
const hearts = document.querySelectorAll(".card__heart");
const trashCans = document.querySelectorAll(".card__delete");

const btnProfileChange = document.querySelector(".profile__change-button");
const btnProfileAddImg = document.querySelector(".profile__add-button");
const btnPopupCloseChange = document.querySelector(".popup__close_change");
const btnPopupCloseAdd = document.querySelector(".popup__close_add");

const popupProfileName = document.querySelector(".popup__item_name");
const popupProfileAbout = document.querySelector(".popup__item_about");

const pic = document.querySelector(".popup-pic");
const clsPic = document.querySelector(".popup-pic__close");

const popupChange = document.querySelector(".popup-change");
const popupAdd = document.querySelector(".popup-add");
const profileName = document.querySelector(".profile__name");
const about = document.querySelector(".profile__about");
const caption = document.querySelector(".popup-pic__desc");

function openPopup(popup) {
  popup.classList.add("active");
}

function closePopup(popup) {
  popup.classList.remove("active");
}

btnProfileChange.addEventListener("click", () => {
  openPopup(popupChange);
  popupProfileName.value = profileName.textContent;
  popupProfileAbout.value = about.textContent;
});

btnProfileAddImg.addEventListener("click", () => {
  openPopup(popupAdd);
});

btnPopupCloseChange.addEventListener("click", () => {
  closePopup(popupChange);
});

btnPopupCloseAdd.addEventListener("click", () => {
  closePopup(popupAdd);
});

function submitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = popupProfileName.value;
  about.textContent = popupProfileAbout.value;
  closePopup(popupChange);
}

formProfileElement.addEventListener("submit", submitProfileForm);

function addCard(card, container) {
  container.prepend(card);
}

function createCard(titleInput, linkInput) {
  const cardContent = cardTemplate.querySelector(".card").cloneNode(true);

  const img = cardContent.querySelector(".card__image");
  img.addEventListener("click", (evt) => {
    openPopup(pic);
    const desc = evt.target.parentNode.querySelector(".card__title");
    pic.querySelector(".popup-pic__img").src = img.src;
    pic.querySelector(".popup-pic__img").alt = img.alt;
    caption.textContent = desc.textContent;
  });
  cardContent.querySelector(".card__title").textContent = titleInput;
  cardContent.querySelector(".card__image").src = linkInput;
  cardContent.querySelector(".card__image").alt = titleInput;

  const heart = cardContent.querySelector(".card__heart");
  heart.addEventListener("click", (evt) => {
    evt.target.classList.toggle("card__heart_active");
  });
  const del = cardContent.querySelector(".card__delete");
  del.addEventListener("click", (evt) => {
    gallery.removeChild(evt.target.parentNode);
  });

  return cardContent;
}

formProfileElementAdd.addEventListener("submit", (e) => {
  e.preventDefault();
  addCard(createCard(titleInput.value, linkInput.value), gallery);
  titleInput.value = "";
  linkInput.value = "";
  closePopup(popupAdd);
});

clsPic.addEventListener("click", (evt) => {
  closePopup(pic);
});

for (let i = 0; i < initialCards.length; i++) {
  addCard(createCard(initialCards[i].name, initialCards[i].link), gallery);
}
