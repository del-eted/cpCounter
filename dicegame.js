const counter = (amount, click) => {
    counterNo = 5;
    if (click == "add") {
        counterNo ++        
    };
    if (click == "remove") {
        counterNo -= amount
    };
    console.log(counterNo)
    
};

let number = 0

const button = document.getElementById("frontPageButton")
const addButton = document.getElementById("addButton")
const subtractButton = document.getElementById("subtractButton")

const textDoer = document.getElementById("textWhatsit")
const cpTextHolder = document.getElementById("cpHolder")


button.addEventListener( "click", () => {
    number = parseInt(textDoer.value)
    cpTextHolder.textContent = number
})

addButton.addEventListener( "click", () => {
    number ++
    cpTextHolder.textContent = number
}
)
subtractButton.addEventListener( "click", () => {
    number --
    cpTextHolder.textContent = number    
}
)

counter (2, "add")