var b = document.getElementById('b');
var l = document.getElementById('thelist');
var li = document.getElementsByTagName('li');
var h = document.getElementById('h');
var fib = document.getElementById('fib');
var bfib= document.getElementById('bfib');

function addEvents(item) {
    item.addEventListener('mouseover', function() {
	h.innerHTML = item.innerHTML;
    });
    item.addEventListener('mouseout', function() {
	h.innerHTML = 'Hello World!';
    });
    item.addEventListener('click', function() {
	item.remove();
    });
}

b.addEventListener('click', function() {
    var item = document.createElement('li');
    item.innerHTML = 'item';
    addEvents(item);
    l.appendChild(item);
});
    
for (var i = 0; i < li.length; i++) {
    addEvents(li[i]);
}

function fibonacci(n) {
    if (n == 0)
	return 0;
    else if (n == 1)
	return 1;
    else
	return fibonacci(n-1) + fibonacci(n-2);
}

bfib.addEventListener('click', function() {
    var length = fib.getElementsByTagName('li').length;
    var item = document.createElement('li');
    item.innerHTML = fibonacci(length);
    fib.appendChild(item);
});
