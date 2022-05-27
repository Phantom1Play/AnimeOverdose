const mysql = require("mysql");
const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer(function(request, response){

    console.log(`Запрошенный адрес: ${request.url}`);

    let filePath = request.url.substr(1);

    fs.access(filePath, fs.constants.R_OK, err => {
        if(err){
            response.statusCode = 404;
            response.end("Resourse not found!");
        }
        else{
            fs.createReadStream(filePath).pipe(response);
        }
      });

}).listen(3000, function(){
    console.log("Server started at 3000");
});

// DATABASE CONFIG

const conn = mysql.createConnection( {
    host: "localhost",
    user: "root",
    database: "anime_overdose",
    password: ""
});

conn.connect( err => {
    if (err) {
        console.log(err);
        return err;
    }   
    else {
        console.log('database ----- open');
    }
});

let anime_query = "SELECT * FROM anime";
let anime_query_quantity = "SELECT COUNT(*) AS ID FROM anime";
let anime_query_titles = "SELECT ID, TITLE FROM ANIME";

conn.query(anime_query_quantity, (err, result) => {
    fs.writeFileSync('./info/data/anime_quantity.json', JSON.stringify(result), function (err) {
        if (err) throw err;
    })
});

conn.query(anime_query, (err, result) => {
    fs.writeFileSync('./info/data/anime.json', JSON.stringify(result), function (err) {
        if (err) throw err;
    })
});

let generators_list = "SELECT * FROM generator_list"

conn.query(generators_list, (err, result) => {
    fs.writeFileSync('./info/data/generator_list.json', JSON.stringify(result), function (err) {
        if (err) throw err;
    })
});

const content = fs.readFileSync('./titles/type.txt');

conn.query(anime_query_titles, (err, result) => {
    fs.writeFileSync('./info/data/titles.json', JSON.stringify(result), function (err) {
        if (err) throw err;
    })
});

let rawTitlesData = fs.readFileSync('./info/data/titles.json');
let titlesData = JSON.parse(rawTitlesData);
let rawAnimeQuantity = fs.readFileSync('./info/data/anime_quantity.json');
let animeQuantity = JSON.parse(rawAnimeQuantity);

for (i = 0; i < animeQuantity[0]["ID"]; i++) {
    fs.writeFileSync('./titles/' + titlesData[i]["ID"] + '.html', content, function (err) {
        if (err) throw err;
    });
}

// DB CLOSED

conn.end( err => {

    if (err) {
        console.log(err);
        return err;
    }   
    else {
        console.log('database ----- closed');
    }

})
