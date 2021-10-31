const sunMoonContainer = document.querySelector('.sun-moon');

window.addEventListener('load', (event) => {
    if (localStorage.getItem("theme") === null)
    {
      localStorage.setItem('theme', 'dark')
    }
    else
    {
        if (localStorage.getItem("theme") === "dark")
        {
            console.log('dark');
            document.querySelector('body').classList.toggle('dark');
            document.querySelector('.theme-toggle-button').innerHTML = 'switch to light mode';
            const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'));
            sunMoonContainer.style.setProperty('--rotation', currentRotation + 180);
        }
        else
        {
            console.log('light');
            document.querySelector('.theme-toggle-button').innerHTML = 'switch to dark mode';
        }
    }

});

document.querySelector('.theme-toggle-button').addEventListener('click', function(){

    if (localStorage.getItem("theme") === null)
    {
      localStorage.setItem('theme', 'dark')
    }
    else
    {
        if (localStorage.getItem("theme") === "dark")
        {
            localStorage.setItem('theme', 'light');
            document.querySelector('body').classList.toggle('dark');
            document.querySelector('.theme-toggle-button').innerHTML = 'switch to dark mode';
        }
        else
        {
            localStorage.setItem('theme', 'dark');
            document.querySelector('body').classList.toggle('dark');
            document.querySelector('.theme-toggle-button').innerHTML = 'switch to light mode';
        }
    }

    const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'));
    sunMoonContainer.style.setProperty('--rotation', currentRotation + 180);
});

const cbox = document.querySelectorAll(".link-button");

 for (let i = 0; i < cbox.length; i++) {
     cbox[i].addEventListener("click", function() {
        console.log(this.id+".html");
        location.href = this.id+".html";
     });
 }
