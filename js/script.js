
function interes(){
    var boxvive = document.getElementById('newinteresbox');
    boxvive.style.display = 'block';
}
function intdel() {
    var parent = document.getElementById('');
    var deleteint = document.getElementsByClassName('user-info__interes');
    parent.removeChild(deleteint);
}
function intpush() {
    var interess = document.getElementById('newinteres');
    var newint = interess.value;
    var div = document.getElementById('box');
    if(newint != null && newint != undefined && newint.length != 0) {
        var a = document.createElement('a');
        a.innerHTML = newint;
        a.href = '#';
        a.className = 'user-info__interes';
        div.insertBefore(a, div.firstElementChild);
        var boxvive = document.getElementById('newinteresbox');
        boxvive.style.display = 'none';
        interess.value = '';
    }
    a.addEventListener('click', function () {
        div.removeChild(a);
    }) 
}
$(document).ready(function(){ 
    $('.user-info__interes').click( function(){
        $(this).remove();
    })
})

function interesoff(){
    var boxvive = document.getElementById('newinteresbox');
    boxvive.style.display = 'none';
}

function func() {
    var elem = document.getElementById('test');
    var elem2 = document.getElementById('test1');
    elem.style.color = '#000000';
    elem.style.background = '#ffffff';
    elem2.style.color = '#ffffff';
    elem2.style.background = '#1e69ac';
    var user = document.getElementById('user');
    user.style.display = 'none';
    var friends = document.getElementById('friends');
    friends.style.display = 'block';
}
function func1() {
    var elem = document.getElementById('test1');
    var elem2 = document.getElementById('test');
    elem.style.color = '#000000';
    elem.style.background = '#ffffff';
    elem2.style.color = '#ffffff';
    elem2.style.background = '#1e69ac';
    var user = document.getElementById('user');
    var intbox = document.getElementsByClassName('user-info-box')[0];
    var friends = document.getElementById('friends');
    friends.style.display = 'none';
}
window.onresize = function(){
    var intbox = document.getElementsByClassName('user-info-box')[0];
    var user = document.getElementById('user');
    if (document.documentElement.clientWidth < 451) {
        intbox.style.display = 'flex';
        
    } else {
        intbox.style.display = 'grid';
    }
    if (document.documentElement.clientWidth < 661) {
        user.style.display = 'block';
    } else {user.style.display = 'grid';
    }
    func1();
}
