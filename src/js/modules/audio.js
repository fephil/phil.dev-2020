import animate from './animate';

const audio = () => {
  const containerEl = document.querySelector('.js-audio');

  if (!containerEl) {
    return;
  }

  const imageEl = document.querySelector('.js-audio-image');
  const playerEl = document.querySelector('.js-audio-player');
  const closeEl = document.querySelector('.js-audio-close');
  const audioEl = document.querySelector('.js-audio-element');
  const playEl = document.querySelector('.js-audio-play');
  const pauseEl = document.querySelector('.js-audio-pause');

  function swapToPlayer() {
    playerEl.setAttribute('style', `height:${imageEl.clientHeight}px`);

    animate(imageEl, 'flipOutX').then(() => {
      imageEl.classList.remove('block');
      imageEl.classList.add('hidden');
      playerEl.classList.remove('hidden');
      playerEl.classList.add('flex');

      animate(playerEl, 'flipInX').then(() => {});
    });
  }

  function swapToImage() {
    animate(playerEl, 'flipOutX').then(() => {
      playerEl.classList.remove('block');
      playerEl.classList.add('hidden');
      imageEl.classList.remove('hidden');
      imageEl.classList.add('block');

      animate(imageEl, 'flipInX').then(() => {});
    });
  }

  function swapToPause() {
    playEl.classList.remove('block');
    playEl.classList.add('hidden');
    pauseEl.classList.remove('hidden');
    pauseEl.classList.add('block');
  }

  function swapToPlay() {
    pauseEl.classList.remove('block');
    pauseEl.classList.add('hidden');
    playEl.classList.remove('hidden');
    playEl.classList.add('block');
  }

  window.addEventListener('DOMContentLoaded', () => {
    imageEl.addEventListener('click', () => {
      swapToPlayer();
      window.fathom.trackGoal('UVZPFFEK', 0);
    });

    closeEl.addEventListener('click', () => {
      swapToImage();
    });

    playEl.addEventListener('click', () => {
      swapToPause();
      audioEl.play();
      window.fathom.trackGoal('L3KJCC3F', 0);
    });

    pauseEl.addEventListener('click', () => {
      swapToPlay();
      audioEl.pause();
    });

    audioEl.addEventListener('ended', () => {
      swapToPlay();
    });
  });
};

export default audio;
