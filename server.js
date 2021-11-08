const express = require('express');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

app
    .disable('x-powered-by')
    .enable('trust proxy')
    .use(compression())
    .use(express.static('./dist/'))
    .use('/*', express.static('./dist/'));

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});
