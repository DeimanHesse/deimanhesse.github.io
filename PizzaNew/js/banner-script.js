const next = document.getElementById('btn-next'),
	  slides = document.querySelectorAll ('.slide'),
	  dots = document.querySelectorAll('.dot'); 	


let index = 0;
console.log (index);
console.log(slides.length);

const activeSlide = n => {                                              
                                                                              
    console.log (n);                                                  
    for(slide of slides) {
        slide.classList.remove('active');
        }
    slides[n].classList.add('active');                                
} 

const activeDot = n => {                                              
console.log (n);                                                 
for(dot of dots) {
dot.classList.remove('active');                           
}
dots[n].classList.add('active');
}


const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}


const nextSlide = () => {                                 /*создали функцию nextSlide, которую будем вызывать по клику, прикрепляя к переменной кнопки
    next*/
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide (index);
    } else {
        index++;     //при клике вперёд, мы УВЕЛИЧИВАЕМ переменную index
        prepareCurrentSlide (index);

    }
}


dots.forEach ((item, indexDot) => {
    item.addEventListener ('click', () => {
        index = indexDot;
        prepareCurrentSlide (index);
        clearInterval(interval);  //остановка интервала по нажатию кнопки
    })
})

const interval = setInterval(nextSlide, 2500); //счётч


next.addEventListener('click', nextSlide);