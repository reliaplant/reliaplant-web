const functions = require('firebase-functions');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ 
  dev, 
  conf: { 
    distDir: '.next'
  } 
});
const handle = app.getRequestHandler();

// Exportamos ambas funciones para Firebase
exports.nextServer = functions.https.onRequest((req, res) => {
  return app.prepare()
    .then(() => handle(req, res))
    .catch(error => {
      console.error('Error during request:', error);
      res.status(500).send('Internal Server Error');
    });
});

exports.nextApp = functions.https.onRequest((req, res) => {
  return app.prepare()
    .then(() => handle(req, res))
    .catch(error => {
      console.error('Error during nextApp request:', error);
      res.status(500).send('Internal Server Error');
    });
});