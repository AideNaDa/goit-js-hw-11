import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function showLoader() {
  const loader = document.getElementById('loader');
  loader.style.display = 'block';
}

function hideLoader() {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
}

showLoader();

export function searchPhotos(markupInterface, input) {
  const searchParams = new URLSearchParams({
    key: '43803497-a801e9cfe7ea9bdd19d306bb3',
    q: input.value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `https://pixabay.com/api/?${searchParams}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      markupInterface(data);
      hideLoader();
    })
    .catch(error => {
        console.error('Error:', error);
        iziToast.error({
            title: 'Error',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
          hideLoader();
    });
}