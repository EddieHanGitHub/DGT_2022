document.getElementById("nav-toggle").addEventListener('touchend', function(event) {
    document.getElementById("nav-toggle").classList.toggle("active");
    document.getElementById("nav-items-mobile").classList.toggle("hide");
})