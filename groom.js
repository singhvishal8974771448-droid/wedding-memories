const photo = document.getElementById("mainPhoto");
const category = document.getElementById("categoryName");
const music = document.getElementById("bgMusic");

const startSide = localStorage.getItem("startSide");

const sections = [

{
name:"Groom",
folder:"Solo",
song:"songs/groom/solo.mp3",
total:6
},

{
name:"Haldi",
folder:"Haldi",
song:"songs/groom/haldi.mp3",
total:10
},

{
name:"Family",
folder:"Family",
song:"songs/groom/family.mp3",
total:17
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

photo.src = `images/Groom/${s.folder}/${s.folder.toLowerCase()}${imageIndex}.jpg`;

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

if(startSide === "groom"){

window.location.href = "bride.html";

}
else{

window.location.href = "wedding.html";

}

}

}

});

window.onload = loadSection;

photo.onerror = function(){

console.log("Image Missing");

};

music.onerror = function(){

console.log("Music Missing");

};