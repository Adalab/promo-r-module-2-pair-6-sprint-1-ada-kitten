"use strict";

const form = document.querySelector('.js-new-form');
form.classList.remove('collapsed');
const plus=document.querySelector('.js-plus');
const add=document.querySelector('.js-btn-add');

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');
const inputRace = document.querySelector ('.js-input-race');


const search = document.querySelector('.js-search');
const searchDesc = document.querySelector('.js-desc');
const searchRace = document.querySelector('.js-race');
const searchError = document.querySelector ('.js-search-error');
const btnCancel = document.querySelector ('.js-btn-cancel');


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



add.addEventListener('click', (event) => {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;
  

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMesageError.innerHTML='Debe rellenar todos los valores'
  } else {
    labelMesageError.innerHTML=''
  };
});

search.addEventListener('click', (event)  => {
  event.preventDefault();
  const descValue = searchDesc.value;
  const raceValue = searchRace.value;

  if ( descValue === '' || raceValue === '' ){
    searchError.innerHTML = 'Debe rellenar todos los valores'
  } else {
    searchError.innerHTML = '' 
  };
});

function showNewCatForm() {
  form.classList.remove('collapsed');
}
function hideNewCatForm() {
  form.classList.add('collapsed');
}
plus.addEventListener('click',handleClickNewCatForm);

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (form.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}


btnCancel.addEventListener ('click' , (event) => {
  event.preventDefault();
  
  inputDesc.value = ''
  inputPhoto.value = ''
  inputName.value = ''
  inputRace.value = ''
  form.classList.add('collapsed');

})

add.addEventListener('click', (event) => {
  event.preventDefault();

})


function renderKitten(url, desc, name ,race) {
  const kitten = `<li class="card">
  <article>
    <img
      class="card_img"
      src= ${url}
      alt="gatito"
    />
    <h3 class="card_title">${name.toUpperCase()}</h3>
    <h4 class="card_race">${race}</h4>
    <p class="card_description">
      ${desc}
    </p>
  </article>
  </li>`; 
  return kitten;
}
const kittenOne = renderKitten(kittenOneImage, kittenOneDesc, kittenOneName, kittenOneRace);
const kittenTwo = renderKitten(kittenTwoImage, kittenTwoDesc, kittenTwoName, kittenTwoRace);
const kittenThree = renderKitten(kittenThreeImage, kittenThreeDesc, kittenThreeName, kittenThreeRace);


add.addEventListener('click', addNewKitten);
function addNewKitten (event){
  event.preventDefault();
   const url=inputPhoto.value;
   const desc=inputDesc.value.toLowerCase();
   const name=inputName.value.toLowerCase();
   const race=inputRace.value.toLowerCase();

  const kitten=renderKitten(url, desc, name, race);
  list.innerHTML+=kitten;
  

}






const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = '';
const descrSearchText = input_search_desc.value;








// list.innerHTML= kittenOne + kittenTwo + kittenThree;

if( kittenOneDesc.includes(descrSearchText) ) {
  list.innerHTML= kittenOne;
  }
  
if( kittenTwoDesc.includes(descrSearchText) ) {
  list.innerHTML+= kittenTwo;
  }
if( kittenThreeDesc.includes(descrSearchText) ) {
    list.innerHTML+= kittenThree;
  }
      
