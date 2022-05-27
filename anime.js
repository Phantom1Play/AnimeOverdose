
// GET JSON FILE

function getFileSity(fileName) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', fileName, false);
  xhr.send();
  
  return JSON.parse(xhr.responseText);
}

let title_name_temp = document.location.pathname.split("/")[3];
let anime_id = title_name_temp.split(".")[0]-1;
let anime_id_img = anime_id + 1;

console.log(anime_id);
  
  // JSON ANIME LIST
  let sityData = getFileSity('https://phantom1play.github.io/AnimeOverdose/info/data/anime.json');
  // JSON ANIME QUANTITY
  let animeQuantity = getFileSity('https://phantom1play.github.io/AnimeOverdose/info/data/anime_quantity.json');
  
  console.log(sityData);
  console.log(animeQuantity[0]["ID"]);

  document.title = "Аниме " + sityData[anime_id]["Title"];

  document.getElementById('anime_cover').src = "../media/images/" + anime_id_img + "_0.jpg";
  document.getElementById('anime_title').textContent = sityData[anime_id]["Title"];
  document.getElementById('anime_type').textContent = sityData[anime_id]["Info_type"];
  document.getElementById('anime_status').textContent = sityData[anime_id]["Info_status"];
  document.getElementById('anime_genres').textContent = sityData[anime_id]["Info_genre"];
  document.getElementById('anime_source').textContent = sityData[anime_id]["Info_source"];
  document.getElementById('anime_studio').textContent = sityData[anime_id]["Info_studio"];
  document.getElementById('anime_restrictions').textContent = sityData[anime_id]["Info_restrictions"];
  document.getElementById('anime_description').textContent = sityData[anime_id]["Description"];
  document.getElementById('anime_screenshots_1').src = "../media/images/" + anime_id_img + "_1.jpg";
  document.getElementById('anime_screenshots_2').src = "../media/images/" + anime_id_img + "_2.jpg";
  document.getElementById('anime_screenshots_3').src = "../media/images/" + anime_id_img + "_3.jpg";

  function watchAnime() {
    window.location.href = 'https://yandex.ru/search/?text=' + sityData[anime_id]["Title"] + " смотреть";
  }

