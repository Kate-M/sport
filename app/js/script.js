'use strict'

$('.navbar-top-button').on('click', function () {
    $('.page-wrapper').toggleClass('open');
    $(this).toggleClass('open-menu');
});
$('.navbar-top-button').on('click', function () {
    $('.page-wrapper').toggleClass('open');
    $(this).toggleClass('open-menu');
});
var tabList = $('.tab-list');
var tabInput = $('.tab-input');
var tabLabel = $('.partition-name-tab');

setActiveLabel();
tabList.map( function(index,el){
    el.addEventListener("click", setActiveLabel, false)
})
function setActiveLabel() {
    var checkedInput = tabInput.filter( function(index,el){
        return el.checked;
    })
    var inputFor = checkedInput.map( function(index,el){
        var activeTab = $(this).attr("id");
        var checkedLabel = tabLabel.map( function(index,el){
            if(this.htmlFor == activeTab) {
                $(this).addClass('active');
            }
            else {
                $(this).removeClass('active')
            }
        })
    })
}
