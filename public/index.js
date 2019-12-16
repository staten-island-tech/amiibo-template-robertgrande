const path = require('path');
const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send('Thami likes and bagels. He smell.');
})

app.get('/thamisucks', (req, res) => {
    res.send('he succ. we habe to do wulik ate');
}) //app.get is one of many requests that can be used for servers

app.listen(3000, () => {
    console.log('listen on port 3000');
});