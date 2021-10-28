// Show time in the page

function clockTime(){
    let date = new Date();
    let h = date.getHours(); 
    let m = date.getMinutes();
    let s = date.getSeconds();
    let morning = "Good Morning, John Kenneth!";
    let noon = "Good Afternoon, John Kenneth!";
    let night = "Good Evening, John Kenneth!";
    let weather = "🌙 24°"
    let weatherInfo = "Clear skies currently. 11% chance of rain until 23:00. Make sure to sleep in the right time! 🛌"
    let noonInfo = "☀️ 36°";
    let noonWeather = "Mostly clear skies. Don't forget to bring your umbrella and water if you are going outside! 🥵";

    if (h < 12){
        document.getElementById("showGreeting").innerHTML = morning;
    }
    else if (h >= 12 && h <= 17){
        document.getElementById("showGreeting").innerHTML = noon;
        const body = document.getElementsByTagName("BODY")[0];
        body.style.backgroundImage = "url('assets/noon1.jpg')";
        document.getElementById("weather-head").innerHTML = noonInfo;
        document.getElementById("weather-info").innerHTML = noonWeather;

    }
    else if (h >= 17 && h <= 24){
        document.getElementById("showGreeting").innerHTML = night;
        const body = document.getElementsByTagName("BODY")[0];
        body.style.backgroundImage = "url('assets/night.jpg')";
        document.getElementById("weather-head").innerHTML = weather;
        document.getElementById("weather-info").innerHTML = weatherInfo;
    }

    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s;
    document.getElementById("clockDisplay").innerText = time;
    document.getElementById("clockDisplay").textContent = time;  
    setTimeout(clockTime, 1000);
    
}
clockTime();

// To-Do List Functions

// Create X besides the list
const todoListX = document.getElementsByTagName("LI");
for (i = 0; i < todoListX.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("╳")
  span.className = "close";
  span.appendChild(txt);
  todoListX[i].appendChild(span);
}

// X function to remove the current item
const close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  }
}

// cross item item if selected
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('line-through');
  }
}, false);

// Add item to the list

function listNewEntry() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Write something field cannot be blank.");
    } else {
      document.getElementById("list-container").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("╳");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}

  // Change focus prompt 

  function changeFocus() {
    let text;
    let focus = prompt("Write your new focus for today:");
    if (focus == null || focus == "") {
      alert("You cancelled changing the focus.");
    } else {
      text = focus;
      document.getElementById("focus-desc").innerHTML = text;
      alert("Successfully changed the focus.");
    }
  }

  // Random Quote

  const quote = ["The Best Way To Get Started Is To Quit Talking And Begin Doing. – Walt Disney", 
                "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. – Winston Churchill",
                "Don’t Let Yesterday Take Up Too Much Of Today. – Will Rogers",
                "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You. – Steve Jobs",
                "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do. – Rob Siltanen",
                "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough. – Og Mandino",
                "Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur. – Mohnish Pabrai",
                "Do What You Can With All You Have, Wherever You Are. – Theodore Roosevelt",
                "You Are Never Too Old To Set Another Goal Or To Dream A New Dream. – C.S. Lewis",
                "To See What Is Right And Not Do It Is A Lack Of Courage. – Confucius",
                "Reading Is To The Mind, As Exercise Is To The Body. – Brian Tracy",
                "Today’s Accomplishments Were Yesterday’s Impossibilities. – Robert H. Schuller",
                "You Don’t Have To Be Great To Start, But You Have To Start To Be Great. – Zig Ziglar",
                "There Are No Limits To What You Can Accomplish, Except The Limits You Place On Your Own Thinking. – Brian Tracy",]

  function getQuote(){
  for (let i = 0; i < quote.length; i++){
      let dates = new Date();
      let second = dates.getSeconds();

      if (second === 0){
        document.getElementById("showQuote").innerHTML = quote[Math.floor(Math.random() * quote.length)];;
      }
      if (second === 30){
        document.getElementById("showQuote").innerHTML = quote[Math.floor(Math.random() * quote.length)];;
      }
    } setTimeout (getQuote, 1000);
  }
  getQuote();