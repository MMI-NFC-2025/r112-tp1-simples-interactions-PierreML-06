// TODO
// 1)
  const aMettreEnRouge = document.querySelector('#a-mettre-en-rouge');
    aMettreEnRouge.style.color = 'red';


// 2)
  const enRougeSuiteAClick = document.querySelector('#en-rouge-suite-a-click');
  if (enRougeSuiteAClick) {
    enRougeSuiteAClick.addEventListener('click', () => {
      enRougeSuiteAClick.style.color = 'red';
    });
  }

// 3)
  const collH2 = document.querySelectorAll('h2');
  collH2.forEach((elm) => {
    elm.addEventListener('click', (evt) => {
      evt.target.style.color = 'red';
    });
  });
