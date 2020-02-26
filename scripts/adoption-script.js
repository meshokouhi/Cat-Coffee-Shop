const back_to_top_btn=document.getElementById("back-to-top-button");


window.onscroll=function(){
  if(window.pageYOffset>100){
      back_to_top_btn.classList.add("show");
  }else{
    back_to_top_btn.classList.remove("show");
  }
}
back_to_top_btn.addEventListener('click',scrollToTop);

function scrollToTop(){
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}


// Donation form

const $donateBtn = $('.donate-btn');
$donateBtn.click(function(){
	
	const $btn = $(this);
	const $donationFrom = $(this).next();
	
	if($donationFrom.is(':visible')){
		$btn.text('Donate');	
	}else{
		$btn.text('Hide');
	};
	
	$donationFrom.slideToggle(500);
	$btn.parent().toggleClass('highlight');
		
});
