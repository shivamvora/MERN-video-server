const http = require( 'http' );

const app = require( './App' );
const config = require( './confings/default' );

const port = config.port;

const server = http.createServer( app );

server.listen( port );

console.log( 'Server is running on', port );