const selectField = document.getElementById("selectorField");
const selectFieldTwo = document.getElementById("selectorFieldTwo");
const selectFieldThree = document.getElementById("selectorFieldThree");
const selectText = document.getElementById("selectText");
const selectTextTwo = document.getElementById("selectTextTwo");
const selectTextThree = document.getElementById("selectTextThree");
const options = document.getElementsByClassName("options");
const optionsTwo = document.getElementsByClassName("optionsTwo");
const optionsThree = document.getElementsByClassName("optionsThree");
const list = document.getElementById("list");
const listTwo = document.getElementById("listTwo");
const listThree = document.getElementById("listThree");
const arrow = document.getElementById("arrowIcon");
const arrowTwo = document.getElementById("arrowIconTwo");
const arrowThree = document.getElementById("arrowIconThree");

// SEARCH CONST 
const searchButton = document.getElementById('searchButton');

// TRECI DIV POSLE SEARCH-A

const card = document.querySelector('.card');
const mainDiv = document.querySelector('.main');
const flyToSpainDiv = document.querySelector('.flyToSpain-div');
const travelToSpainDiv = document.querySelector('.travelToSpain-div');
const flyToTurkeyDiv = document.querySelector('.flyToTurkey-div');
const travelToTurkeyDiv = document.querySelector('.travelToTurkey-div');
const flyToGreeceDiv = document.querySelector('.flyToGreece-div');
const travelToGreeceDiv = document.querySelector('.travelToGreece-div');
const flyToColombiaDiv = document.querySelector('.flyToColombia-div');
const travelToColombiaDiv = document.querySelector('.travelToColombia-div');
const flyToNetherlandsDiv = document.querySelector('.flyToNetherlands-div');
const travelToNetherlandsDiv = document.querySelector('.travelToNetherlands-div');


// CONST ZA FORMU

const fromForm = document.getElementById('fromForm');
const toForm = document.getElementById('toForm');
const transType = document.getElementById('transType');
const formDuration = document.getElementById('formDuration');
const formPrice = document.getElementById('formPrice');


// cepaj

const cepaj = document.getElementById('cepaj');

// let za sumu korisnika

let userFunds = 0;

// __________________________________________________________________________

// DROPDOWN MENU'S FOR SEARCH

selectField.onclick = function (){
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
}
selectFieldTwo.onclick = function (){
    listTwo.classList.toggle("hide");
    arrowTwo.classList.toggle("rotate");
}
selectFieldThree.onclick = function (){
    listThree.classList.toggle("hide");
    arrowThree.classList.toggle("rotate");
}


for (option of options) {
  option.onclick = function () {
    const optionImage = this.querySelector('img');
    const optionText = this.querySelector('p');
    
    selectText.innerHTML = ''; // Clear the existing content
    selectText.appendChild(optionImage.cloneNode(true)); // Append the image
    selectText.appendChild(document.createTextNode(optionText.textContent)); // Append the text
    
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
  };
}


for (option of optionsTwo) {
  option.onclick = function () {
    const optionTwoImage = this.querySelector('img');
    const optionTwoText = this.querySelector('p');
    
    selectTextTwo.innerHTML = ''; // Clear the existing content
    selectTextTwo.appendChild(optionTwoImage.cloneNode(true)); // Append the image
    selectTextTwo.appendChild(document.createTextNode(optionTwoText.textContent)); // Append the text
    
    listTwo.classList.toggle("hide");
    arrowTwo.classList.toggle("rotate");
  };
}

for (option of optionsThree) {
  option.onclick = function () {
    const optionThreeImage = this.querySelector('img');
    const optionThreeText = this.querySelector('p');
    
    selectTextThree.innerHTML = ''; // Clear the existing content
    selectTextThree.appendChild(optionThreeImage.cloneNode(true)); // Append the image
    selectTextThree.appendChild(document.createTextNode(optionThreeText.textContent)); // Append the text
    
    listThree.classList.toggle("hide");
    arrowThree.classList.toggle("rotate");
  };
}


searchButton.addEventListener('click', () => {
    if(selectFieldTwo.innerText === 'Spain' && selectFieldThree.innerText === 'Airplane') {
      
      travelToSpainDiv.classList.remove('display');
      travelToTurkeyDiv.classList.remove('display');
      flyToTurkeyDiv.classList.remove('display');
      travelToGreeceDiv.classList.remove('display');
      flyToGreeceDiv.classList.remove('display');
      travelToColombiaDiv.classList.remove('display');
      flyToColombiaDiv.classList.remove('display');
      travelToNetherlandsDiv.classList.remove('display');
      flyToNetherlandsDiv.classList.remove('display');
      
      flyToSpainDiv.classList.add('display');
      flyToSpainDiv.scrollIntoView({behavior: "smooth"});
    } else if (selectFieldTwo.innerText === 'Spain' && selectFieldThree.innerText === 'Bus'){
      flyToSpainDiv.classList.remove('display')
      travelToTurkeyDiv.classList.remove('display');
      flyToTurkeyDiv.classList.remove('display');
      travelToGreeceDiv.classList.remove('display');
      flyToGreeceDiv.classList.remove('display');
      travelToColombiaDiv.classList.remove('display');
      flyToColombiaDiv.classList.remove('display');
      travelToNetherlandsDiv.classList.remove('display');
      flyToNetherlandsDiv.classList.remove('display');

      travelToSpainDiv.classList.add('display');
      travelToSpainDiv.scrollIntoView({behavior: "smooth"});
    } else if (selectFieldTwo.innerText === 'Greece' && selectFieldThree.innerText === 'Airplane'){
      travelToGreeceDiv.classList.remove('display');
      travelToTurkeyDiv.classList.remove('display');
      flyToTurkeyDiv.classList.remove('display');
      travelToSpainDiv.classList.remove('display');
      flyToSpainDiv.classList.remove('display');
      travelToColombiaDiv.classList.remove('display');
      flyToColombiaDiv.classList.remove('display');
      travelToNetherlandsDiv.classList.remove('display');
      flyToNetherlandsDiv.classList.remove('display');

      flyToGreeceDiv.classList.add('display');
      flyToGreeceDiv.scrollIntoView({behavior: "smooth"});
    } else if (selectFieldTwo.innerText === 'Greece' && selectFieldThree.innerText === 'Bus'){
      flyToGreeceDiv.classList.remove('display');
      travelToTurkeyDiv.classList.remove('display');
      flyToTurkeyDiv.classList.remove('display');
      travelToSpainDiv.classList.remove('display');
      flyToSpainDiv.classList.remove('display');
      travelToColombiaDiv.classList.remove('display');
      flyToColombiaDiv.classList.remove('display');
      travelToNetherlandsDiv.classList.remove('display');
      flyToNetherlandsDiv.classList.remove('display');

      travelToGreeceDiv.classList.add('display');
      travelToGreeceDiv.scrollIntoView({behavior: "smooth"});
    } else if (selectFieldTwo.innerText === 'Turkey' && selectFieldThree.innerText === 'Airplane'){
      travelToTurkeyDiv.classList.remove('display');
      travelToGreeceDiv.classList.remove('display');
      flyToGreeceDiv.classList.remove('display');
      travelToSpainDiv.classList.remove('display');
      flyToSpainDiv.classList.remove('display');
      travelToColombiaDiv.classList.remove('display');
      flyToColombiaDiv.classList.remove('display');
      travelToNetherlandsDiv.classList.remove('display');
      flyToNetherlandsDiv.classList.remove('display');

      flyToTurkeyDiv.classList.add('display');
      flyToTurkeyDiv.scrollIntoView({behavior: "smooth"});
    } else if (selectFieldTwo.innerText === 'Turkey' && selectFieldThree.innerText === 'Bus'){
      flyToTurkeyDiv.classList.remove('display');
      travelToGreeceDiv.classList.remove('display');
      flyToGreeceDiv.classList.remove('display');
      travelToSpainDiv.classList.remove('display');
      flyToSpainDiv.classList.remove('display');
      travelToColombiaDiv.classList.remove('display');
      flyToColombiaDiv.classList.remove('display');
      travelToNetherlandsDiv.classList.remove('display');
      flyToNetherlandsDiv.classList.remove('display');

      travelToTurkeyDiv.classList.add('display');
      travelToTurkeyDiv.scrollIntoView({behavior: "smooth"});
    } else if (selectFieldTwo.innerText === 'Netherlands' && selectFieldThree.innerText === 'Airplane'){
      travelToNetherlandsDiv.classList.remove('display');
      travelToGreeceDiv.classList.remove('display');
      flyToGreeceDiv.classList.remove('display');
      travelToSpainDiv.classList.remove('display');
      flyToSpainDiv.classList.remove('display');
      travelToColombiaDiv.classList.remove('display');
      flyToColombiaDiv.classList.remove('display');
      travelToTurkeyDiv.classList.remove('display');
      flyToTurkeyDiv.classList.remove('display');

      flyToNetherlandsDiv.classList.add('display');
      flyToNetherlandsDiv.scrollIntoView({behavior: "smooth"});
    } else if (selectFieldTwo.innerText === 'Netherlands' && selectFieldThree.innerText === 'Bus'){
      flyToNetherlandsDiv.classList.remove('display');
      travelToGreeceDiv.classList.remove('display');
      flyToGreeceDiv.classList.remove('display');
      travelToSpainDiv.classList.remove('display');
      flyToSpainDiv.classList.remove('display');
      travelToColombiaDiv.classList.remove('display');
      flyToColombiaDiv.classList.remove('display');
      travelToTurkeyDiv.classList.remove('display');
      flyToTurkeyDiv.classList.remove('display');

      travelToNetherlandsDiv.classList.add('display');
      travelToNetherlandsDiv.scrollIntoView({behavior: "smooth"});
    } else if (selectFieldTwo.innerText === 'Colombia' && selectFieldThree.innerText === 'Airplane'){
      travelToColombiaDiv.classList.remove('display');
      travelToGreeceDiv.classList.remove('display');
      flyToGreeceDiv.classList.remove('display');
      travelToSpainDiv.classList.remove('display');
      flyToSpainDiv.classList.remove('display');
      travelToNetherlandsDiv.classList.remove('display');
      flyToNetherlandsDiv.classList.remove('display');
      travelToTurkeyDiv.classList.remove('display');
      flyToTurkeyDiv.classList.remove('display');

      flyToColombiaDiv.classList.add('display');
      flyToColombiaDiv.scrollIntoView({behavior: "smooth"});
    } else if (selectFieldTwo.innerText === 'Colombia' && selectFieldThree.innerText === 'Bus'){
      flyToColombiaDiv.classList.remove('display');
      travelToGreeceDiv.classList.remove('display');
      flyToGreeceDiv.classList.remove('display');
      travelToSpainDiv.classList.remove('display');
      flyToSpainDiv.classList.remove('display');
      travelToNetherlandsDiv.classList.remove('display');
      flyToNetherlandsDiv.classList.remove('display');
      travelToTurkeyDiv.classList.remove('display');
      flyToTurkeyDiv.classList.remove('display');

      travelToColombiaDiv.classList.add('display');
      travelToColombiaDiv.scrollIntoView({behavior: "smooth"});
    }

})

// MODAL'S

function openModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
    const formPriceColor = document.querySelector('.formPrice span');
    formPriceColor.style.color = 'red';
    
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
  cardNegativeTwo.classList.remove('display');
  cardPositiveTwo.classList.remove('display');
}

function openModal2() {
    const modal2 = document.getElementById('modal2');
    modal2.style.display = 'block';
}

function closeModal2() {
  const modal2 = document.getElementById('modal2');
  modal2.style.display = 'none';
  cardNegative.classList.remove('display');
  cardPositive.classList.remove('display');
}

function openModal3() {
  const modal3 = document.getElementById('modal3');
  modal3.style.display = 'block';
}

function closeModal3() {
  const modal3 = document.getElementById('modal3');
  modal3.style.display = 'none';
  cardNegative.classList.remove('display');
  cardPositive.classList.remove('display');
}

// FORM SUBMITION

function submitForm() {
    const emailInput = document.getElementById('email');
    const hiddenEmailInput = document.getElementById('hidden-email');

    hiddenEmailInput.value = emailInput.value;

    
    document.getElementById('payment-form').submit();
    return false; 
  }


// CREDIT CARD

  document.addEventListener("DOMContentLoaded", () => {

    document.querySelector('.card-number-input').oninput = () => {
      document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;

    }


    document.querySelector('.card-holder-input').oninput = () => {
      document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
    }
  
    document.querySelector('.month-input').oninput = () => {
      document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
    }
  
    document.querySelector('.year-input').oninput = () => {
      document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
    }
  
    document.querySelector('.cvv-input').onmouseover = () => {
      document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
      document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
    }
  
    document.querySelector('.cvv-input').onmouseout = () => {
      document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
      document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
    }
  
    document.querySelector('.cvv-input').oninput = () => {
      document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
    }
  });

document.addEventListener("DOMContentLoaded", () => {
    const cardNumberInput = document.querySelector('.card-number-input');
    const cardTypeImage = document.querySelector('.front img:last-child'); 
    const frontCard = document.querySelector('.front'); 
    const backCard = document.querySelector('.back');
    const submitColor = document.querySelector('.submit-btn');
  
    cardNumberInput.oninput = () => {
      const cardNumberValue = cardNumberInput.value.replace(/\D/g, ''); // Remove all non-numeric characters
      const cardNumber = formatCardNumber(cardNumberValue);
  
      const firstDigit = parseInt(cardNumber.charAt(0));
  
      // Update the image and background based on the first digit
      if (isNaN(firstDigit)) {
        // If the first character is not a number, set default image or hide it
        cardTypeImage.style.display = 'none';
        frontCard.style.backgroundImage = 'linear-gradient(45deg, #4e54c8, #8086fc)';
        backCard.style.backgroundImage = 'linear-gradient(45deg, #4e54c8, #8086fc)';
        submitColor.style.backgroundImage = 'linear-gradient(45deg, #4e54c8, #8086fc)';
      } else if (firstDigit === 2 || firstDigit === 5) {
        cardTypeImage.src = './card pics/mastercard-svgrepo-com (1).svg';
        cardTypeImage.style.height = '70px';
        cardTypeImage.style.display = 'block';
        frontCard.style.backgroundImage = 'linear-gradient(45deg, blueviolet, deeppink)';
        backCard.style.backgroundImage = 'linear-gradient(45deg, blueviolet, deeppink)';
        submitColor.style.backgroundImage = 'linear-gradient(45deg, blueviolet, deeppink)';
      } else if (firstDigit === 4) {
        cardTypeImage.src = './card pics/visa.png';
        cardTypeImage.style.height = '50px';
        cardTypeImage.style.display = 'block';
        frontCard.style.backgroundImage = 'linear-gradient(45deg, #00b4db, #0083b0)';
        backCard.style.backgroundImage = 'linear-gradient(45deg, #00b4db, #0083b0)';
        submitColor.style.backgroundImage = 'linear-gradient(45deg, #00b4db, #0083b0)';
      } else if (firstDigit === 3) {
        cardTypeImage.src = './card pics/amex-svgrepo-com.svg';
        cardTypeImage.style.height = '70px';
        cardTypeImage.style.display = 'block';
        frontCard.style.backgroundImage = 'linear-gradient(45deg, #302b63, #24243e)';
        backCard.style.backgroundImage = 'linear-gradient(45deg, #302b63, #24243e)';
        submitColor.style.backgroundImage = 'linear-gradient(45deg, #302b63, #24243e)';
      } else {
        cardTypeImage.style.display = 'none';
        frontCard.style.backgroundImage = 'linear-gradient(45deg, #4e54c8, #8086fc)';
      }
  
      document.querySelector('.card-number-box').innerText = cardNumber;
      if (!cardNumber) {
        document.querySelector('.card-number-box').innerText = '################';
      }
    };
  });
  
  // Function to format the card number with "-" after every 4 digits
  function formatCardNumber(cardNumber) {
    const formattedNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1-');
    return formattedNumber;
  }
  
// CREDIT CARD CONST'S

const cardPositive = document.querySelector('.pos-feed-div');
const cardNegative = document.querySelector('.neg-feed-div');
const cardForm = document.getElementById('ccard-form');
const creditCardSubmitButton = document.querySelector('.submit-btn');
const addFundsMainButton = document.querySelector('.text-container');


creditCardSubmitButton.addEventListener('click', () => {
  const creditCardNumber = document.querySelector('.card-number-input');
  const creditCardHolder = document.querySelector('.card-holder-input');
  const creditCardMonth = document.querySelector('.month-input');
  const creditCardYear = document.querySelector('.year-input');
  const creditCardCVV = document.querySelector('.cvv-input');
  const creditCardAmountAdd = document.querySelector('.amount-input');


  if (!creditCardNumber.value || !creditCardHolder.value || !creditCardCVV.value || !creditCardAmountAdd.value) {
    cardNegative.classList.add('display');
    cardPositive.classList.remove('display');

    cardNegative.innerText = `There was an issue in processing your payment! Please fill required fields!`
  } else {
    cardNegative.classList.remove('display');
    cardPositive.classList.add('display');

    let numberUserAddFunds = Number(creditCardAmountAdd.value);

    userFunds += numberUserAddFunds;
    addFundsMainButton.innerText = `Balance: ${userFunds}$`;
    cardPositive.innerText = `Congratulations! You've succesfully added ${numberUserAddFunds}$ to your account! Enjoy your travels!`

    creditCardNumber.value = '';
    creditCardHolder.value = '';
    creditCardMonth.value = 'month';
    creditCardYear.value = 'year';
    creditCardCVV.value = '';
    creditCardAmountAdd.value = '';

    const frontCard = document.querySelector('.front'); 
    const backCard = document.querySelector('.back');
    const submitColor = document.querySelector('.submit-btn');
    frontCard.style.backgroundImage = 'linear-gradient(45deg, #4e54c8, #8086fc)';
    backCard.style.backgroundImage = 'linear-gradient(45deg, #4e54c8, #8086fc)';
    submitColor.style.backgroundImage = 'linear-gradient(45deg, #4e54c8, #8086fc)';
    document.querySelector('.card-number-box').innerText = '################';
    document.querySelector('.card-holder-name').innerText = 'Full name';
    document.querySelector('.exp-month').innerText = 'MM';
    document.querySelector('.exp-year').innerText = 'YY';
    document.querySelector('.cvv-box').innerText = '';
  }
  
})

// ARAINGMENT DETAILS

const cards = document.querySelectorAll('.card');
const cardPriceColor = document.querySelector('.spanColored');
for (const card of cards) {
const cardPrice = card.querySelector('.pop-dest-price');
const cardTransportType = card.querySelector('.pop-dest-transport');
const cardTransportImage = card.querySelector('.pop-dest-transport img');
const cardtransportPPP = card.querySelector('.pop-dest-transport p');
const cardTransportTooltip = card.querySelector('.tooltip');
const cardName = card.querySelector('.pop-dest-name');



if (cardtransportPPP && cardtransportPPP.innerText === 'Via Bus'){
  let arraingmentCost = Math.floor(Math.random() * (701 - 400) + 400);
  cardPrice.innerText = `Price: ${arraingmentCost}$`

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1){
    cardTransportImage.src = './dd-pics/lasta.jpeg'
    cardTransportTooltip.innerText = 'Lasta';
    cardTransportTooltip.style.right = '11px';
  } else if (randomNumber === 2){
    cardTransportImage.src = './dd-pics/eurolines.png';
    cardTransportTooltip.innerText = 'Eurolines';
  } else if (randomNumber === 3){
    cardTransportImage.src = './dd-pics/flixbus.png';
    cardTransportTooltip.style.right = '7px';
    cardTransportTooltip.innerText = 'Flixbus';
  }

} else if (cardtransportPPP && cardtransportPPP.innerText === 'Via Airplane') {
  let arraingmentCost = Math.floor(Math.random() * (1201 - 700) + 700);
  cardPrice.innerText = `Price: ${arraingmentCost}$`

  let randomNumber = Math.floor(Math.random() * 4 + 1);
  if (randomNumber === 1){
    cardTransportImage.src = './dd-pics/lufthansa-svgrepo-com.svg'
    cardTransportTooltip.innerText = 'Lufthansa';
  } else if (randomNumber === 2){
    cardTransportImage.src = './dd-pics/fly-emirates.png';
    cardTransportTooltip.style.right = '-7px'
    cardTransportTooltip.innerText = 'Fly Emirates';
  } else if (randomNumber === 3){
    cardTransportImage.src = './dd-pics/air-srbija.jpg';
    cardTransportTooltip.style.right = '0px';
    cardTransportTooltip.innerText = 'Air Srbija';
  } else if (randomNumber === 4){
    cardTransportImage.src = './dd-pics/Qatar-Airways-Emblem.png';
    cardTransportTooltip.style.right = '-14px';
    cardTransportTooltip.innerText = 'Qatar Airways';
  }
}


card.addEventListener('click', () => {
  openModal();
    fromForm.placeholder = 'Belgrade, Serbia';
    toForm.placeholder = cardName.innerText;
    transType.placeholder = '04.08-11.08 - ' + cardTransportType.innerText;
    formDuration.placeholder = cardPrice.innerText;
})

}

// PERSONAL DETAILS

const reserveArraingmentButton = document.getElementById('reserveButton');
const cardPositiveTwo = document.querySelector('.pos-feed-div-two');
const cardNegativeTwo = document.querySelector('.neg-feed-div-two');
const firstNamePFORM = document.getElementById('fname');
const lastNamePFORM = document.getElementById('lname');
const phoneNumberPFROM = document.getElementById('phone');


reserveArraingmentButton.addEventListener('click', () => {
  const priceString = formDuration.getAttribute('placeholder');
  const match = priceString.match(/\d+/);
  const emailPFORM = document.getElementById('email');
  let priceNumberExtraxted = 0;

  if (match){
     priceNumberExtraxted = parseInt(match[0]);
  }

  if (!firstNamePFORM.value || !lastNamePFORM.value || !emailPFORM.value || !phoneNumberPFROM.value){
    cardNegativeTwo.classList.add('display');
    cardPositiveTwo.classList.remove('display');

    cardNegativeTwo.innerText = `Please fill out all required fields and try again!`
    return;
  }

  if (priceNumberExtraxted<userFunds || priceNumberExtraxted===userFunds){
    cardNegativeTwo.classList.remove('display');
    cardPositiveTwo.classList.add('display');

    cardPositiveTwo.innerText = `Congratulations! You've succesfully made your reservation! Enjoy your travels!`

    userFunds-=priceNumberExtraxted;
    addFundsMainButton.innerText = `Balance: ${userFunds}$`

    firstNamePFORM.value = '';
    lastNamePFORM.value = '';
    emailPFORM.value = '';
    phoneNumberPFROM.value = '';


  } else if (priceNumberExtraxted>userFunds){
    cardNegativeTwo.classList.add('display');
    cardPositiveTwo.classList.remove('display');
    
    let difference = priceNumberExtraxted-userFunds;

    cardNegativeTwo.innerText = `You're missing funds. Please add ${difference}$ and try again!`
  }
  
  
  // submitForm();
})

// CONTACT US 

const contactUsButton = document.getElementById('contactButton');

contactUsButton.addEventListener('click', () => {
  openModal3();
});


