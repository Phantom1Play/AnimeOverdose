
// GET JSON FILE

function getFileSity(fileName){
  let  request = new XMLHttpRequest();
  request.open('GET', fileName, false);
  request.send(null);
  return  JSON.parse(request.responseText);
}

// JSON ANIME LIST
let sityData = getFileSity('https://phantom1play.github.io/AnimeOverdose/info/data/anime.json');
// JSON ANIME QUANTITY
let animeQuantity = getFileSity('https://phantom1play.github.io/AnimeOverdose/info/data/anime_quantity.json');

console.log(sityData);
console.log(animeQuantity[0]["ID"]);

for (i = 1; i < animeQuantity[0]["ID"]; i++) {
    let a = i - 1;

    let div = document.getElementById('item_' + i);
    div.querySelector('p').textContent = sityData[a]["Title"];
    div.querySelector('img').src = "./media/images/" + i + "_0.jpg";
    div.querySelector('a').href = "./titles/" + i + ".html";
}


$(window).resize(function() {
  if (document.documentElement.scrollWidth < 1800) {
    document.getElementById('item_5').detach();
    document.getElementById('item_6').detach();
    document.getElementById('item_7').detach();
    document.getElementById('item_8').detach();
  };
});

// UPDATE FUNCTION

// function updateInfo() {
//   let random_number = getRandomInt(0, Object.keys(sityData).length);
//   let json_info = sityData[random_number];
//   document.getElementById('image').src = '../media/random/' + generator_type + '/' + `${json_info["ID"]}` + '.jpg';
//   document.getElementById('title').textContent = `${json_info["Title"]}`;
//   document.getElementById('title_description').textContent  = `${json_info["Title_desc"]}`;
//   document.getElementById('description').textContent = `${json_info["Description"]}`;
// }

// updateInfo()