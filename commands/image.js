const {
    Client,
    Attachment
} = require('discord.js');
const bot = new Client();

const cheerio = require('cheerio');

const request = require('request');


const PREFIX = 'r.';

var version = '1.3';



bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'image anime hentai':
        image(message);

        break;
    }

});

function image(message){

    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "Anime hentai",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };





    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
  
 
        $ = cheerio.load(responseBody); 
 

        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        
        console.log(urls);

        if (!urls.length) {
           
            return;
        }
 
        // Send result
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });
 







}
