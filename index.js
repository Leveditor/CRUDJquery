$(document).on('click', 'button', function(e){
    e.preventDefault();

    var inputName = $('#name').val();
    var inputEmail = $('#email').val();
    var inputAge = $('#age').val();

    var newTag = $(document.createElement('tr'));
   
    var tdName = $(document.createElement('td')).text(inputName);
    var tdEmail = $(document.createElement('td')).text(inputEmail);
    var tdAge = $(document.createElement('td')).text(inputAge);

    $("#tbody").append(newTag );

    newTag.append(tdName, tdEmail, tdAge);

    $('#name').val('');
    $('#email').val('');
    $('#age').val('');
});
