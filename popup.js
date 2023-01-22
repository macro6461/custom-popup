const unhide = () =>{
    // use this function to unhide popup
    // can only unhide if the hide class was originally provided

    var container = document.getElementsByClassName("hidden")[0]
    if (container) container.classList.remove('hidden')
}

const hide = (e) => {
    // use below logic to remove from HTML body completely
    
    // e.target.parentElement.parentElement.remove()

    // use below logic to remove from HTML body temporarily 

    var container = e.target.parentElement.parentElement
    container.classList.add('hidden')
}

const constructPopup = () => {
    // propbably not the most efficient solution to hiding the popup
    // but the code is here if for whatever reason you might want to use it
    document.body.innerHTML += popupString;
}

const addClose = () =>{
    document.getElementsByClassName("close")[0].addEventListener("click", hide)
}

// remove the below code if you don't want to show popup when content loads.
document.addEventListener('DOMContentLoaded', function(event) {
    addClose()
});

const popupString = `
<div class="popup outer">
    <div class="popup inner">
        <button class="close">x</button>
        <img src="giphy.gif"/>
        <h3>Here is your popop!</h3>
        <p>If you liked this tool, please leave a tip or follow me on Medium!</p>
        <p>Thanks for using the custom popup!</p>
        <a href="https://paypal.me/mattcroak?country.x=US&amp;locale.x=en_US" target="_blank">Paypal</a>
        <a href="https://matt-croak.medium.com/membership" target="_blank">Medium</a>
    </div>
    <!-- uncomment below to use with full screen popup -->
    <!-- <div class="background-mask"></div> -->
</div>
`