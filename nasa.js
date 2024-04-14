// declare apikey and apod url
const apiKey = "XQpoD7vLldp5ieYhTmvw1lRz493tDPeUZw7zXxyv";
const apodUrl = "https://api.nasa.gov/planetary/apod";

// Function to be executed when the DOM cotent is loaded
function contentLoaded(){
    // Selects the image element where APOD will be displayed
    const apodElement = document.querySelector(".apod-image img");

    //Fetches the APOD data for today when the page loads
    fetch(`${apodUrl}?api_key=${apiKey}`)
    .then(res => res.json())
    .then (data => handleApodData (data, apodElement))
    .catch(handleError);
// Add eventlistener to the submit button
 document.getElementById('submit-button').addEventListener('click', function(){
    //Change the button color temporarily on click
    document.getElementById('submit-button').style.backgroundColor = '#d69ee7';
    setTimeout(function(){
        document.getElementById('submit-button').style.backgroundColor='';
    },4000)

    //Get  the selected date from the date input field
    const dateInput = document.getElementById('date-input');
    const selectedDate = dateInput.value;

    // Fetch the APOD data for the selected date
    fetch(`${apodUrl}?date=${selectedDate}&api_key=${apiKey}`)
         .then(res => res.json())
         .then(data => {
            //Find the APOD data for the selected date
            if (Array.isArray(data)){
            const selectedApod = data.find(apod => apod.date === selectedDate);
            if (selectedApod) {
                handleApodData(selectedApod, apodElement);
            } else {
                console.log('No APOD found for selected date.');
            }
        }else{
            handleApodData(data, apodElement);
        }
         })
         .catch(handleError);
    
   });
} 

//Function to handle received APOD data
function handleApodData(data, apodElement){
    // update the image source
    apodElement.src = data.hdurl;
    //update the title
    document.querySelector('.apod-title').textContent = data.title;
    //update the description
    document.querySelector('.apod-description').textContent = data.explanation;
    //update the APOD date
    document.querySelector('.apod-date').textContent = `Date: ${(new Date(data.date)).toDateString()}`;

}

//Function to handle errors 
function handleError(error){
    console.error(error);
}

//add eventlistener to execute contentloaded function  when DOM content is loaded
window.addEventListener("DOMContentLoaded", contentLoaded);