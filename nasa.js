// declare apikey and apod url
const apiKey = "85nxQw84l2fm2nxzmKmEkeG2z2NtaaDBBL6zcWHt";
const apodUrl = "https://api.nasa.gov/planetary/apod";

function contentLoaded(){
    const apodElement = document.querySelector(".apod-image img");

    //apod image 
    fetch(`${apodUrl}?api_key=${apiKey}`)
    .then(res => res.json())
    .then (data => handleApodData (data, apodElement))
    .catch(handleError);

 document.getElementById('submit-button').addEventListener('click', function(){
    document.getElementById('submit-button').style.backgroundColor = '#d69ee7';
    setTimeout(function(){
        document.getElementById('submit-button').style.backgroundColor='';
    },4000)

 })
}