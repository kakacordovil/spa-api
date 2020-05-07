/*export function getData() = async () => {
    return new Promise(function (sucess, reject){
        $.ajax({
            url: 'https://api.nasa.gov/planetary/apod?api_key=ra3g9Zpf9fYkFXsACuWxbf6D5hkyVfD9w4SNRIKM',
            sucess: function(result){
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
}   */


const fetchPromise = fetch(
    "https://api.nasa.gov/planetary/apod?api_key=ra3g9Zpf9fYkFXsACuWxbf6D5hkyVfD9w4SNRIKM"
    );
    
    fetchPromise.then(result => result.json())
    .then((data) => console.log(data))
    .catch(err => {
        console.log(err);
    });


export function getData() {

    return result;
}



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