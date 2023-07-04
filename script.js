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

data.forEach((element) => {
    lstImages.push(element);
});



//return the list of images
return lstImages;

}

let lstImages = [];



    
//javascript is asynchronous, so the list will be empty when the console.log is executed

lstImages = listImages('https://jsonplaceholder.typicode.com/photos');
lstImages.then((data) => {
    console.log(data);
    console.log(data.length);
    console.log(data[0].url);
    console.log(data[0].thumbnailUrl);
    console.log(data[0].title);
    console.log(data[0].albumId);
    console.log(data[0].id);
});
 

