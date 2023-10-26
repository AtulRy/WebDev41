$('.body').hide();
$(window).on({
    load: function () {
        $('.pre').hide();
        $('.body').show();

    }
})