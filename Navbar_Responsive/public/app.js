const navBtn = document.getElementById('btn-nav');
const navMenu = document.getElementById('menu-nav');
const btnAction = document.getElementById('btn-action');
const navAchor = document.querySelectorAll('.nav-item');

function changeBtnStyle(button, classNames, duration){
    button.classList.add('focus:ring-4');
    button.classList.add('focus:ring-gray-600');
    button.classList.add('bg-gray-800');

    setTimeout(() =>{
        button.classList.remove('focus:ring-4');
        button.classList.remove('focus:ring-gray-600');
        button.classList.remove('bg-gray-800');
    }, 1000);
}

btnAction.addEventListener('click', ()=>{
    changeBtnStyle(btnAction, ['focus:ring-4', 'focus:ring-gray-600','bg-gray-800'], 1000)
});

navBtn.addEventListener('click', ()=> {

    changeBtnStyle(navBtn, ['focus:ring-4', 'focus:ring-gray-600','bg-gray-800'], 1000);

    if(navMenu.classList.contains('hidden')){
        navMenu.classList.remove('hidden');
        navMenu.classList.add('flex');
    }else{
        navMenu.classList.add('hidden');
        navMenu.classList.remove('flex');
    }
 
    
});

navAchor.forEach((link) => {
    link.addEventListener('click', ()=>{
        navMenu.classList.remove('flex');
        navMenu.classList.add('hidden');
    });
})

