/*==================== CODING - ENCODING ====================*/
var code = document.getElementById("code");
var decode = document.getElementById("decode");
var codeBtn = document.getElementById("code-btn");
var decodeBtn = document.getElementById("decode-btn");

codeBtn.onclick = function(){
decode.value = parse(code.value, true);
code.value = "";
};

decodeBtn.onclick = function(){
code.value = parse(decode.value, false);
decode.value = "";
};

function parse(input, code = true)
{
var res = [];
for(var i = 0; i < input.length; i++) {
	if(code)
	res.push( String.fromCharCode(input.charCodeAt(i) + 127) );
	else
	res.push( String.fromCharCode(input.charCodeAt(i) - 127) );
}
return res.join("");
}

/*==================== TOTO - LOTO ====================*/


var total = document.getElementById("total");
var balance = document.getElementById("balance");
var tresult = document.getElementById("tresult");
var numbers = document.getElementById("numbers");
var tbtn = document.getElementById("tbtn");
tbtn.onclick = function() {
if(getNumber(balance) <= 0) {
	alert("Не може да играеш тото! Няма пари! Фалира!");
	return;
}

var numArray = numbers.value.split(',');
var filteredNumArray = [];
for(var i = 0; i < numArray.length; i++) {
	var num = parseInt(numArray[i]);
	if(!isNaN(num) && num >= 1 && num <= 49 && filteredNumArray.indexOf(num) == -1) {
	filteredNumArray.push(num);
	}
}

if(filteredNumArray.length != 6) {
	alert("Wrong input!");
	return;
}

balance.textContent = getNumber(balance) - 10;
total.textContent = getNumber(total) + 10;
var res = generateToto();
tresult.textContent = res.toString();
var matchCount = 0;

for(var i = 0; i < numArray.length; i++) {
	if(res.includes(numArray[i])) {
	matchCount++;
	}
}

var val = 0;
switch(matchCount) {
	case 6: val = getNumber(total) * 1.0; break;
	case 5: val = getNumber(total) * 0.7; break;
	case 4: val = getNumber(total) * 0.3; break;
	case 3: val = getNumber(total) * 0.1; break;
}

if( matchCount > 3 ) {
	balance.textContent = getNumber(balance) + val;
	total.textContent = getNumber(total) - val;
	tresult.textContent += "Ти спечели " + val;
}
}

function getNumber(el) {
return parseInt(el.textContent);
}

function generateToto() {
var arr = [];
do {
	var num = randInt(1, 49);
	if(!arr.includes(num)) {
	arr.push(num);
	}
}
while(arr.length < 6)

return arr;
}

function randInt(min, max) {
return Math.floor(Math.random() * (max - min) + min);
}
/*==================== GUESS THE NUMBER ====================*/

var result = document.getElementById("result");
var number = document.getElementById("number");
var gbtn = document.getElementById("gbtn");

var MIN = -100;
var MAX = 100;
var guessNumber = 0;

gbtn.onclick = function() {
if(guessNumber == 0) {
	guessNumber = randInt(MIN, MAX);
	console.log(guessNumber);
}
var num = parseInt(number.value);
if(isNaN(num) || num <= MIN || num >= MAX) {
	alert("Wrong input!");
	return;
}

if(num > guessNumber) {
	alert("UP");
} else if( num < guessNumber) {
	alert("DOWN");
} else if(num == guessNumber) {
	alert("Success");
	guessNumber = 0;
}
};

function randInt(min, max) {
return Math.floor(Math.random() * (max - min) + min);
}
