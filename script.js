/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("nav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("navicon").style.visibility="hidden";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
            
function closeNav() {
    document.getElementById("nav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("closebtn").style.visibility="hidden";
    document.body.style.backgroundColor = "white";
}

function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
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

