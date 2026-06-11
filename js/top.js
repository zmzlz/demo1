jQuery(document).ready(function($) {

	$(window).on("load scroll resize", function () {

		var st = $(window).scrollTop();
		var wh = $(window).height();

		$('.scroll-point').each(function (i) {
			var tg = $(this).offset().top;
			var id = $(this).attr('id');

			if (st > tg  - wh + (wh / 1.7)) {
				$('.nav-link').removeClass('current');
				var link = $(".nav-link[href *= " + id + "]");
				link.addClass('current');
			}
		});

	});

	// fade-in-up
	$('.fade-in-up').each(function(index, element) {
		gsap.from(element, {
			y: 30,
			opacity: 0,
			duration: 0.6,
			scrollTrigger: {
				trigger: element,
				start: 'top 80%',
				toggleActions: 'play none none reverse',
				// markers: true,
			},
		});
	});

	// illust
	$('.illust-fill').each(function(index, element) {
		gsap.from(element, {
			opacity: 0,
			duration: 0.8,
			delay: 0.5,
			ease: "power2.inOut",
			scrollTrigger: {
				trigger: element,
				start: 'top 50%',
				toggleActions: 'play none none reverse',
				// markers: true,
			},
		});
	});
	$('.illust-front').each(function(index, element) {
		gsap.fromTo(element, {
			y: 0,
		}, {
			y: -30,
			scrollTrigger: {
				trigger: element,
				scrub: true,
				//markers: true,
			},
		});
	});
	$('.illust-back').each(function(index, element) {
		gsap.fromTo(element, {
			y: -30,
		}, {
			y: 0,
			scrollTrigger: {
				trigger: element,
				scrub: true,
				// markers: true,
			},
		});
	});

});