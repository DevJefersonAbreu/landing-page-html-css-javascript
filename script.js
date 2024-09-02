function animarMenu() {
    const btn = document.getElementById('btn-menu');
    const menuDiv = document.getElementById('menu-mobile');
    btn.classList.toggle('ativar');
    menuDiv.classList.toggle('abrir');
}

document.addEventListener('DOMContentLoaded', function () {
    const mobileLinks = document.querySelectorAll('.menu-mobile a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            animarMenu();
        });
    });
});




let currentIndex = 0;
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;

        function moveSlide(direction) {
            currentIndex = (currentIndex + direction + totalItems) % totalItems;
            const newTransform = -currentIndex * 100;
            document.querySelector('.carousel-inner').style.transform = `translateX(${newTransform}%)`;
        }



function openCloseDiv(element){

    const faqAnswer = element.nextElementSibling;
    const icon = element.querySelector(':scope > .list-item-button-icon');

    if(faqAnswer.classList.contains('list-item-closed')){
        replaceElementClass(faqAnswer, 'list-item-closed', 'list-item-open');
        replaceElementClass(icon, 'icon-closed', 'icon-open');
    }else{
        replaceElementClass(faqAnswer, 'list-item-open', 'list-item-closed');
        replaceElementClass(icon, 'icon-open', 'icon-closed');
    }    

}

function replaceElementClass(element, oldClass, newClass){
    element.classList.remove(oldClass);
    element.classList.add(newClass);
}






function openVideo(videoId) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
}

function toggleAudio(button) {
    const playIcon = button.querySelector('i.fa-solid.fa-play');
    const pauseIcon = button.querySelector('i.fa-solid.fa-pause');
    const audio = button.parentElement.nextElementSibling;

    if (audio.paused) {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline-block';
    } else {
        audio.pause();
        playIcon.style.display = 'inline-block';
        pauseIcon.style.display = 'none';
    }
}











 // Seleciona todos os links do menu
 const links = document.querySelectorAll('nav a');

 // Adiciona evento de clique a cada link
 links.forEach(link => {
     link.addEventListener('click', e => {
         e.preventDefault(); // Previne o comportamento padrão do link
         const href = link.getAttribute('href'); // Obtém o atributo href do link
         const offsetTop = document.querySelector(href).offsetTop; // Obtém a posição top do elemento referenciado
         window.scrollTo({
             top: offsetTop,
             behavior: 'smooth' // Scroll suave
         });
     });
 });









/*slides*/
document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100;
        document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

        document.querySelector('.dot.active').classList.remove('active');
        dots[currentIndex].classList.add('active');
    }

    document.querySelector('.prev').addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    document.querySelector('.next').addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            showSlide(parseInt(e.target.getAttribute('data-slide')));
        });
    });

    // Swipe functionality
    let startX;
    let isSwiping = false;

    document.querySelector('.slider').addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isSwiping = true;
    });

    document.querySelector('.slider').addEventListener('touchmove', (e) => {
        if (!isSwiping) return;

        const diffX = e.touches[0].clientX - startX;
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                showSlide(currentIndex - 1);
            } else {
                showSlide(currentIndex + 1);
            }
            isSwiping = false;
        }
    });

    document.querySelector('.slider').addEventListener('touchend', () => {
        isSwiping = false;
    });
});







