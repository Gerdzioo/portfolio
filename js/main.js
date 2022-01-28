var tableSkill=[
    "HTML |",
    " CSS |",
    " JAVASCRIPT |",
    " BOOTSTRAP 5"
];

var cel = document.getElementById("mySkill");

cel.innerHTML += tableSkill[0];
cel.innerHTML += tableSkill[1];
cel.innerHTML += tableSkill[2];
cel.innerHTML += tableSkill[3];


function bigImg(x){
    x.style.width="120px"
    x.style.height="120px"
}

function normalImg(x){
    x.style.width="100px"
    x.style.height="100px"
}

function AboutMe(){
    const x = document.getElementById('aboutme');
    if(document.getElementById('projects').style.display === "block"){
        alert("Zamknij onko 'Projekty'");
        return false;
    }
    if (x.style.display === 'none') {
      x.style.display = 'block';
      x.style.animation = "extensionHeader 2s";
    } else {
      x.style.animation = "insertionHeader 2s";
      setTimeout(function(){x.style.display="none";}, 1800)
    }
}

function Projects(){
    const x = document.getElementById('projects');
    if(document.getElementById('aboutme').style.display === "block"){
        alert("Zamknij onko 'O mnie'");
        return false;
    }
    if (x.style.display === 'none') {
      x.style.display = 'block';
      x.style.animation = "extensionHeader 2s";
    } else {
      x.style.animation = "insertionHeader 2s";
      setTimeout(function(){x.style.display="none";}, 1800)
    }
}