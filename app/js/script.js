$(document).ready(function () {

    $('select').each(function () {
        var that = $(this);
        var numberOfOptions = $(this).children('option').length;

        that.addClass('select-hidden');
        that.wrap('<div class="select"></div>');
        that.after('<div class="select-styled"></div>');

        var styledSelect = that.next('div.select-styled');
        styledSelect.text(that.children('option').eq(0).text());

        var list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter(styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                'class': 'select-item',
                text: that.children('option').eq(i).text(),
                rel: that.children('option').eq(i).val()
            }).appendTo(list);
        }

        var listItems = list.children('li');

        styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        listItems.click(function (e) {
            e.stopPropagation();
            styledSelect.text($(this).text()).removeClass('active');
            that.val($(this).attr('rel'));
            list.hide();
        });

        $(document).click(function () {
            styledSelect.removeClass('active');
            list.hide();
        });
    });
});