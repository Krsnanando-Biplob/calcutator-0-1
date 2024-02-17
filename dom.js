let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteted(){
    display.value = display.value.slice(0, -1);
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
function calculatePercentage() {
    try {
      display.value = eval(display.value) / 100;
    } catch (error) {
      display.value = 'Error';
    }
  }

function dabuleNum(value){
    try{
        
    } catch (error){
        display.value= 'Error'
    }
}
function squereRoot(){
    const numSquer= eval(display.value);
    display.value= numSquer ;

    try{
        const num= eval(display.value);
        display.value= numSquer * display.value;
    }
    catch(error){
        display.value='error'
    }

}
  
function updateDateTime() {
  const now = new Date();

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', options);

  const formattedTime = now.toLocaleTimeString('en-US');

  document.getElementById('date').textContent = ` ${formattedDate}`;
  document.getElementById('time').textContent = `time: ${formattedTime}`;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();
