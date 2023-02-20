// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const dotenv = require('dotenv-flow');
const withImages = require('next-images')

module.exports = withNx(withImages({
  // experimental: {
  //   reactMode: 'concurrent'
  // },
  reactStrictMode: true,
  env: {
    NX_FIREBASE_API_KEY: process.env.NX_FIREBASE_API_KEY,
    NX_FIREBASE_AUTH_DOMAIN: process.env.NX_FIREBASE_AUTH_DOMAIN,
    NX_FIREBASE_DATABASE_URL: process.env.NX_FIREBASE_DATABASE_URL,
    NX_FIREBASE_PROJECT_ID: process.env.NX_FIREBASE_PROJECT_ID,
    NX_FIREBASE_STORAGE_BUCKET: process.env.NX_FIREBASE_STORAGE_BUCKET,
    NX_FIREBASE_MESSAGING_SENDER_ID: process.env.NX_FIREBASE_MESSAGING_SENDER_ID,
    NX_FIREBASE_APP_ID: process.env.NX_FIREBASE_APP_ID,
    NX_FIREBASE_MEASUREMENT_ID: process.env.NX_FIREBASE_MEASUREMENT_ID,
  },
}));
