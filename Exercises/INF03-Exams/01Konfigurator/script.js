const frameCheckbox = document.getElementById('checkbox-frame')
let image = document.getElementById("main-image")

// frameCheckbox.addEventListener("change", changeBorder );
frameCheckbox.addEventListener("change", switchBorderClass);


// function changeBorder() {
//     if (frameCheckbox.checked)
//     {
//         image.style.borderWidth = "1px";
//         image.style.borderStyle = "solid";
//         image.style.borderColor = "white";
//     } else {
//         image.style.border = "none";
//     }
// }

function switchBorderClass() {
    if (frameCheckbox.checked)
    {
        image.classList.add("my-border")
    } else {
        image.classList.remove("my-border")
    }
}

