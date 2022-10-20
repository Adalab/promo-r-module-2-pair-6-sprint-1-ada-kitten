"use strict";

const form = document.querySelector('.js-new-form');
form.classList.remove('collapsed');



const list = document.querySelector('.js-list');



const kittenOneImage= "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenOneName= "Anastacio";
const kittenOneRace="British Shorthair";
const kittenOneDesc= "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";


const kittenTwoImage= "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const kittenTwoName= "Fiona";
const kittenTwoRace="British Shorthair";
const kittenTwoDesc="Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";

const kittenThreeImage= "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const kittenThreeName="Cielo";
const kittenThreeRace="British Shorthair";
const kittenThreeDesc="Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";


const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = '';
const descrSearchText = input_search_desc.value;



const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src= ${kittenOneImage}
    alt="gatito"
  />
  <h3 class="card_title">${kittenOneName.toUpperCase()}</h3>
  <h4 class="card_race">${kittenOneRace}</h4>
  <p class="card_description">
    ${kittenOneDesc}
  </p>
</article>
</li>`;


const kittenTwo = ` <li class="card"> 
<img class="card_img"
  src=${kittenTwoImage} alt="gatito" />
<h3 class="card_title">${kittenTwoName.toUpperCase()}</h3>
<h4 class="card_race">${kittenTwoRace}</h4>
<p class="card_description">
  ${kittenTwoDesc}
</p>
</li> `;


const kittenThree = ` <li class="card">
<img class="card_img"
  src=${kittenThreeImage}
  alt="gatito" />
<h3 class="card_title">${kittenThreeName.toUpperCase()}</h3>
<h4 class="card_race">${kittenThreeRace}</h4>
<p class="card_description">
  ${kittenThreeDesc}
</p>
</li> `;


// list.innerHTML= kittenOne + kittenTwo + kittenThree;
if (form.classList.contains('collapsed')) {
  form.classList.remove('collapsed');
} else {
  form.classList.add('collapsed');
}

if( kittenOneDesc.includes(descrSearchText) ) {
  list.innerHTML= kittenOne;
  }
  
if( kittenTwoDesc.includes(descrSearchText) ) {
  list.innerHTML+= kittenTwo;
  }
if( kittenThreeDesc.includes(descrSearchText) ) {
    list.innerHTML+= kittenThree;
  }
      
