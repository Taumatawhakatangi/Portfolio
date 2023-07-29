$(function () {

    // Кнопка где указано количество страниц

    // $('.portfolio__btn').click(function() {
    //   $(this).toggleClass('goAlready'); 
    // })
    // $('.portfolio__count_item1').click(function() {
    //   $('.portfolio__btn_item1').toggleClass('goAlready'); 
    // })
    // $('.portfolio__count_item2').click(function() {
    //   $('.portfolio__btn_item2').toggleClass('goAlready'); 
    // })
    // $('.portfolio__count_item3').click(function() {
    //   $('.portfolio__btn_item3').toggleClass('goAlready'); 
    // })
    // $('.portfolio__count_item4').click(function() {
    //   $('.portfolio__btn_item4').toggleClass('goAlready'); 
    // })
    // $('.portfolio__count_item5').click(function() {
    //   $('.portfolio__btn_item5').toggleClass('goAlready'); 
    // })
    // $('.portfolio__count_item6').click(function() {
    //   $('.portfolio__btn_item6').toggleClass('goAlready'); 
    // })
    // $('.portfolio__count_item7').click(function() {
    //   $('.portfolio__btn_item7').toggleClass('goAlready'); 
    // })
    // $('.portfolio__count_item8').click(function() {
    //   $('.portfolio__btn_item8').toggleClass('goAlready'); 
    // })
    // $('.portfolio__count_item9').click(function() {
    //   $('.portfolio__btn_item9').toggleClass('goAlready'); 
    // })
    
    // Табы 
    
    $('.portfolio__tab').click( function () {
        const tabBtn = $(this).attr('data-tab');
        const tabContent = $('.portfolio__content[data-tab="'+ tabBtn +'"]');

        $('.portfolio__tab').removeClass(['bg-blue-700','text-slate-50']);
        $(this).addClass(['bg-blue-700','text-slate-50']);

        $('.portfolio__content').addClass('hidden');
        tabContent.removeClass('hidden');
    })

    // Tабы2

    $('.portfolio__tab_item2').click( function () {
        const tabBtn = $(this).attr('data-tab');
        const tabContent = $('.portfolio__content_item2[data-tab="'+ tabBtn +'"]');

        $('.portfolio__tab_item2').removeClass(['bg-blue-700','text-slate-50']);
        $(this).addClass(['bg-blue-700','text-slate-50']);

        $('.portfolio__content_item2').addClass('hidden');
        tabContent.removeClass('hidden');
    })

    // Tабы3

    $('.portfolio__tab_item3').click( function () {
        const tabBtn = $(this).attr('data-tab');
        const tabContent = $('.portfolio__content_item3[data-tab="'+ tabBtn +'"]');

        $('.portfolio__tab_item3').removeClass(['bg-blue-700','text-slate-50']);
        $(this).addClass(['bg-blue-700','text-slate-50']);

        $('.portfolio__content_item3').addClass('hidden');
        tabContent.removeClass('hidden');
    })

    // Tабы4

    $('.portfolio__tab_item4').click( function () {
        const tabBtn = $(this).attr('data-tab');
        const tabContent = $('.portfolio__content_item4[data-tab="'+ tabBtn +'"]');

        $('.portfolio__tab_item4').removeClass(['bg-blue-700','text-slate-50']);
        $(this).addClass(['bg-blue-700','text-slate-50']);

        $('.portfolio__content_item4').addClass('hidden');
        tabContent.removeClass('hidden');
    })

    // Tабы5

    $('.portfolio__tab_item5').click( function () {
        const tabBtn = $(this).attr('data-tab');
        const tabContent = $('.portfolio__content_item5[data-tab="'+ tabBtn +'"]');

        $('.portfolio__tab_item5').removeClass(['bg-blue-700','text-slate-50']);
        $(this).addClass(['bg-blue-700','text-slate-50']);

        $('.portfolio__content_item5').addClass('hidden');
        tabContent.removeClass('hidden');
    })

    // Tабы6

    $('.portfolio__tab_item6').click( function () {
        const tabBtn = $(this).attr('data-tab');
        const tabContent = $('.portfolio__content_item6[data-tab="'+ tabBtn +'"]');

        $('.portfolio__tab_item6').removeClass(['bg-blue-700','text-slate-50']);
        $(this).addClass(['bg-blue-700','text-slate-50']);

        $('.portfolio__content_item6').addClass('hidden');
        tabContent.removeClass('hidden');
    })

    // Tабы7

    $('.portfolio__tab_item7').click( function () {
        const tabBtn = $(this).attr('data-tab');
        const tabContent = $('.portfolio__content_item7[data-tab="'+ tabBtn +'"]');

        $('.portfolio__tab_item7').removeClass(['bg-blue-700','text-slate-50']);
        $(this).addClass(['bg-blue-700','text-slate-50']);

        $('.portfolio__content_item7').addClass('hidden');
        tabContent.removeClass('hidden');
    })

    // Tабы8

    $('.portfolio__tab_item8').click( function () {
        const tabBtn = $(this).attr('data-tab');
        const tabContent = $('.portfolio__content_item8[data-tab="'+ tabBtn +'"]');

        $('.portfolio__tab_item8').removeClass(['bg-blue-700','text-slate-50']);
        $(this).addClass(['bg-blue-700','text-slate-50']);

        $('.portfolio__content_item8').addClass('hidden');
        tabContent.removeClass('hidden');
    })

    // Tабы9

    $('.portfolio__tab_item9').click( function () {
        const tabBtn = $(this).attr('data-tab');
        const tabContent = $('.portfolio__content_item9[data-tab="'+ tabBtn +'"]');

        $('.portfolio__tab_item9').removeClass(['bg-blue-700','text-slate-50']);
        $(this).addClass(['bg-blue-700','text-slate-50']);

        $('.portfolio__content_item9').addClass('hidden');
        tabContent.removeClass('hidden');
    })

    // Cпойлеры

    $('.spoiler__tab').click( function() {
        $('.spoiler__arrow').toggleClass(['-rotate-45','top-[21px]']);
        $(this).toggleClass('active').next().slideToggle(500);
    })

    // Item2

    $('.spoiler__tab_item2').click( function() {
        $('.spoiler__arrow_item2').toggleClass(['-rotate-45','top-[21px]']);
        $(this).toggleClass('active').next().slideToggle(500);
    })

    // Item3

    $('.spoiler__tab_item3').click( function() {
        $('.spoiler__arrow_item3').toggleClass(['-rotate-45','top-[21px]']);
        $(this).toggleClass('active').next().slideToggle(500);
    })

    // Item4

    $('.spoiler__tab_item4').click( function() {
        $('.spoiler__arrow_item4').toggleClass(['-rotate-45','top-[21px]']);
        $(this).toggleClass('active').next().slideToggle(500);
    })

    // Item5

    $('.spoiler__tab_item5').click( function() {
        $('.spoiler__arrow_item5').toggleClass(['-rotate-45','top-[21px]']);
        $(this).toggleClass('active').next().slideToggle(500);
    })

    // Item6

    $('.spoiler__tab_item6').click( function() {
        $('.spoiler__arrow_item6').toggleClass(['-rotate-45','top-[21px]']);
        $(this).toggleClass('active').next().slideToggle(500);
    })

    // Item7

    $('.spoiler__tab_item7').click( function() {
        $('.spoiler__arrow_item7').toggleClass(['-rotate-45','top-[21px]']);
        $(this).toggleClass('active').next().slideToggle(500);
    })

    // Item8

    $('.spoiler__tab_item8').click( function() {
        $('.spoiler__arrow_item8').toggleClass(['-rotate-45','top-[21px]']);
        $(this).toggleClass('active').next().slideToggle(500);
    })

    // Item9

    $('.spoiler__tab_item9').click( function() {
        $('.spoiler__arrow_item9').toggleClass(['-rotate-45','top-[21px]']);
        $(this).toggleClass('active').next().slideToggle(500);
    })


}); // end JQuery

