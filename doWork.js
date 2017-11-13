onmessage = function(e) {
  // console.log('Message received from main script '+ e.data);
  var result = ('You have '+ e.data +' lives'); 
  // console.log('Posting message back to main script');
  postMessage(result);
}

// setTimeout(function(){ 
//     for (var counter = 0; counter <= 100000; counter++) {

//     var notPrime = false;
//     for (var i = 2; i <= counter; i++) {
//         if (counter%i===0 && i!==counter) {
//             notPrime = true;
//         }
//     }
//     if (notPrime === false) {
//         postMessage(counter);
//         console.log(counter);
//     }
// }
//  }, 500);