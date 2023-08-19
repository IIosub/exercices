function time() {
  // let hour = parseInt(prompt("write an hour from 1-23"));
  // let min = parseInt(prompt("write  minutes from 1-59"));
  console.log("g");
  let sec = parseInt(prompt("write seconds from 1-59 "));
  let min, hour;
  console.log("g");
  if (sec === 59) {
    sec = 0;
    min++;
  } else {
    sec++;
  }

  if (min === 59) {
    min = 0;
    hour++;
  } else if (hour === 24) {
    hour = 0;
  }

  return `${hour}h${min}m${sec}s`;
}

console.log(time());
