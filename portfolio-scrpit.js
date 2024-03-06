function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

function darkmode(){
    const darkMode = document.getElementById('darkMoede')
    const body = document.body ;
    if (darkMode.checked){
        body.classList.add('dark-mode');
    }
    else{
        body.classList.remove('dark-mode');
    }
}