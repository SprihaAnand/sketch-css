function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");

}
//toggle adds and re,oves classes on clickink like a button

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
        if (!event.target.matches('.dropbtn'))
        //iThe target event property returns the element that triggered the event.
        //matches:if the given eleent is selected by the mentioned selector(dropbtn in this case)
        {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            //.lenght gives number of elements in dropdown
            //checking for each element if show is included itis removed if we click somewhere on window
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    //     //media query for navbar using javascript
let nav = document.getElementsByClassName("navbar1");

function myFunction2(x) {
    if (x.matches) { // If media query matches

        nav[0].innerHTML = "<img src=\"images/logo.svg\">"

    } else {}
}
var x = window.matchMedia("(max-width: 956px)")
myFunction2(x) // Call listener function at run time
x.addListener(myFunction2) // Attach listener function on state changes
