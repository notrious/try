document.querySelectorAll("header ul li").forEach(function(page) {
    page.onclick = () => {
        let pageName = page.id.split("-")[1];
        showPage(pageName);
    };
});

function showPage(pageName) {
    clearPages();
    const current_page = document.getElementById(pageName);
    current_page.style.display = "block";
}

function clearPages() {
    const pages = document.querySelectorAll("#page-wrapper > div");
    
    for(var i = 0; i < pages.length; i++){
        pages[i].style.display = "none";
    }
}

showPage("home");


function myFunction() {
const tap = document.querySelector("body");
if (tap.className == "body") { 
tap.className = "darkmode";
    document.getElementById("btn").innerHTML="Night";
}
 else { 
 tap.className = "body";
     document.getElementById("btn").innerHTML="Day";
 }   
    
    
    
}

function quiz() { 
alert("Welcome to my quiz!");



const q1 = prompt("Who is the father of modern Bhutan?");
if (q1=="King Jigme Dorji Wangchuck") {
alert("Shingtu Lekso");
}
else if (q1=="Third King" || q1=="3rd king" || q1=="Jigme Dorji Wangchuck") {
alert("Lekso");
}

else { 
alert("Good Try");
}
}