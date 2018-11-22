;(function(){
    var toggle = document.querySelector('#reveal-toggle');
    var password = document.querySelector('#password');

    // Mouse events
    toggle.addEventListener('mousedown', function() {password.type = 'text'}, false);
    toggle.addEventListener('mouseup', function() {password.type = 'password'}, false);

    // Touch events
    toggle.addEventListener('touchstart', function() {password.type = 'text'}, false);
    toggle.addEventListener('touchend', function() {password.type = 'password'}, false);

    // If use somehow drags their mouse / thumb off of the toggle button when in the 'down' state
    document.addEventListener('mouseup', function(e) {if (e.target.type != 'password') password.type = 'password'}, false);
    document.addEventListener('touchend', function(e) {if (e.target.type != 'password') password.type = 'password'}, false);
})();
