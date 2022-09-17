const routes = require('express').Router();
routes.get('/',(req, res)=> {
    res.send('Nikolin Oyella');
});

module.exports = routes;