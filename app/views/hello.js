export default function (result) {
    $('#app')
    .append($('<h1>').text(`Hello ${result.title}!!!`))
    .append($('<p>').text(`${result.explanation}`));
    //console.log('result: '+result);
}
