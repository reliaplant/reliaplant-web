const functions = require('firebase-functions');
const nextServer = require('./firebase-functions').nextServer;

// Exportamos las funciones que Firebase utilizará
exports.nextServer = nextServer;