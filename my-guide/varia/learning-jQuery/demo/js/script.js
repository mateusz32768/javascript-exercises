$(function () {
  $('a').click(function (e) {
    alert('Dzięki za odwiedziny mojej strony');
    $('a').addClass('test');
    e.preventDefault();
  });

  $('button').click(function (e) {
    $('a').removeClass('test');
    $('button.hiden').show('slow');
  });

  $('button.change').click(function (e) {
    $('p').addClass('paragraph');
  });

  $('button.hiden').click(function (e) {
    $('#container').hide('slow');
  });

  $('button.show').click(function (e) {
    $('#container').show('slow');
  });

  $('button.insert').click(function (e) {
    $('#container').html('<div>Baner Baner Baner</div>');
    $('#container div').addClass('container');
  });
});
