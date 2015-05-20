// var myBar = document.getElementById('bar');
// console.log(myBar);

// myBar.innerHTML = 'changed bar';
// //changes value of <div> to changed bar from the javascript
// //changes only apply when in strings

// var myFoos = document.getElementsByClassName('foo');
// //will always give an array of the elements with that class


// for (var i=0; i<myFoos.length; i++) {
// 	if (myFoos[i].tagName === 'A') {
// 		myFoos[i].innerHTML = 'Your Link';
// 	}
// }
// //will target all elements with class name foo, then find a tags

// var myFooLink = document.querySelector('a.foo');
// // will specifically target foo links, short cut for above 'for' loop
// // will only grab first one it finds

// var myFooLink = document.querySelectorAll('a.foo');
// //add all to the end of querySelector to grab ALL a tags with class of foo

// myFooLink.style.color = 'red';
// //use camel case where dash would normally be used, i.e. 'background-color' is backgroundColor
// //rule of thumb: IF YOU CAN DO IT IN CSS, PROBABLY SHOULD DO IT IN CSS
// //can change 'style', will override any CSS
// //adds 'style' tag, which is top of CSS specificity hierarchy


// myFoos[1].innerHTML = 'foo 3';
// //grabs a certain element within a class. classVar.[position].innerHTML

// var divs = document.getElementsByTagName('div');
// //grabs elements

// var tiy = {};
// tiy.magicMethod = function() {
// 	return Math.random()*1000;
// }

// console.log(tiy.magicMethod());
// //will console.log the ran function


// function changeLinkText() {
// 	var myFooLink = document.querySelectorAll('a.foo');
// 	myFooLink.innerHTML = 'New Foo Link';
// }

// setTimeout(changeLinkText, 4000);
// //first pass name of function, then pass how long till you want it to run (is in milliseconds)

// function countDown() {
// 	countNum--;
// 	counter.innerHTML = countNum.toString();	
// }
// // setTimeout(incrementCounter, 1000);
// // //just runs once

// setInterval(countDown, 1000);

// if (parseInt(counter) === 0) {
// 	clearInterval(countDown);
// }
//runs, waits given amount of time in between runs



var counter = document.getElementById('counter');

var countNum = 5;

var happyNewYear = setInterval(function() {
	countNum--;
	counter.innerHTML = countNum.toString();
	if(countNum === 0) {
		clearInterval(happyNewYear);
		counter.innerHTML = 'BOOM!!!';
		counter.style.color = 'red';
		counter.style.backgroundColor = 'yellow';
	}

}, 1000)


// animate a box!!
var boxElement = document.querySelector('.box');
boxElement.style.width = '200px';
boxElement.style.height = '200px';
boxElement.style.backgroundColor = 'blue';
boxElement.style.marginLeft = '50px';

function moveLeft() {
	var currentMargin = boxElement.style.marginLeft;
	if(currentMargin == '') {
		currentMargin = 0;
	} 
	var newMargin = parseInt(currentMargin) + 10;
	// var currentMargin = boxElement.style.marginLeft;
	// var newMargin = currentMargin + 1;
	boxElement.style.marginLeft = newMargin + 'px';
}

setInterval(moveLeft, 100);

// when dealing with CSS and HTML in JavaScript, USE STRINGS

//change class name with myBar.className = 'this-class';


//INTRODUCING DATE!
var myDate = new Date();
// essentially creating an object, date is a built-in javascript object
// not a live reflection of the date










