const baseURL = 'https://api.nasa.gov/planetary/apod';
const key = 'KYqTtPHmCW4ZDAMpTrGagz9eJfHNOxDe900Dffco';

const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
const moreInfoBtn = document.querySelector('.btn');

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

    let date = document.createElement('p');
    date.className = 'card-text';
    date.innerText = spaceObject.date;
    //order matters!
    card.insertBefore(img, cardBody);
    cardBody.insertBefore(title, moreInfoBtn);
    cardBody.insertBefore(date, moreInfoBtn);
}
