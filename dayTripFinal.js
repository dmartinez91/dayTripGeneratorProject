"use strict";

let myDestinationsArray = ['beach', 'park', 'zoo', 'movie', 'football game'];

let restaurantArray = ['Sushi', 'Cuban', 'Venezuelan', 'Italian', 'Fastfood'];

let transportationArray = ['car', 'bus', 'walk', 'bike', 'teleport']

let entertainmentArray = ['talk about game of thrones', 'code off', 'Learn Mandarin', 'Beer pong', 'Karaoke'];

function returnsRandomElement(array){
  let randomNumber = Math.floor(Math.random() * array.length);
  let arrayChoice = array[randomNumber];
  return arrayChoice;
}

function userSelection(array){

  let firstChoice = returnsRandomElement(array);
  let userYesOrNo = prompt(`Do you want to ${firstChoice} yes or no?`).toLowerCase();

  let finalArray = [];
  
  while(userYesOrNo !== 'yes'){
    let newChoice = returnsRandomElement(array); 
    let userOtherChoice = prompt(`How about ${newChoice}`).toLowerCase()
     if (userOtherChoice === 'yes'){
      
      finalArray.push(newChoice);
      return finalArray
     }
  }
  
  finalArray.push(firstChoice);
  return finalArray

};


function pushArrays(destination, restuarant, transport, entertainment){
  let finalDestination = userSelection(destination);
  let finalRestuarant = userSelection(restuarant);
  let finalTransport = userSelection(transport);
  let finalEntertainment = userSelection(entertainment);
  let userConfirmation = prompt('would you like to confirm your choices?').toLowerCase()
  if(userConfirmation === 'yes'){
    return finalChoices([finalDestination, finalRestuarant, finalTransport, finalEntertainment])
  } else {
    console.log('Please choose again')
    let finalDestination = userSelection(destination);
    let finalRestuarant = userSelection(restuarant);
    let finalTransport = userSelection(transport);
    let finalEntertainment = userSelection(entertainment);
        return finalChoices([finalDestination, finalRestuarant, finalTransport, finalEntertainment])
  }
}


function finalChoices(finalArray){
  console.log(`Your final destination will be ${finalArray[0]}. You will eat ${finalArray[1]}. Your mode of transportation will be ${finalArray[2]}. And lastly you will entertain yourself by: ${finalArray[3]}.`)
}


pushArrays(myDestinationsArray, restaurantArray, transportationArray, entertainmentArray)


