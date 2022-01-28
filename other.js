
function myFunction(){

    let a = prompt("Please enter your name", "Avcı");
    document.querySelector('#myName').innerHTML = a
    const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector('#myClock').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);

}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
