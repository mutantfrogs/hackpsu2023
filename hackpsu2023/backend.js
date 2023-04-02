var button = true;
var currentWeek = 10;
var purchaseHistory = [];
var placeNames = [];
var placeTotals = [];

//account information of the student
var account = {
    firstName: 'Ryn',
    lastName: 'Love',
    lioncashBalance: 115.60,
    mealplanBalance: 786.00,
    lioncashLifeTime: 350.00,
    mealplanLifetime: 828.00,
  };
  
  //restaurants in the town and their info
  var restaurant = [
    { name: 'Starbucks', address: '232 W College Ave',  getDiscount: false, usesLioncash: true, averagePrice: 8.00},
    { name: 'Pollock Commons Buffet', address: '215 Bigler Rd', getDiscount: true, usesLioncash: false, averagePrice: 3.50 },
    { name: 'Panda Express', address: '7 HUB Robenson Center',  getDiscount: false, usesLioncash: true, averagePrice: 10.00}, 
    { name: 'Pizza @ West', address: 'Waring Commons',  getDiscount: true, usesLioncash: false, averagePrice: 3.50 }
  ];

  // example log of all the students reciepts (would ideally be obtained automatically as they make purchases and stored elsewhere)
  var receipts = [
    { academicWeek: 8, place: "Pollock Commons Buffet", mealplanTotal: 3.50, lioncashTotal: 0.00},
    { academicWeek: 9, place: "Starbucks", mealplanTotal: 13.00, lioncashTotal: 0.00 },
    { academicWeek: 10, place: "Starbucks", mealplanTotal: 5.00, lioncashTotal: 0.00 },
    { academicWeek: 10, place: "Panda Express", mealplanTotal: 7.00, lioncashTotal: 0.00},
    { academicWeek: 10, place: "Pollock Commons Buffet", mealplanTotal: 3.50, lioncashTotal: 0.00},
    { academicWeek: 10, place: "Pollock Commons Buffet", mealplanTotal: 4.50, lioncashTotal: 0.00},
    { academicWeek: 10, place: "Pizza @ West", mealplanTotal: 5.50, lioncashTotal: 0.00}
  ];

//weeks left in the semester
function weeksLeft(){
  const totalWeeks = 16;
  // current week would be calculated with date
  currentWeek = 10;

  var weeksLeft = totalWeeks - currentWeek;
  return weeksLeft;
}


//element builder
function propagateHTML(){
  //budget calculation
  var weeklyMealplanBudget = account.mealplanBalance/weeksLeft();
  var weeklyLioncashBudget = account.lioncashBalance/weeksLeft();

  document.getElementById("lioncashBalance").innerHTML = "$" + weeklyLioncashBudget.toFixed(2);
  document.getElementById("mealplanBalance").innerHTML = "$" + weeklyMealplanBudget.toFixed(2);
  document.getElementById("welcome").innerHTML = "Welcome, " + account.firstName + "!";

  var averageSpend =(account.mealplanLifetime - account.mealplanBalance)/receipts.length;
  document.getElementById('factHeader').innerHTML = "You spend an average of $" + averageSpend.toFixed(2) + " on a meal.";
}

//test accounts to show the dynamic system
function testAccounts(){
  button = !button;

  if(button == true){

  account.firstName = 'Ryn';
  account.lastName = 'Love';
  account.lioncashBalance = '115.60';
  account.mealplanBalance = '786.00';
  account.lioncashLifeTime = '350.00';
  account.mealplanLifetime = '828.00';

  receipts[0].academicWeek = 8;
  receipts[0].place = "Pollock Commons Buffet";
  receipts[0].mealplanTotal = 3.50;
  receipts[0].lioncashTotal = 0.00;
  receipts[1].academicWeek = 9;
  receipts[1].place = "Starbucks";
  receipts[1].mealplanTotal = 0.00;
  receipts[1].lioncashTotal = 15.00;
  receipts[2].academicWeek = 10;
  receipts[2].place = "Starbucks";
  receipts[2].mealplanTotal = 0.00;
  receipts[2].lioncashTotal = 10.00;
  receipts[3].academicWeek = 10;
  receipts[3].place = "Panda Express";
  receipts[3].mealplanTotal = 0.00;
  receipts[3].lioncashTotal = 12.00;
  receipts[4].academicWeek = 10;
  receipts[4].place = "Pollock Commons Buffet";
  receipts[4].mealplanTotal = 3.50;
  receipts[4].lioncashTotal = 0.00;
  receipts[5].academicWeek = 10;
  receipts[5].place = "Pollock Commons Buffet";
  receipts[5].mealplanTotal = 3.50;
  receipts[5].lioncashTotal = 0.00;
  receipts[6].academicWeek = 10;
  receipts[6].place = "Pizza @ West";
  receipts[6].mealplanTotal = 5.50;
  receipts[6].lioncashTotal = 0.00;
  
  }
  else if(button == false){
    account.firstName = 'Jake';
    account.lastName = 'Rizer';
    account.lioncashBalance = '55.00';
    account.mealplanBalance = '785.00';
    account.lioncashLifeTime = '500.00';
    account.mealplanLifetime = '828.00';

    receipts[0].academicWeek = 8;
    receipts[0].place = "Panda Express";
    receipts[0].mealplanTotal =11.00;
    receipts[0].lioncashTotal = 0.00;
    receipts[1].academicWeek = 9;
    receipts[1].place = "Pizza @ West";
    receipts[1].mealplanTotal = 2.75;
    receipts[1].lioncashTotal = 0.00;
    receipts[2].academicWeek = 10;
    receipts[2].place = "Pizza @ West";
    receipts[2].mealplanTotal = 1.25;
    receipts[2].lioncashTotal = 0.00;
    receipts[3].academicWeek = 10;
    receipts[3].place = "Panda Express";
    receipts[3].mealplanTotal = 14.00;
    receipts[3].lioncashTotal = 0.00;
    receipts[4].academicWeek = 10;
    receipts[4].place = "Starbucks";
    receipts[4].mealplanTotal = 6.00;
    receipts[4].lioncashTotal = 0.00;
    receipts[5].academicWeek = 10;
    receipts[5].place = "Pollock Commons Buffet";
    receipts[5].mealplanTotal = 3.50;
    receipts[5].lioncashTotal = 0.00;
    receipts[6].academicWeek = 10;
    receipts[6].place = "Pizza @ West";
    receipts[6].mealplanTotal = 5.50;
    receipts[6].lioncashTotal = 0.00;
  
  } 
  propagateHTML();
  buildDoughnutCharts();
  console.log("Clear");
}

//build the donut chart
function buildDoughnutCharts(){  
  for(let i = 0; i < receipts.length; i++) {
    if(currentWeek == receipts[i].academicWeek){
      purchaseHistory.push(receipts[i]);
    }
  }

  for(let i = 0; i < purchaseHistory.length; i++) {
    placeNames[i] = purchaseHistory[i].place;
  }

  for(let i = 0; i < purchaseHistory.length; i++) {
    placeTotals[i] = purchaseHistory[i].mealplanTotal;
  }

  var colors = ['rgba(30,64,124, 1)', 'rgba(0,156,222, 1)', 'rgba(4,30,66, 1)', 'rgba(62,163,158, 1)', 'rgba(49,77,100,1)','rgba(30,64,124, 1)', 'rgba(0,156,222, 1)', 'rgba(4,30,66, 1)', 'rgba(62,163,158, 1)', 'rgba(49,77,100,1)',];

  
            var ctx = document.getElementById("myChart");
            var myChart = new Chart(ctx, {
                type:'doughnut',
                data: {
                    labels: placeNames,
                    datasets: [{
                    data: placeTotals,
                    backgroundColor: colors,
                    borderColor: [
                    'rgba(255,255,255, 1)',
                    'rgba(255,255,255, 1)'
                    ],
                    borderWidth: 1,
                    }],
                  },
                  options: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                          fontColor: '#FFFFFF',
                          fontFamily: 'Roboto Slab',
                          fontSize: 12,
                          
                      }                       
                    }, 
                              
                }
            });
            
}


//create the scope buttons
function dropdownScopeLioncash(selectedValue){
  var dailyLioncashBalance = (account.lioncashBalance/weeksLeft())/7;
  var weeklyLioncashBudget = account.lioncashBalance/weeksLeft();


  if(selectedValue == "Weekly"){
    document.getElementById("lioncashBalance").innerHTML = "$" + weeklyLioncashBudget.toFixed(2);
    document.getElementById("lioncashP").innerHTML = "Lioncash budgeted <br>left for this week";
  }

  if(selectedValue == "Daily"){
    document.getElementById("lioncashBalance").innerHTML = "$" + dailyLioncashBalance.toFixed(2);
    document.getElementById("lioncashP").innerHTML = "Lioncash budgeted <br>left for today";
  }

  if(selectedValue == "Alltime"){
    document.getElementById("lioncashBalance").innerHTML = "$" + account.lioncashBalance;
    document.getElementById("lioncashP").innerHTML = "Lioncash left <br>for the semester";
  }
}

function dropdownScopeMealplan(selectedValue1){
  var dailyMealplanBalance = (account.mealplanBalance/weeksLeft())/7;
  var weeklyMealplanBudget = account.mealplanBalance/weeksLeft();


  if(selectedValue1 == "Weekly"){
    document.getElementById("mealplanBalance").innerHTML = "$" + weeklyMealplanBudget.toFixed(2);
    document.getElementById("mealplanP").innerHTML = "Mealplan budgeted <br>left for this week";
  }

  if(selectedValue1 == "Daily"){
    document.getElementById("mealplanBalance").innerHTML = "$" + dailyMealplanBalance.toFixed(2);
    document.getElementById("mealplanP").innerHTML = "Mealplan budgeted <br>left for today";
  }

  if(selectedValue1 == "Alltime"){
    document.getElementById("mealplanBalance").innerHTML = "$" + account.mealplanBalance;
    document.getElementById("mealplanP").innerHTML = "Mealplan left <br>for the semester";
  }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

