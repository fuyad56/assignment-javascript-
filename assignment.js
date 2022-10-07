// https://fuyad56.github.io/assignment-javascript-/

// 1. kilometerToMeter=

function kilometerToMeter(kilometer) {
  var meter = kilometer * 1000;
  return meter;
}
var first = kilometerToMeter(15);
console.log(first);

// 2. budgetCalculator=

function budgetCalculator1(Price) {
  var watchPrice = Price * 50;
  var phonePrice = Price * 100;
  var laptopPrice = Price * 500;
  return watchPrice + phonePrice + laptopPrice;
}
var netPrice = budgetCalculator1(15);
console.log(netPrice);

// 3. hotelCost=

function hotelCost(hPrice) {
  var tenDays = 10 * 100;
  var twentyDays = 10 * 80;
  var seventyDays = 51 * 50;
  var result = tenDays + twentyDays + seventyDays;
  return result;
}
var netHotelCost = hotelCost(71);
console.log(netHotelCost);

// 4. megaFriend=

function megaFriend(string) {
  var stringSplit = string.split(" ");
  var longestWord = 0;
  for (var i = 0; i < stringSplit.length; i++) {
    if (stringSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
    return longestWord;
  }
}
var friend = ("fuyad", "hasan", "fahim", "masum", "kamal", "muaz", "shariful");
console.log(friend);
