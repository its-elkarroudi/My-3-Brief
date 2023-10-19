

function myFunction(x) {

    if (x.matches) {

    } else {
        console.log("Desktop Size")
    }
    }

var x = window.matchMedia("(max-width: 700px)")
myFunction(x)
x.addListener(myFunction)