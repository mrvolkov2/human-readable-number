module.exports = function toReadable (number) {
  
  let arrOne = ["one",'two', 'three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let arrTeen = ['','twen','thir','for','fif','six','seven','eigh','nine'];
  
    let nToString = number.toString();
    let arrNumber = nToString.split('');
  
    if (number < 1) {
        return('zero');
    } else if (number < 20) {
      return(arrOne[number-1]);
    } else if (number < 100) {
        if (arrOne[arrNumber[1]-1] === undefined) {
          let secondNumber = arrTeen[arrNumber[0]-1];
          let ty = 'ty';
          return(secondNumber + ty);
        } else {
          let secondNumber = arrTeen[arrNumber[0]-1];
          let ty = 'ty ';
          let firstNumber = arrOne[arrNumber[1]-1];
          return(secondNumber + ty + firstNumber);
        }
  
    } else if ((number % 100) === 0) {
          let thirdNumber = arrOne[arrNumber[0]-1];
          let hundred = ' hundred';
          return(thirdNumber + hundred);
  
    } else {
        if ((number % 100) < 20) {
          let thirdNumber = arrOne[arrNumber[0]-1];
          let hundred = ' hundred ';
          let secondNumber = arrOne[(number % 100)-1];
          return(thirdNumber + hundred + secondNumber);
  
        } else {
          if ((number % 10) === 0) {
            let thirdNumber = arrOne[arrNumber[0]-1];
            let hundred = ' hundred ';
            let secondNumber = arrTeen[arrNumber[1]-1];
            let ty = 'ty';
            let firstNumber = arrOne[arrNumber[2]-1];
            return(thirdNumber + hundred + secondNumber + ty);
          } else {
              let thirdNumber = arrOne[arrNumber[0]-1];
              let hundred = ' hundred ';
              let secondNumber = arrTeen[arrNumber[1]-1];
              let ty = 'ty ';
              let firstNumber = arrOne[arrNumber[2]-1];
              return(thirdNumber + hundred + secondNumber + ty + firstNumber);
            }
          }
    }
    

}
