let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let copyDiv = document.querySelector("#copy");

let updatePage = (evt, hexColor) => {

   evt.target.innerText = hexColor;
   evt.target.style.backgroundColor = hexColor;
   document.body.style.backgroundImage = `linear-gradient(to right, ${btn1.innerText}, ${btn2.innerText})`;
   copyDiv.innerText = `background-Image:linear-gradient(to right, ${btn1.innerText}, ${btn2.innerText})`;

}

let hexColor = (evt) => {

   let str = "0123456789ABCDEFabcdef";
   let hexColor = "#";

   for (let i = 1; i <= 6; i++) {
      hexColor += str[Math.trunc(Math.random() * 22)]
    }

   updatePage(evt, hexColor);
}

copyDiv.addEventListener("click", (evt) => {

   let check = confirm("Copy?");

    if (check) {
      setTimeout(() => {
         const textToCopy = evt.target.innerText;
         navigator.clipboard.writeText(textToCopy);
        }, 2);
    }

})

btn1.addEventListener("click", hexColor);
btn2.addEventListener("click", hexColor);

