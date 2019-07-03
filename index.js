const express = require('express');
const bodyParser = require('body-parser');
const app = express();  
const fs = require('fs')
const cheerio = require('cheerio');
const request = require('request');





// request({
//     method: 'GET',
//     url: 'https://www.google.com/search?q=meteo+batna&oq=meteo+batna&aqs=chrome..69i57j0l5.5191j1j4&sourceid=chrome&ie=UTF-8'
// }, (err, body) => {

//     if (err) return console.error(err);

//     let $ = cheerio.load(body);
     
// let fpEl = $('.BNeawe').find($('.iBp4i').find($('.AP7Wnd'))).text();
// console.log(fpEl)
//     fs.writeFile("meteo.html",body,(err) => {
//         if (err) console.log(err);
//         console.log("Successfully Written to File.");
//         return res.send("<h1>"+fpEl+"</h1>")
//       });
// });


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/', function(req, res) {
    request({
        method: 'GET',
        url: 'https://www.google.com/search?q=meteo+batna&oq=meteo+batna&aqs=chrome..69i57j0l5.5191j1j4&sourceid=chrome&ie=UTF-8'
    }, (err,ress, body) => {
    
        if (err) return console.error(err);
    
        let $ = cheerio.load(body);
         
    let fpEl = $('.BNeawe').find($('.iBp4i').find($('.AP7Wnd'))).text();
    console.log(fpEl)

        fs.writeFile("meteo.html",body,(err) => {
            if (err) console.log(err);
            console.log("Successfully Written to File.");
            return res.send("<h1>"+fpEl+"</h1>")
          });
    });
   
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
