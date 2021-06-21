// navbar
function navToggle() {
  const button = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  button.addEventListener('click', function () {
    button.classList.toggle('menu-active');
  });
}
// text animation
// function animateText() {
//   const wordsWrapper = document.querySelector('.words-wrapper');
//   let words = document.querySelectorAll('.word');
//   words.forEach(function (word) {
//     word.classList.toggle('isVisible');
//     let wordWidth = word.offsetWidth;
//     console.log(word);
//     wordsWrapper.animate([{ width: `${wordWidth + 12}px` }], {
//       duration: 1000,
//       iteration: 1,
//       fill: 'forwards',
//       endDelay: 1000,
//     });
//   });
// }

function animateText() {
  let wordWrapper = document.querySelector('.words-wrapper');
  let words = document.querySelectorAll('.word');
  let index = 0;
  let wait = 3000;
  let isDeleting = false;

  function type() {
    words[index].className = 'isVisible';
    let txtWidth = words[index].offsetWidth;
    if (wordWrapper.offsetWidth < txtWidth) {
      wordWrapper.animate([{ width: `${txtWidth + 5}px` }], {
        duration: 1000,
        fill: 'forwards',
        endDelay: 1000,
      });
    } else if (wordWrapper.offsetWidth >= txtWidth) {
      wordWrapper.animate([{ width: `${0}px` }], {
        duration: 1000,
        fill: 'forwards',
        endDelay: 1000,
      });

      setTimeout(() => {
        words[index].className = 'isHidden';
        if (index < 2) {
          index += 1;
        } else if (index === 2) {
          index = 0;
        }
      }, 1000);
    }
    setTimeout(() => type(), 2000);
  }
  type();
}

// Function calling
function loadFunctions() {
  navToggle();
  animateText();
}
document.addEventListener('DOMContentLoaded', loadFunctions());
