const slide = document.querySelectorAll('.slide')

for (const slides of slide) {
    slides.addEventListener('click', () => {
     clearActiveClasess()


     slides.classList.add('active')
    })
} 

function clearActiveClasess() {
    slide.forEach((slide) => {
        slide.classList.remove('active')
    })
}



