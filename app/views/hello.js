export default function (result) {
    $('#app').empty()
    .append($('<h1>').text(`PIC OF THE DAY`))
    .append($('<h2>').text(`${result.title}`))
    .append($('<p>').text(`${result.explanation}`))
    .append($('<img>').attr('src', `${result.url}`));
    
    //console.log('result: '+result);
}
