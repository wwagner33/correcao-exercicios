// create a function to list all images in a given url using API
async function listImages(url){

//create a configuration object to fetch to request the url using JSON
const config = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
}

//create a fetch to get the data from the url and return the data of the response to be used in the return of the function

/* the data is composed of an array of objects with the following structure:
{  albumId: 1,
    id: 1,
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952"
*/
 
let lstImages =[];
const response = await fetch(url, config);
const data = await response.json();


/*
VErsão usando Promise()

let result = fetch(url, config);
let lstImages = [];
result
    .then((response) => {
        response.json();
    }
    .then((data) => {
        lstImages = data;
    })
*/
data.forEach((element) => {
    lstImages.push(element);
});



//return the list of images
return lstImages;

}

let result = listImages('https://jsonplaceholder.typicode.com/photos');

let list = [];

    
//javascript is asynchronous, so the list will be empty when the console.log is executed


let lista = document.getElementById('lista');

let images;

result
    .then((response) => {
        list = response;   
    })
    .then(() => {
        for(let i = 0; i < 10; i++){
            lista.innerHTML += `<div><img src="${list[i].thumbnailUrl}"/"></div>`;
        }
        // lista.innerHTML += `<div><img src="${list[0].url}"/"></div>`;

        // list.forEach((element) => {
        //     lista.innerHTML += `<div><img src="${element.url}"/"></div>`;
        // });
    })
    .then(() => {
        images = document.querySelectorAll('img');
    })
    .then(() => {
        images.forEach((element) => {
            element.addEventListener('click', () => {
                console.log(element.src);
            });
        });
    })
    .catch((error) => {
        console.log(error);
    });

