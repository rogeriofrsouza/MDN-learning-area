const section = document.querySelector('section');
let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(text))
  .catch(error => console.log(error));

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;
  let female = 0;

  // Add your code here
  
  const cats = JSON.parse(catString);

  for (let i = 0; i < cats.length; i++) {
    if (i === cats.length - 1) {
      motherInfo += `${cats[i].name}.`
    } else if (i === cats.length - 2) {
      motherInfo += `${cats[i].name} and `
    } else {
      motherInfo += `${cats[i].name}, `;
    }

    for (const kitten of cats[i].kittens) {
      total++;
      if (kitten.gender === 'm') {
        male++;
      } else {
        female++;
      }
    }
  }

  kittenInfo = `Total kittens: ${total}, ${male} are male and ${female} are female.`;

  // Don't edit the code below here!

  // These lines are inside the function because otherwise they could be
  // evaluated by JavaScript before the Promise containing the data is 
  // resolved or rejected. This is required due to the use of assynchronous
  // functions.
  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);

