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
    const dateInput = document.getElementById('date-input');
    const selectedDate = dateInput.value;
    fetch(`${apodUrl}?date = ${selectedDate}&api_key=${apiKey}`)
         .then(res => res.json())
         .then(data => handleApodData(data, apodElement))
         .catch(handleError);
    
   })
   dateInput.addEventListener("focus", function(){

   });
}
function handleApodData(data, apodElement){
    apodElement.src = data.hdurl;
    document.querySelector('.apod-title').textContent = data.title;
    document.querySelector('.apod-description').textContent = data.explanation;
    document.querySelector('.apod-date').textContent = `Date: ${(new Date(data.date)).toDateString}`;
    
}