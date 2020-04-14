$('#tabPro').click(function () {
    if ($('#table-category').show()) {
        $('#table-category').hide()
    }
    $('#table-product').show()
})

$('#tabCat').click(function () {
    if ($('#table-product').show()) {
        $('#table-product').hide()
    }
    $('#table-category').show()
})