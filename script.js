const memebtn=document.querySelector(".meme-btn");
const memeimg=document.querySelector(".meme-generator img");
const memetitle=document.querySelector(".meme-title");
const memecontainer=document.querySelector(".meme-container");
function updateImage(url,title,author){
    memeimg.setAttribute("src",url);
    memetitle.innerHTML=title;
    memecontainer.innerHTML=`Name by: ${author}`;
}
const generateMeme=() => {
    fetch("https://meme-api.com/gimme/wholesomememes").then((responce)=> responce.json())
    .then((data) => {
        updateImage(data.url,data.title,data.author);
    });
};
memebtn.addEventListener("click",generateMeme);
generateMeme();