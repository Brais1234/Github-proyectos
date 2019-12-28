
// Image switcher code



let myImage = document.querySelector('img');



myImage.onclick = function() {

  let mySrc = myImage.getAttribute('src');

  if(mySrc === 'images/amsterdam.png') {

    myImage.setAttribute ('src','images/berlin.png');

  } else {

    myImage.setAttribute ('src','images/amsterdam.png');

  }

}



// Personalized welcome message code



let myButton = document.querySelector('button');

let myHeading = document.querySelector('h1');



function setUserName() {

  let myName = prompt('Please enter your name.');

  if(!myName || myName === null) {

    setUserName();

  } else {

    localStorage.setItem('name', myName);

    myHeading.innerHTML = 'Viaje por Europa' + myName;

  }

}



if(!localStorage.getItem('name')) {

  setUserName();

} else {

  let storedName = localStorage.getItem('name');

  myHeading.innerHTML = 'Viaje por Europa' + storedName;

}



myButton.onclick = function() {

  setUserName();

}


   var catEl = document.getElementById("cat");
 
  var startTime = new Date().getTime();
  var walkTheCat = function() {
      var currTime = new Date().getTime();
      var secondsElapsed = ((currTime - startTime)/1000);
   var newLeft= secondsElapsed*77 + "px";
    catEl.style.left= newLeft;
    window.requestAnimationFrame(walkTheCat);
  };
  walkTheCat();
