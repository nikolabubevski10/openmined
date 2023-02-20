import React from 'react';
import { FirebaseAppProvider } from 'reactfire';
import { ChakraProvider } from '@chakra-ui/react';
import { SEOProvider } from '@openmined/shared/util-page';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import sentryIgnore from './sentry-ignore';
import theme from './theme';

import ErrorBoundaryWrapper from './components/ErrorBoundaryWrapper';
import { Firebase } from './Firebase';
// import seoMain from './assets/seo-main.jpg';
// import seoFacebook from './assets/seo-facebook.jpg';
// import seoTwitter from './assets/seo-twitter.jpg';

const firebaseConfig = {
  apiKey: process.env.NX_FIREBASE_API_KEY,
  authDomain: process.env.NX_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NX_FIREBASE_DATABASE_URL,
  projectId: process.env.NX_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NX_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NX_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NX_FIREBASE_APP_ID,
  measurementId: process.env.NX_FIREBASE_MEASUREMENT_ID,
};

const metadata = {
  name: 'OpenMined Courses',
  short_name: 'OpenMined Courses',
  description:
    'OpenMined Courses is your home for free courses on privacy-preserving artificial intelligence.',
  images: {
    // main: seoMain,
    // facebook: seoFacebook,
    // twitter: seoTwitter,
  },
};

export default ({ children }) => (
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <ChakraProvider theme={theme}>
      <SEOProvider metadata={metadata}>
        <ErrorBoundaryWrapper>
          <Firebase />
          {children}
        </ErrorBoundaryWrapper>
      </SEOProvider>
    </ChakraProvider>
  </FirebaseAppProvider>
);

// TODO:SSR sentry integration
// if (process.env.NODE_ENV === 'production') {
//   Sentry.init({
//     dsn:
//       'https://3a0a3cc70179428f8ecda14adc0bb149@o492939.ingest.sentry.io/5561166',
//     autoSessionTracking: true,
//     integrations: [new Integrations.BrowserTracing()],
//     tracesSampleRate: 0.2,
//     environment: process.env.NODE_ENV,
//     ...sentryIgnore,
//   });
// }
