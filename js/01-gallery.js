import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(`.gallery`);
const galleryList = document.createElement(`ul`);
galleryList.classList.add(`gallery_list`);
const link = "${item.preview}";
gallery.append(galleryList);

const galleryMass = galleryItems
  .map(
    (item) =>
      `
      <div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join("");
galleryList.insertAdjacentHTML("beforeend", galleryMass);

const photoOpen = (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  console.log(event.target);
  const fullSize = event.target.closest(`.gallery__link`).getAttribute(`href`);
  console.log(fullSize);
  basicLightbox
    .create(
      `
		<img src= ${fullSize}>
	`
    )
    .show();

  return;
};
galleryList.addEventListener(`click`, photoOpen);
