const displayedImage = document.querySelector('.displayed-img');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('button');
const thumbBar = document.querySelector('.thumb-bar');

function outlineImg() {
  for (const img of thumbBar.children) {
    if (img.getAttribute('src') === displayedImage.getAttribute('src')) {
      img.classList.add('outline');
    } else {
      img.classList.remove('outline');
    }
  }
}

/* Declaring the array of image filenames */

const imgs = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */

const alts = [
  'Closeup of a blue human eye', 
  'Some random shapes in a stone', 
  'A set of white and purple flowers', 
  'An egyptian wall painting', 
  'Closeup of a butterfly in a plant' 
];

/* Looping through images */

for (let i = 0; i < imgs.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${imgs[i]}`);
  newImage.setAttribute('alt', alts[i]);
  thumbBar.appendChild(newImage);
}

thumbBar.addEventListener('click', (event) => {
  const src = event.target.getAttribute('src');
  const alt = event.target.getAttribute('alt');
  displayedImage.setAttribute('src', src);
  displayedImage.setAttribute('alt', alt);
  outlineImg();
});

outlineImg();

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', (event) => {
  const value = event.target.getAttribute('class');
  if (value === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  } 
});

