const photo = document.getElementById("mainPhoto");
const category = document.getElementById("categoryName");
const music = document.getElementById("bgMusic");

const sections = [

{
name:"Jaimala",
folder:"Jaimala",
song:"songs/wedding/jaimala.mp3",
total:9
},

{
name:"Kanyadan",
folder:"Kanyadan",
song:"songs/wedding/kanyadan.mp3",
total:6
},

{
name:"Sindurdan",
folder:"Sindurdan",
song:"songs/wedding/sindurdan.mp3",
total:7
},

{
name:"Phere",
folder:"Phere",
song:"songs/wedding/phere.mp3",
total:8
},

{
name:"Reception",
folder:"Reception",
song:"songs/wedding/reception.mp3",
total:31
},

{
name:"Couple",
folder:"Couple",
song:"songs/wedding/couple.mp3",
total:8
}

];

let sectionIndex = 0;
let imageIndex = 1;

function loadSection(){

const s = sections[sectionIndex];

category.innerHTML = s.name;

music.pause();
music.src = s.song;
music.load();

music.play().catch(()=>{});

imageIndex = 1;

showImage();

}

function showImage(){

const s = sections[sectionIndex];

photo.classList.remove("fadeIn");
photo.classList.add("fadeOut");

setTimeout(()=>{

photo.src=`images/Wedding/${s.folder}/${s.folder.toLowerCase()}${imageIndex}.jpg`;

photo.classList.remove("fadeOut");
photo.classList.add("fadeIn");

},300);

}

photo.addEventListener("click",()=>{

const s = sections[sectionIndex];

if(imageIndex < s.total){

imageIndex++;

showImage();

}
else{

sectionIndex++;

if(sectionIndex < sections.length){

loadSection();

}
else{

music.pause();

category.innerHTML="❤️ Thank You ❤️";

photo.src="images/thankyou.jpg";

document.querySelector("p").innerHTML="Thank you for being part of our beautiful journey.";
document.getElementById("credit").style.display = "block";

}

}

});

window.onload=loadSection;

photo.onerror=function(){

console.log("Image Missing");

};

music.onerror=function(){

console.log("Music Missing");

};