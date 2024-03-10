console.log("ramdan kareem");
import './style.css';
import MenuContentPage from './menu';
import homeContentPage from './home';
import contactContentPage from './contact';

const container=document.querySelector('#content');
const navButtons=document.querySelectorAll('nav button');

// navButtons.forEach(btn => {
//     btn.addEventListener('click',)
// });

// container.appendChild(MenuContentPage());
container.appendChild(homeContentPage())
// container.appendChild(contactContentPage());

for(let i=0;i<navButtons.length;i++){
   navButtons[i].addEventListener('click',()=>{
    container.innerHTML="";
    navButtons[0].classList.remove('active');
    navButtons[1].classList.remove('active');
    navButtons[2].classList.remove('active');
    if(navButtons[i].textContent=="Home"){
        container.appendChild(homeContentPage())
        navButtons[i].classList.add('active');
    }
    else if(navButtons[i].textContent=="Menu"){
         container.appendChild(MenuContentPage());
        navButtons[i].classList.add('active');

    }
    else if(navButtons[i].textContent=="Contact"){
         container.appendChild(contactContentPage());
        navButtons[i].classList.add('active');

    }
   })
}