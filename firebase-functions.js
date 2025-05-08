const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { default: next } = require('next');
const nextConfig = require('./next.config.js');

const isDev = process.env.NODE_ENV !== 'production';
const nextjsServer = next({
  dev: isDev,
  conf: nextConfig,
});
const nextjsHandle = nextjsServer.getRequestHandler();

exports.nextServer = functions
  .region('us-central1')
  .https.onRequest((req, res) => {
    return nextjsServer.prepare().then(() => nextjsHandle(req, res));
  });