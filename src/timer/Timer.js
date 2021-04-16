// function Timer(seconds) {
//   this.seconds = seconds;
// }

// Timer.prototype.start = function () {
//   var instance = this;
//   var timerInterval = setInterval(function () {
//     if (instance.seconds === 0) {
//       clearInterval(timerInterval);
//     }

//     console.log(instance.seconds);
//     instance.seconds -= 1;
//   }, 1000);
// };

class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    let instance = this.seconds;
    const timerInterval = setInterval(() => {
      if (instance === 0) {
        clearInterval(timerInterval);
      }
      console.log(instance);
      instance -= 1;
    }, 1000);
  }
}

export default Timer;
