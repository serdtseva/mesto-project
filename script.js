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
const nameInput = document.querySelector(".popup__item_name");
const jobInput = document.querySelector(".popup__item_about");
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

function openPopup(pop) {
  const popup = document.querySelector(pop);
  if (pop = ".popup-change") {
    popupProfileName.value =
      document.querySelector(".profile__name").textContent;
    popupProfileAbout.value =
      document.querySelector(".profile__about").textContent;
  }
  popup.classList.add("active");
}

function closePopup(pop) {
  const close = document.querySelector(pop);
  close.classList.remove("active");
}

btnProfileChange.addEventListener("click", () => {
  openPopup(".popup-change");
});

btnProfileAddImg.addEventListener("click", () => {
  openPopup(".popup-add");
});

btnPopupCloseChange.addEventListener("click", () => {
  closePopup(".popup-change");
});

btnPopupCloseAdd.addEventListener("click", () => {
  closePopup(".popup-add");
});

function submitProfileForm(evt) {
  evt.preventDefault();
  const name = document.querySelector(".profile__name");
  const about = document.querySelector(".profile__about");
  name.textContent = nameInput.value;
  about.textContent = jobInput.value;
  closePopup(".popup-change");
}

formProfileElement.addEventListener("submit", submitProfileForm);

function addCard(titleInput, linkInput) {
  const cardContent = cardTemplate.querySelector(".card").cloneNode(true);
  cardContent.querySelector(".card__title").textContent = titleInput;
  cardContent.querySelector(".card__image").src = linkInput;
  cardContent.querySelector(".card__image").alt = "добавленная картинка";
  return cardContent;
}

function createCard(titleInput, linkInput) {
  const cardContent = addCard(titleInput, linkInput);
  gallery.prepend(cardContent);
  const img = cardContent.querySelector(".card__image");
  // console.log(img);
  //console.dir(img);
  img.addEventListener("click", (evt) => {
    const popupPic = document.querySelector(".popup-pic");
    popupPic.classList.add("active");
   // popupPic.classList.remove("popup-pic");
   // popupPic.classList.add("popup-pic");
    const imgToOpen = img.src;
    console.log(img.src);
    const desc = evt.target.parentNode.querySelector(".card__title");
    const pic = document.querySelector(".popup-pic");
    pic.querySelector(".popup-pic__img").src = imgToOpen;
    const caption = document.querySelector(".popup-pic__desc");
    caption.textContent = desc.textContent;
    const clsPic = document.querySelector(".popup-pic__close");
    clsPic.addEventListener("click", (evt) => {
      closePopup(".popup-pic");
    });
  });
  const heart = cardContent.querySelector(".card__heart");
  heart.addEventListener("click", (evt) => {
    evt.target.classList.toggle("card__heart_active");
  });
  const del = cardContent.querySelector(".card__delete");
  del.addEventListener("click", (evt) => {
    gallery.removeChild(evt.target.parentNode);
  });
}

for (let i = 0; i < initialCards.length; i++) {
  createCard(initialCards[i].name, initialCards[i].link);
}

formProfileElementAdd.addEventListener("submit", (e) => {
  e.preventDefault();
  createCard(titleInput.value, linkInput.value);
  closePopup(".popup-add");
});
/*
function popupPic(imgToOpen, desc) {
  const pic = picTemplate.querySelector(".popup-pic").cloneNode(true);
  pic.querySelector(".popup-pic__img").src = imgToOpen;
  document.querySelector(".page").append(pic);
  const caption = document.querySelector(".popup-pic__desc");
  caption.textContent = desc.textContent;
  pic.classList.add("popup-pic_active");
  const clsPic = document.querySelector(".popup-pic__close");
  clsPic.addEventListener("click", (evt) => {
    pic.classList.remove("popup-pic_active");
    document
      .querySelector(".page")
      .removeChild(evt.target.parentNode.parentNode);
  });
}
*/
