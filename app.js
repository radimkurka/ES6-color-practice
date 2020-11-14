const btn = document.querySelector("button");
const message = document.querySelector("h1");

const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const isTooDark = red + green + blue;
    const values = [`rgb(${red}, ${green}, ${blue})`, isTooDark];
    return values
}


btn.addEventListener("click", () => {
    const newColor = generateRandomColor()
    document.body.style.backgroundColor = newColor[0];
    message.innerText = newColor[0];
    if (newColor[1] <= 150) {
        message.style.color = "white";
    } else message.style.color = "black";
});

