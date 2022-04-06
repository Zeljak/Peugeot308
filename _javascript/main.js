// document.addEventListener('DOMContentLoaded', () => {
//   console.log('Hello Bulma!');
// });

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }

var brojAodg = 0; 
var brojBodg = 0; 
var brojCodg = 0; 
var brojDodg = 0;
var najviseOdg = 0;
var izbor = 'nijedan';

if (document.querySelector('#submit-form')) {
  document.querySelector('#submit-form').addEventListener('click', function(e){
    e.preventDefault();
  
    // Pitanje 1
    if (document.querySelector('#stedljiv').checked) {
      brojAodg++;
    } else if (document.querySelector('#sportski').checked) {
      brojBodg++;
    } else if (document.querySelector('#praktican').checked) {
      brojCodg++;
    } else if (document.querySelector('#idealan').checked) {
      brojDodg++;
    }
    // Pitanje 2
    if (document.querySelector('#oprezna').checked) {
      brojAodg++;
    } else if (document.querySelector('#pretjecanje').checked) {
      brojBodg++;
    } else if (document.querySelector('#snalazljiva').checked) {
      brojCodg++;
    } else if (document.querySelector('#opustena').checked) {
      brojDodg++;
    }
    // Pitanje 3
    if (document.querySelector('#prakticnost').checked) {
      brojAodg++;
    } else if (document.querySelector('#inovativnost').checked) {
      brojBodg++;
    } else if (document.querySelector('#jednostavnost').checked) {
      brojCodg++;
    } else if (document.querySelector('#snaga').checked) {
      brojDodg++;
    }
    // Pitanje 4
    if (document.querySelector('#uvelike').checked) {
      brojAodg++;
    } else if (document.querySelector('#sportski_duh').checked) {
      brojBodg++;
    } else if (document.querySelector('#svrsishodan').checked) {
      brojCodg++;
    } else if (document.querySelector('#casual').checked) {
      brojDodg++;
    }
    // Pitanje 5
    if (document.querySelector('#povezanost').checked) {
      brojAodg++;
    } else if (document.querySelector('#sportski_tim').checked) {
      brojBodg++;
    } else if (document.querySelector('#poslovna_veza').checked) {
      brojCodg++;
    } else if (document.querySelector('#dobroizlo').checked) {
      brojDodg++;
    }
    
    if (brojAodg > najviseOdg) {
      najviseOdg = brojAodg;
      izbor = 'brojAodg';
    }
    
    if (brojBodg > najviseOdg) {
      najviseOdg = brojBodg;
      izbor = 'brojBodg';
    }
    
    if (brojCodg > najviseOdg) {
      najviseOdg = brojCodg;
      izbor = 'brojCodg';
    }
    
    if (brojDodg > najviseOdg) {
      najviseOdg = brojDodg;
      izbor = 'brojDodg';
    } 
  
    if (izbor == 'nijedan') {
      document.querySelector('.error__message').classList.remove('is-hidden');
    } else {
      switch (izbor) {
        case 'brojAodg':
          window.open("http://localhost:8848/odgovorA.html","_self")
          break;
        case 'brojBodg':
          window.open("http://localhost:8848/odgovorB.html","_self")
          break;
        case 'brojCodg':
          window.open("http://localhost:8848/odgovorC.html","_self")
          break;
        case 'brojDodg':
          window.open("http://localhost:8848/odgovorD.html","_self")
          break;
      
        default:
          break;
      }
      // console.log(brojAodg, brojBodg, brojCodg, brojDodg, najviseOdg, izbor);
    }
  });
}
