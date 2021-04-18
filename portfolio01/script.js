//mobile menuの表示
// const menu = document.querySelector('#mobile-menu');
// const menuLinks = document.querySelector('.navbar__menu');
// const navLogo = document.querySelector('#navbar__logo');
// const body = document.querySelector('body');

// const mobileMenu = () => {
//   menu.classList.toggle('is-active');
//   menuLinks.classList.toggle('active');
//   body.classList.toggle('active');
// }

// menu.addEventListener('click', mobileMenu);


// modalの表示
$('.modal').hide();

$('#modal01').click(() => {
  $('.modal01-content').fadeIn();
  $('.works-modal').addClass('active');
})

$('#modal02').click(() => {
  $('.modal02-content').fadeIn();
  $('.works-modal').addClass('active');
})

$('#modal03').click(() => {
  $('.modal03-content').fadeIn();
  $('.works-modal').addClass('active');
})

$('.close-modal').click(() => {
  $('.modal').hide();
  $('.works-modal').removeClass('active');
})


// ページ内リンク
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});