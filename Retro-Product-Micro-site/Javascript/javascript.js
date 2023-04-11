document.addEventListener('DOMContentLoaded', (loaded) => {
    console.log("Loaded")
})


/* jQuery */ /* making header and footer global */
$(document).ready(function () {
    $(function () {
        $('#head').load("meta.html");
        $('#header').load("header.html");
        $('#footer').load("footer.html");
    })
})

