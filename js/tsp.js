/**
 * Created by Evgeniy on 31.05.2017.
 */
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,//*
        center: true,//*
        rewind: false,

        smartSpeed: 250,
        dragEndSpeed: false,
        fluidSpeed: false,
        autoplaySpeed: 2650,
        autoplay:true,
        autoplayTimeout:8000,
        autoplayHoverPause:true,


        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,

        margin: 84,//*
        stagePadding: 0,

        merge: false,
        mergeFit: true,
        autoWidth: true,//*

        startPosition: 0,
        rtl: false,



        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,

        fallbackEasing: 'swing',

        info: false,

        nestedItemSelector: false,
        itemElement: 'div',
        stageElement: 'div',

        refreshClass: 'owl-refresh',
        loadedClass: 'owl-loaded',
        loadingClass: 'owl-loading',
        rtlClass: 'owl-rtl',
        responsiveClass: 'owl-responsive',
        dragClass: 'owl-drag',
        itemClass: 'owl-item',
        stageClass: 'owl-stage',
        stageOuterClass: 'owl-stage-outer',
        grabClass: 'owl-grab',


        nav: true,
        navText: ['prev', 'next'],
        navSpeed: false,
        navElement: 'div',
        navContainer: '#customNav',
        navContainerClass: 'owl-nav',
        navClass: ['owl-prev', 'owl-next'],
        slideBy: 3,
        dotClass: 'owl-dot',
        dotsClass: 'owl-dots',
        dots: true,
        dotsEach: false,
        dotsData: false,
        dotsSpeed: false,
        dotsContainer: false
    });


    $(document).on('click', '#specialMaster, #getProgram', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top}, 500);
    });


    function showScrollTop() {
        if ($(document).scrollTop() > 500) {
            $('#scrollTop').fadeIn(150).css('display', 'block');
        } else {
            $('#scrollTop').fadeOut(150);
        }
    }


    $('#scrollTop').on('click', function (e) {
        e.preventDefault();
        var scrollTime;
        if ($('body').scrollTop() === 0) {//ff
            scrollTime = $('html').scrollTop() / 7;
            console.log('test1');
        } else {//не  ff
            scrollTime = $('body').scrollTop() / 7;
            console.log('test2');
        }
        $('html,body').animate(
            {'scrollTop': 0}, scrollTime
        );
    });


    var lines = [
        '#headerDots',
        '#expositionDots',
        '#cardLookDots_1',
        '#cardLookDots_2',
        '#cardLookDots_3',
        '#cardLookDots_4',
        '#partnersDots',
        '#partnersDotsBottom',
        '#profitPeopleDots_1',
        '#profitPeopleDots_2',
        '#profitPeopleDots_3',
        '#profitPeopleDotsBottom',
        '#profitYouDots',
        '#profitYouListDots_1',
        '#profitYouListDots_2',
        '#profitYouListDots_3',
        '#cardAdDots'
    ];

    function startAnimation() {//doesn't need
        for (var i = 0; i < lines.length; i++) {
            var element = document.querySelector(lines[i]);

            if (element) {

                var distanceToTop = element.getBoundingClientRect().top;//расстрояние элемента до верха экрана
                var screenHeight = window.innerHeight//высота экрана
                    || document.documentElement.clientHeight
                    || document.body.clientHeight;

                if (document.querySelector(lines[i] + ' animate')) {//если тэг содержит элементы анимации в градиенте
                    var stripes = document.querySelectorAll(lines[i] + ' animate');
                    if (parseFloat(distanceToTop) < (screenHeight * 2 / 4)) {//выполняем запуск, когда элемент выше, чем 3/4 экрана

                        console.log('distanceToTop ', distanceToTop, '   ', screenHeight * 2 / 4, '   ', lines[i]);


                        for (var y = 0; y < stripes.length; y++) {
                            stripes[y].setAttribute('dur', '2s');
                        }


                    } else {

                        for (y = 0; y < stripes.length; y++) {
                            stripes[y].setAttribute('dur', '');
                        }
                    }

                }
            }
        }
    }

    /**
     *
     * @param classOfChecked - класс отслеживаемого элемента. String
     * @param classAnimation - класс, описывающий анимацию, добавляем после прокрутки до высоты срабатывания анимации. String
     * @param reactionHeight - высота срабатывания анимации. По умолчанию 0.1 от высоты экрана. Float
     * @param invisible - если true, то элемент невидим перед началом анимации. При этом элементу ОБЯЗАТЕЛЬНО прописывать инлайном класс invisible. Boolean
     * @param classOfChanged - класс элемента, которому приписывается анимация. Если не указан, то это класс элемента отслеживания (первый параметр). String
     */
    function animateElementsByHeight(classOfChecked, classAnimation, reactionHeight, invisible, classOfChanged) {

        var reactionHeightValue = parseFloat(reactionHeight) || 0.1 ;//height of screen from bottom;
        var invisibleValue = invisible || false;

        function checkHeight(el) {
            var element = document.querySelector('.' + el);
            if (element) {
                var distanceToTop = element.getBoundingClientRect().top;//расстрояние элемента до верха экрана
                var screenHeight = window.innerHeight//высота экрана
                    || document.documentElement.clientHeight
                    || document.body.clientHeight;
            }
            return parseFloat(distanceToTop) < (screenHeight * (1 - reactionHeightValue));
        }

        if ((classOfChanged !== undefined) && (classOfChanged !== '')) {
            var changed = document.querySelector('.' + classOfChanged);
        } else {
            changed = document.querySelector('.' + classOfChecked);
        }

        if (checkHeight(classOfChecked)) {
            changed.classList.add(classAnimation);
            invisibleValue ? changed.classList.remove('invisible') : '';
        }
        // else {
        //     changed.classList.remove(classAnimation);
        //     invisibleValue ? changed.classList.add('invisible') : '';
        // }
    }


    window.addEventListener('scroll', function () {
        showScrollTop();
        // animateElementsByHeight('isometric', 'one-animation', 'isometric__layer-1');
        // animateElementsByHeight('isometric', 'one-animation', 'isometric__layer-2');

        animateElementsByHeight('exposition__animation-1', 'fadeInLeft', '', true);
        animateElementsByHeight('exposition__you', 'fadeInLeft', '', true);

        animateElementsByHeight('steps-card__card', 'fadeInDown', 0.05, true);

        animateElementsByHeight('steps-card__animation-1', 'fadeInDown', 0.06, true);
        animateElementsByHeight('steps-card__animation-2', 'fadeInDown', 0.06, true);
        animateElementsByHeight('steps-card__animation-3', 'fadeInDown', 0.06, true);

        animateElementsByHeight('partners__title', 'fadeInLeft', '', true);
        animateElementsByHeight('partners__partners-all', 'fadeInRight', '', true);

        animateElementsByHeight('profit-people__title', 'fadeInLeft', '', true);
        animateElementsByHeight('profit-list__animation-1', 'fadeInLeft', 0.12, true);
        animateElementsByHeight('profit-list__animation-2', 'fadeInLeft', 0.12, true);
        animateElementsByHeight('profit-list__animation-3', 'fadeInLeft', 0.12, true);

        animateElementsByHeight('profit-people__bg', 'fadeInRight', 0.5, true);

        animateElementsByHeight('profit-you__bg', 'fadeInLeft', 0.5, true);
        animateElementsByHeight('profit-you__animate', 'fadeInRight', 0.5, true);

        animateElementsByHeight('wide-list__item-animation-1', 'fadeInDown', '', true);
        animateElementsByHeight('wide-list__item-animation-2', 'fadeInDown', '', true);
        animateElementsByHeight('wide-list__item-animation-3', 'fadeInDown', '', true);

        animateElementsByHeight('card-ad__top-animation', 'fadeInDown', '', true);


        animateElementsByHeight('card-ad__components', 'fadeInLeft', '', true);
        animateElementsByHeight('card-ad__card-full', 'fadeInRight', '', true);


    });
});


