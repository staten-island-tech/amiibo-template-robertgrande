const path = require('path');
const express = require('express');
const app = express();

//define paths for express
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');

//set up handlebars engine and views location
app.set('views engine', 'hbs'); //tell express/NODE to use handelbars as a template
app.set('views', viewsPath); //telling express to get template from template/views folder

app.get('', async (req, res) => {
    try{
        res.render('index');
    }catch(error){
        res.status(500).send();
    }
});

app.get('/thamisucks', (req, res) => {
    res.send('he succ. we habe to do wulik ate');
}); //app.get is one of many requests that can be used for servers

app.listen(3000, () => {
    console.log('listen on port 3000');
    console.log(__dirname);
});
