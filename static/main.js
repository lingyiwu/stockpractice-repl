$(function(){
    $('#btnFiveBest').on('click', function() { getFiveBest(); });
});

function getFiveBest() {
    $.ajax({'type': 'GET', 'url': '/fibest/table/'+$('#price').val(),
        beforeSend: function(){
            $('#btnFiveBest > span').removeClass('d-none');
        },
    })
    .done(function(data) {
        var items = [];
        for (let i = 0; i < 5; i++) {
            items.push(`
            <tr>
            <td class="text-success">${data.fibest[i+5]}</td>
            <td class="text-danger">${data.fibest[i]}</td>
            </tr>`);
        }
        $('tbody').html(items.join(''));
    })
    .fail(function(jqXHR) { console.log(jqXHR.status); })
    .always(function(){
        $('#btnFiveBest > span').addClass('d-none');
    });
}
