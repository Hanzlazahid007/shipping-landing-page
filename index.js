let display = document.querySelector("#display");
let buttons = Array.from(document.getElementsByClassName("button"));
buttons.map(button => {
    button.addEventListener("click", (a) => {
        switch (a.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                    break;
                } catch {
                    display.innerText = 'Error!';
                    break;
                }
            case '&larr':
                display.innerText = '';

            default:
                display.innerText += a.target.innerText;
        }
    })
})