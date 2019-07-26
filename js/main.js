(() => {
console.log('stuff fired');

//
// $(".ham").click(function(){
// 	$(this).toggleClass("active");
// });

var hamNav = document.querySelector('.ham');
var hideNav = document.querySelector('.hiddenNav');
var scDown = document.querySelector('#scrollD');
var hotbod = document.querySelector("#headerInt");
var togOn = document.querySelector('#tCon');

function toggleNav(){
  hamNav.classList.toggle('active');
  if(hamNav.classList.contains('active')){
    hideNav.classList.add('navMap');
    hideNav.classList.remove('hiddenNav');
  }else{
    hideNav.classList.remove('navMap');
    hideNav.classList.add('hiddenNav');
  }
  console.log(hamNav);
  console.log(scDown);
  console.log(togOn);
}

hamNav.addEventListener('click', toggleNav, false);

scDown.addEventListener('click', function () {
  console.log(scDown);
  window.scroll({
    top: 900,
    behavior: 'smooth'
  });

});

window.onload = function() {
  hotbod.classList.add('animate');
};











})();
