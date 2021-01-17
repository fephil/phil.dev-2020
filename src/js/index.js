/* global projectVersion */

import * as Sentry from '@sentry/browser';
import { Integrations } from '@sentry/tracing';

import startDayCalculator from './modules/startDayCalculator';
import contactForm from './modules/contactForm';
import audio from './modules/audio';

Sentry.init({
  dsn: 'https://26409a2261d447b6b5827e9b6469c1fc@o77665.ingest.sentry.io/5434439',
  release: `phil.dev-2020@${projectVersion}`,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 0.5,
});

startDayCalculator();
contactForm();
audio();
