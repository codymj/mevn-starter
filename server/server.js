const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public/'));
app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.set('port', (process.env.PORT || 8081));
app.listen(app.get('port'), () => {
    console.log('Server running on port ' + app.get('port'));
});
