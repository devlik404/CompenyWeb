

// sidenav

const nav =document.querySelectorAll('.sidenav');
M.Sidenav.init(nav);

// slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider,{
  indicators:false,
  height :500,
  transition:600,
  interval:3000,
});
// paralax
const client = document.querySelectorAll('.parallax');
M.Parallax.init(client);

// portfolio
const material =document.querySelectorAll('.materialboxed');
M.Materialbox.init(material,{
  inDuration:100
});

// scrollspy
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
  scrollOffset :50
});
// carousel
const carousel = document.querySelectorAll('.carousel');
M.Carousel.init(carousel,{
  duration:100,
  Dist:-500
});

// send
$(document).ready(function(){
  $('.btn ').click(function(){
   $('.btn .send').addClass('push');
   
});
});




// // parrlaxscroll
// $(window).scroll(function(){
// const wScroll = $(this).scrollTop();

// if (wScroll > $('section').offset().top-300){
//   $('.parallax-container .cards').each(function(i){
//      setTimeout(function(){
      
//         $('.parallax-container .cards').eq(i).addClass ('tumb');
//      },500 * (i+1));
//   });
 
// }

// });