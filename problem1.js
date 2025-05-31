// ## Problem 1: Dynamic Reminder Engine

function triggerAlert(text, time, repeatCycle = false) {
    if (!repeatCycle) {
      const singleTimer = setTimeout(() => {
        console.log(`Reminder: "${text}" triggered after ${time} ms`);
      }, time);
      return singleTimer;
    } else {
      const loopTimer = setInterval(() => {
        console.log(`Reminder: "${text}" triggered after ${time} ms`);
      }, time);
      return loopTimer;
    }
  }
  
  function cancelAlert(alertId) {
    clearInterval(alertId);
  }
  
  function alertAfterAsync(note, duration) {
    return new Promise((done) => {
      setTimeout(() => {
        done(`Reminder: "${note}" done after ${duration} ms`);
      }, duration);
    });
  }
  
  triggerAlert("Send Emails", 1500);
  
  const repeatingId = triggerAlert("Do some stretches", 2000, true);
  setTimeout(() => cancelAlert(repeatingId), 7000);
  
  alertAfterAsync("Message Cousin", 2500).then(console.log);
  