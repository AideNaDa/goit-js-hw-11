import { searchPhotos } from "./js/pixabay-api.js";
import { markupInterface, clearInput } from "./js/render-functions.js";

const searchButton = document.querySelector(".searchButton");


searchButton.addEventListener('click', (event) => {
    event.preventDefault();

    const input = document.querySelector('.input');

    searchPhotos(markupInterface, input);

    clearInput();
});
