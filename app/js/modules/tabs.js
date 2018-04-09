var labelsTabs = $('label.partition-name-tab').toArray();
var inputsTabs = $('.tab-input').toArray();

inputsTabs.forEach(function (el) {
    el.addEventListener("change", changeActiveTab, false);
})

function changeActiveTab(e) {
    labelsTabs.forEach(function (el) {
        if (!el.control.checked) {
            el.classList.remove('active');
        }
    })
    var labelFor = e.srcElement.attributes["id"].value;
    e.srcElement.labels[0].classList.add('active');
}