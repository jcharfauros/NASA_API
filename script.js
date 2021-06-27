const baseURL = 'https://api.nasa.gov/planetary/apod';
const key = 'KYqTtPHmCW4ZDAMpTrGagz9eJfHNOxDe900Dffco';

const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
const moreInfoBtn = document.querySelector('.btn');
const modalBody = document.querySelector('.modal-body')
const modalTitle = document.querySelector('.modal-title');

         //fetching             
fetch(`${baseURL}?api_key=${key}`)
    .then(response => response.json())
    .then(json => displayImage(json));

function displayImage(spaceObject) {
    console.log(spaceObject);

    let img = document.createElement('img'); //create
    img.className = 'card-img-top'; 
    img.src = spaceObject.hdurl; //source or spaceObject['hdurl']

    let title = document.createElement('h1');
    title.className = 'card-title';
    title.innerText = spaceObject.title; //or spaceObject['title']
    title.style.fontFamily = 'space-age';
    // title.style = 'font-family: space-age'; ;

    let date = document.createElement('p');
    date.className = 'card-text';
    date.innerText = spaceObject.date;
    date.style.fontFamily = 'kiona-regular';

    let expl = document.createElement('p');
    expl.innerText = spaceObject.explanation;
    expl.style.fontFamily = 'kiona-regular';

    modalTitle.innerText = spaceObject.title;
    modalTitle.style.fontFamily = 'space-age';

    moreInfoBtn.style.fontFamily = 'kiona-regular';

    //order matters!
    card.insertBefore(img, cardBody);
    cardBody.insertBefore(title, moreInfoBtn);
    cardBody.insertBefore(date, moreInfoBtn);
    modalBody.appendChild(expl);
}
