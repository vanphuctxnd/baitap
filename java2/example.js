var greeting = 'Howdy';
var name = 'Molly';
var message = ',please check your order:';
var welcome = greeting + name + message;
var sign = 'Montague House';
var tiles = sign.length;
var subtotal = tiles *5;
var shipping = 7;
var grandTotal = subTotal + shipping;
var el = document.getElementById('greeting');
el.textContent = welcome;
var elSign = document.getElementById('userSign');
elSign.textContent = sign;
var elTiles = document.getElementById('tiles');
elTiles = tiles;
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;
el.textContent =welcome;


