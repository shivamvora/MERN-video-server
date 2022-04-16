const express = require( 'express' );
const router = express.Router();

router.post( '/', ( req, res, next ) => {
    res.status( 200 ).json( {
        message: 'Message received from post on /api/signUp'
    } )
} );

module.exports = router;