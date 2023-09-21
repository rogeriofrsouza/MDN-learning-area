const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

const animation = alice1.animate(aliceTumbling, aliceTiming);
animation.finished.then(() => {
  const animation2 = alice2.animate(aliceTumbling, aliceTiming);
  animation2.finished.then(() => {
    const animation3 = alice3.animate(aliceTumbling, aliceTiming);
    animation3.finished.then(() => {
      const container = document.querySelector('#alice-container');
      const h2 = document.createElement('h2');
      const btn = document.createElement('button');

      h2.textContent = "Finished all animations";
      btn.textContent = "Reload page";
      btn.addEventListener("click", () => {
        document.location.reload();
      });

      container.innerHTML = "";
      container.append(h2, btn);
    });
  });
});

