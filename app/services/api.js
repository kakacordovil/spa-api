/*export async function getData() {
    return new Promise(function (sucess, reject){
        $.ajax({
            url: 'https://api.nasa.gov/planetary/apod?api_key=ra3g9Zpf9fYkFXsACuWxbf6D5hkyVfD9w4SNRIKM',
            await sucess: function(result){
                sucess(result);
            }
        })
    })
}







export function getData() {
    return new Promise(function (sucess, reject){
        $.ajax({
            url: 'https://api.nasa.gov/planetary/apod?api_key=ra3g9Zpf9fYkFXsACuWxbf6D5hkyVfD9w4SNRIKM',
            sucess: function(result){
                sucess(result);
            }
        })
    })
}   


const fetchPromise = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=ra3g9Zpf9fYkFXsACuWxbf6D5hkyVfD9w4SNRIKM"
    );
    
    var response = await fetchPromise.then(result => result.json())
    .then((data) => console.log(data))
    .catch(err => {
        console.log(err);
    });


export async function getData() {
    console.log(response);
    return response;
} */


export async function getData() 
{
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=ra3g9Zpf9fYkFXsACuWxbf6D5hkyVfD9w4SNRIKM`);
  let data = await response.json()
  return data;
}

getData()
  .then(data => console.log(data)); 



/*   
const result = fetch("https://api.nasa.gov/planetary/apod?api_key=ra3g9Zpf9fYkFXsACuWxbf6D5hkyVfD9w4SNRIKM")
.then(result => {
    console.log(result.json())
    .then((data) => console.log(data));
})
.catch(err => {
    console.log(err);
});


export function getData() {

    return response;
} */