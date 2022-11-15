const ctx = document.getElementById('myChart').getContext('2d');
Chart.defaults.backgroundColor = '#9BD0F5';
Chart.defaults.borderColor = '#36A2EB';
Chart.defaults.color = '#fff';
let inputValueOne = document.getElementById('input1')
let inputValueTwo = document.getElementById('input2')
let inputValueThree = document.getElementById('input3')
let inputValueFour = document.getElementById('input4')
let inputValueFive = document.getElementById('input5')
let inputValueSix = document.getElementById('input6')
let inputValueSeven = document.getElementById('input7')
let inputValueEight = document.getElementById('input8')
let outputValue = document.getElementById('output')





let words  = 'redacter experience true encryption '

function countChar(input){
    const arrFromInput = Array.from(input.toLowerCase())
    const charCount ={};
    const charValue = []; 
    const sortedChar = [];
    const sortedCharValue = [];
    // here we get the frequency of letters
    for(char of arrFromInput){
        charCount[char] = (charCount[char] ||  0) + 1;
    }

    // we push the value from the object keys, this would assist in sorting
    // it in an accending order
    for(char in charCount){
        charValue.push(charCount[char])
    }
    //  sort the charValue array we made from the object and 
    // slice it from the last 4 items, since its sorted in accending order
    // it means we would have the most occuring letters at end of the array
    let chars = charValue.sort((a,b) =>a - b).splice(charValue.length - 4)

    // to get the letter with the sorted numbers i iterate throught the object and compare 
    // it's value with the slice array and we push both the letter and the char value to two different
    // predefined arrays, charvalue, and sortedcharvalue;
    // this would give a uniform array. with the letter and number on the same index position
    for(char in charCount){
        if(sortedCharValue.length === 4 && sortedChar.length === 4){
            break;
        }else if(charCount[char] === chars[0] ){
            sortedCharValue.push(chars[0])
            sortedChar.push(char.toUpperCase())
        }else if(charCount[char] === chars[1]){
            sortedCharValue.push(chars[1])
            sortedChar.push(char.toUpperCase())
        }else if(charCount[char] === chars[2]){
            sortedCharValue.push(chars[2])
            sortedChar.push(char.toUpperCase())
        }else if(charCount[char] === chars[3]){
            sortedCharValue.push(chars[3])
            sortedChar.push(char.toUpperCase())
        }
    }
    // i return the two array in as and array so it can be destructered and 
    // used outside the function.
    return [sortedChar, sortedCharValue]
}

let [sortedChar, sortedCharValue] = countChar(words)

// create chart

const data = {
    labels: [...sortedChar],
    datasets: [{
      label: 'Optimised Redacter',
      data: sortedCharValue,  
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(46, 139,  87)'
      ],
      hoverOffset: 4
    }]
  };

  const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: data
})


// getting input value
function optimise(){
    let charInput = document.getElementById('wordInput').value;
    words = charInput;
    [sortedChar, sortedCharValue] = countChar(words)
    data.labels = [...sortedChar];
    data.datasets[0].data = sortedCharValue
    myChart.update()

}
function encrypt(){
    inputValueOne = document.getElementById('input1').value.toLowerCase();
    inputValueTwo = document.getElementById('input2').value.toLowerCase();
    inputValueThree = document.getElementById('input3').value.toLowerCase();
    inputValueFour = document.getElementById('input4').value.toLowerCase();
    inputValueFive = document.getElementById('input5').value.toLowerCase();
    inputValueSix = document.getElementById('input6').value.toLowerCase();
    inputValueSeven = document.getElementById('input7').value.toLowerCase();
    inputValueEight = document.getElementById('input8').value.toLowerCase();
    console.log(inputValueEight)
    
    let charInput = document.getElementById('wordInput');
    words = charInput.value;
    let arrFromWords = [...words]
    let encrypted = []
    arrFromWords.forEach((value)=>{
        if(value === inputValueOne ){
            encrypted.push(inputValueFive)
        }else if(value === inputValueTwo){
            encrypted.push(inputValueSix)
        }else if(value === inputValueThree){
            encrypted.push(inputValueSeven)
        }else if(value === inputValueFour){
            encrypted.push(inputValueEight);
        }else{
            encrypted.push(value)
        }

    })
    let stringed = encrypted.join('')
    outputValue.innerHTML = stringed
       
   }

  

