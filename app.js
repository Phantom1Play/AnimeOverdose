
// GET JSON FILE

function getFileSity(fileName){
  let  request = new XMLHttpRequest();
  request.open('GET', fileName, false);
  request.send(null);
  return  JSON.parse(request.responseText);
}

// JSON ANIME LIST
let sityData = getFileSity('http://animeoverdose/info/data/anime.json');
// JSON ANIME QUANTITY
let animeQuantity = getFileSity('http://animeoverdose/info/data/anime_quantity.json');

console.log(sityData);
console.log(animeQuantity[0]["ID"]);

for (i = 1; i <= animeQuantity[0]["ID"]; i++) {
    let a = i - 1;
    let div = document.getElementById('item_' + i);
    div.querySelector('p').textContent = sityData[a]["Title"];
    div.querySelector('img').src = "./media/images/" + i + "_0.jpg";
    div.querySelector('a').href = "./titles/" + i + ".html";
}

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