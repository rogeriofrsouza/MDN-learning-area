const section = document.querySelector('.preview');
const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');
const button3 = document.querySelector('.btn3');
const button4 = document.querySelector('.btn4');
const button5 = document.querySelector('.btn5');
const button6 = document.querySelector('.btn6');

button1.addEventListener('click', () => {
  section.innerHTML = '';

  const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );

  fetchPromise.then((response) => {
    section.textContent += `Received response: ${response.status}`;
  });

  section.textContent += "Started request…\n";
});

button2.addEventListener('click', () => {
   section.innerHTML = '';

  fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const list = document.createElement('ul');

      for (const product of data) {
        const listItem = document.createElement('li');
        const h2 = document.createElement('h2');
        const img = document.createElement('img');
        const para = document.createElement('p');
         
        h2.textContent = product.name;
        img.setAttribute('src', `https://raw.githubusercontent.com/mdn/learning-area/main/javascript/apis/fetching-data/can-store/images/${product.image}`);
        para.textContent = `$${product.price} - ${product.type}`;
        
        listItem.append(h2, img, para);
        list.appendChild(listItem);
      }

      section.append(list);
    });
});

button3.addEventListener('click', () => {
  section.innerHTML = '';

  const fetchPromise = fetch(
    "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );

  fetchPromise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      section.textContent = `Could not get products: ${error}`;
    });
});

button4.addEventListener('click', () => {
  section.innerHTML = '';

  const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );

  Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
      for (const response of responses) {
        section.textContent += `${response.url}: ${response.status}\n`;
      }
    })
    .catch((error) => {
      section.textContent = `Failed to fetch: ${error}`;
    });
});

button5.addEventListener('click', () => {
  section.innerHTML = '';

  const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );

  Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((response) => {
      section.textContent = `${response.url}: ${response.status}`;
    })
    .catch((error) => {
      section.textContent = `Failed to fetch: ${error}`;
  });
});

button6.addEventListener('click', () => {
  section.innerHTML = '';

  async function fetchProducts() {
    try {
      const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return `Could not get products: ${error}`;
    }
  }

  fetchProducts()
    .then((data) => {
      const list = document.createElement('dl');

      for (const product of data) {
        const term = document.createElement('dt');
        const description = document.createElement('dd');

        term.textContent = product.name;
        description.textContent = `This product type is ${product.type} and is currently $${product.price}`;
        
        list.append(term, description);
      }

      section.appendChild(list);
    })
    .catch((error) => {
      section.textContent = error;
    });
});
