const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const listEl = document.querySelector(".gallery");
const lightboxEL = document.querySelector(".lightbox");
const backdropEl = document.querySelector(".lightbox__overlay");
const contentEl = document.querySelector(".lightbox__content");
const btnEl = document.querySelector(".lightbox__button")

function createIImg(arr) {
    const img = arr.map((elem) => {
        return `<li class="js-item"><img src="${elem.preview}" alt="${elem.description}" data-original="${elem.original}" class="js-img"></li>`
    }).join("");

    listEl.innerHTML = img;
}
createIImg(galleryItems);

listEl.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") {
    return
  }
  lightboxEL.style.opacity = "1";
  lightboxEL.style.pointerEvents = "auto";
  const originalImg = event.target.dataset.original;
  contentEl.innerHTML = `<img src="${originalImg}">`;
})

btnEl.addEventListener("click", () => {
  lightboxEL.style.opacity = "0"
  lightboxEL.style.pointerEvents = "none"
})

backdropEl.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
      lightboxEL.style.opacity = "0"
      lightboxEL.style.pointerEvents = "none"
  }
})

window.addEventListener("keydown", (event) => {  
  if (event.code === "Escape") {
      lightboxEL.style.opacity = "0"
      lightboxEL.style.pointerEvents = "none"
  }
})