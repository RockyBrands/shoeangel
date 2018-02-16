$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');

  $({ countNum: $this.text()}).animate({
    countNum: countTo

  },

  {

    duration: 2000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });

});

$(document).ready(function() {
	$('.counter').addClass("prefix");
});

// Hamburger Menu //

(function () {
$('.hamburger-menu').on('click', function() {
	$('.bar').toggleClass('animate');
})
})();

$('.mobile-menu').hide();

(function (){
	$('.hamburger-menu').on('click', function(){
		$('.mobile-menu').slideToggle(300);
	})
})();

(function () {
$('.mobile-menu ul li a').on('click', function() {
	$('.mobile-menu').slideToggle(300);
	$('.bar').toggleClass('animate');
})
})();
