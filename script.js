/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("nav").style.width = "155px";
    document.getElementById("nav").style.position = "fixed";
}
            
function closeNav() {
    document.getElementById("nav").style.width = "0";
}
function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }

  function overlay(){
    document.getElementsByClassName("overlay").style.opacity= "1";
}

 function showLanguage(){
    document.getElementById("language").style.visibility= "visible";
    document.getElementById("language-2").style.visibility= "visible";
   // document.getElementById("tools").style.visibility= "hidden";
   // document.getElementById("learning").style.visibility= "hidden";
    document.getElementsByClassName("skills-there")[0].style.transition="0.3s";
    document.getElementsByClassName("skills-there")[0].style.height="500px";
    document.getElementsByClassName("slider")[0].style.overflow="none";
    document.getElementsByClassName("skills-tab")[0].style.height="70px";
    
 }

 function showTools(){
    document.getElementById("tools").style.visibility= "visible";
    //document.getElementById("language").style.visibility= "hidden";
    //document.getElementById("language-2").style.visibility= "hidden";
    //document.getElementById("learning").style.visibility= "hidden";
    document.getElementsByClassName("skills-there")[0].style.transition="0.3s";
    document.getElementsByClassName("skills-there")[0].style.height="300px";
    document.getElementsByClassName("skills-tab")[0].style.height="130px";
 }

 function showLearning(){
    document.getElementById("learning").style.visibility= "visible";
   // document.getElementById("language").style.visibility= "hidden";
    //document.getElementById("language-2").style.visibility= "hidden";
    //document.getElementById("tools").style.visibility= "hidden";
    document.getElementsByClassName("skills-there")[0].style.transition="0.3s";
    document.getElementsByClassName("skills-there")[0].style.height="300px";
    document.getElementsByClassName("skills-tab")[0].style.height="130px";
 }

async function changeText(){
    const words=["Design","Development","Art","Travel"];
    let i=1;
    while( i > 0 ) {
        for(let i=0;i<words.length;i++)
        {document.getElementById("introText").innerHTML=words[i];
        await sleep(1500);}
    }
}

