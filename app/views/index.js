export default function () {
    $('#app').append($('<h1>').text(`Nasa APOD`))
    .append($('<h3>').text(`WELCOME TO PIC OF THE DAY`))
    .append($('<input type="button" id="btn" value="APOD"/>'))
    .append($('<img>').attr(`src`, "https://wallpaperaccess.com/full/1570.jpg"));
    
    $('#btn').click(function () {
        window.location.hash = `hello`;
    })
   }
