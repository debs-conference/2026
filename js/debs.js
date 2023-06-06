/* The JavaScript of DEBS. */

/* Functions definition */
function setUpGoogleTagManager() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-L24NH349M1');
}

function animateLinksWithHash() {
$("a").on('click', function(event) {
    if (this.hash !== "" && this.pathname == window.location.pathname) {   
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){
        window.location.hash = hash;
        });
    }});
}

/* App logic */
setUpGoogleTagManager();

// On page load
$(document).ready(function(){
    animateLinksWithHash();
});
