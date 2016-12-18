var b = document.getElementById('b');
var l = document.getElementById('thelist');
var li = document.getElementById('li');
var h = document.getElementById('h');

b.addEventListener('click', function() {
    var item = document.createElement('li');
    item.innerHTML = 'item';
    l.appendChild(item);
});
    
for (var i = 0; i < li.length; i++) {
    li[i].addEventListener('mouseover', function() {
	h.innerHTML = this.innerHTML;
    });
}
