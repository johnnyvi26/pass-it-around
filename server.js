const express = require('express');
const app = express();
const PORT = 3000;






////////////// ROUTES /////////////////////////

app.get('/', (req, res)=>{
    res.send(`<h1> 99 Bottles of beer on the wall </h1>` + `<a href="/${98}">take one, pass it around</a>`);
});

app.get('/:number_of_bottles', (req, res)=>{
    const newNum = req.params.number_of_bottles - 1;
    if (newNum === 0){
        res.send(`<h1> 99 Bottles of beer on the wall </h1>` + `<a href="/${98}">take one, pass it around</a>`);
    } else {
        res.send(`<h1>${newNum} Bottles on the wall</h1>` + `<a href="/${newNum}">take one, pass it around</a>`);
    }
});




////////////// PORT /////////////////////////

app.listen(PORT, ()=>{
    console.log(`Listening on port`, PORT);
});