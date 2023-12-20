$(document).ready(function(){
  $('.n-button').click(function () {
    $('.n-button').toggleClass('change');
  });
});

$(window).scroll(function(){
  let position = $(this).scrollTop();
  if(position >= 200 ){
    $('.main-nav').addClass('custom-navbar');
  } else {
    $('.main-nav').removeClass('custom-navbar');
  }
});

$(window).scroll(function(){
  let position = $(this).scrollTop();
  if(position >= 700 ){
    $('.a-txt').addClass('fr')
    $('.a-img').addClass('fl')
  } else {
    $('.a-txt').removeClass('fr')
    $('.a-img').removeClass('fl')
  }
});

$('.gli').click(function(){
    let value = $(this).attr('data-filter');
    $(this).addClass('active-item').siblings().removeClass('active-item')

    if(value === 'all'){
      $('.filter').show(300)
    }else{
      $('.filter').not('.' + value).hide(300);
      $('.filter').filter('.' + value).show(300);
    }
})

$(window).scroll(function(){
  let position = $(this).scrollTop();
  if(position >= 5100 ){
    $('.card1').addClass('rc')
    $('.card2').addClass('cc')
    $('.card3').addClass('lc')
  } else {
    $('.card1').removeClass('rc')
    $('.card2').removeClass('cc')
    $('.card3').removeClass('lc')
  }
});

