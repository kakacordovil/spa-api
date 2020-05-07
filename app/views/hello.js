export default function (result) {
    $('#app').append($('<h1>').text(`hello ${result.title}`))
    .append($('<p>').text(`${result.explanation}`))
    .append($('<img>').attr('src', `${result.url}`));
    
    //console.log('result: '+result);
}
