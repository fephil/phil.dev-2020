import * as Sentry from '@sentry/browser';

const contactForm = () => {
  const contactFormEl = document.getElementById('js-contact-form');

  if (!contactFormEl) {
    return;
  }

  const successEl = document.getElementById('js-contact-form-success');
  const errorEl = document.getElementById('js-contact-form-error');
  const loadingEl = document.getElementById('js-contact-form-loading');

  function sendSuccess() {
    errorEl.classList.remove('block');
    errorEl.classList.add('hidden');
    successEl.classList.remove('hidden');
    successEl.classList.add('block');
  }

  function sendError() {
    successEl.classList.remove('block');
    successEl.classList.add('hidden');
    errorEl.classList.remove('hidden');
    errorEl.classList.add('block');
  }

  function sendData() {
    loadingEl.classList.remove('hidden');
    loadingEl.classList.add('block');
    contactFormEl.classList.remove('block');
    contactFormEl.classList.add('hidden');

    fetch(contactFormEl.action, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: new FormData(contactFormEl),
    })
      .then((response) => response.json())
      .then((response) => {
        loadingEl.classList.remove('block');
        loadingEl.classList.add('hidden');

        if (!response.ok) {
          sendError();
          Sentry.captureMessage(response.error);
          return;
        }

        sendSuccess();
      })
      .catch((error) => {
        loadingEl.classList.remove('block');
        loadingEl.classList.add('hidden');
        sendError();
        Sentry.captureException(error);
      });
  }

  window.addEventListener('DOMContentLoaded', () => {
    contactFormEl.addEventListener('submit', (event) => {
      event.preventDefault();
      sendData();
    });
  });
};

export default contactForm;
