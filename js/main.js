(() => {
console.log('stuff fired');

//
// $(".ham").click(function(){
// 	$(this).toggleClass("active");
// });

var hamNav = document.querySelector('.ham');
var hideNav = document.querySelector('.hiddenNav');

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
}

hamNav.addEventListener('click', toggleNav, false);










})();
