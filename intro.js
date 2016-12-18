var b = document.getElementById('b');
var l = document.getElementById('thelist');
var li = document.getElementsByTagName('li');
var h = document.getElementById('h');

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
