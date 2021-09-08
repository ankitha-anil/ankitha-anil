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


async function changeText(){
    const words=["Design","Development","Art","Travel"];
    let i=1;
    while( i > 0 ) {
        for(let i=0;i<words.length;i++)
        {document.getElementById("introText").innerHTML=words[i];
        await sleep(1500);}
    }
}

const skillsContent = document.getElementsByClassName('skills__content'),
skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    print('in');
    let itemClass = this.parentNode.className

    for( i =0; i< skillsContent.length ;i++){
        skillsContent[i].className ='skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className='skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>
{el.addEventListener('click', toggleSkills)})
