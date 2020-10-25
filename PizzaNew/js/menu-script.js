(function() {

    var doc = document,
        index = 1;

    var Slider = function() {
        this.box = doc.querySelector('.menu__slider1');
        this.slidesBox = doc.querySelector('.menu__carousel');
        this.slides = doc.querySelectorAll('.slider__item');
        this.btns = doc.querySelectorAll('.btn__menu');
        this.size = this.box.clientWidth;

        this.position();
        this.carousel();

        

    };

    Slider.prototype.position = function() {
        var size = this.size;
        this.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
    };

    Slider.prototype.carousel = function() {
        var i, max = this.btns.length,
            that = this;

        for (i = 0; i < max; i += 1) {
            that.btns[i].addEventListener('click', Slider[that.btns[i].id].bind(null, that));
        }
    }

    Slider.prev1 = function(box) {
        box.slidesBox.style.transition = "transform .6s ease-in-out";
        var size = box.size;
        index <= 0 ? false : index--;
        box.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
        box.jump();
        console.log (index);
    };

    Slider.next1 = function(box) {
        box.slidesBox.style.transition = "transform .6s ease-in-out";
        var max = box.slides.length;
        var size = box.size;
        index >= max - 1 ? false : index++;
        box.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
        box.jump();
        console.log (index);
    };

    Slider.prototype.jump = function() {
        var that = this;
        var size = this.size;
        this.slidesBox.addEventListener('transitionend', function() {
            that.slides[index].id === "firstClone" ? index = 1 : index;
            that.slides[index].id === "lastClone" ? index = 4 : index;
            that.slidesBox.style.transition = "none";
            that.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
        });
    }


    new Slider();

})();