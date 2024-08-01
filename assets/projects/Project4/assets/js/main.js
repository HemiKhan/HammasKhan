$(document).ready(function () {

	/*----------------------------------------
		Isotope Masonry Start
	------------------------------------------*/
	function isotopeMasonry() {
		$(".isotope-gutter").isotope({
			itemSelector: '[class^="col-"]',
			percentPosition: true
		});
		$(".isotope-no-gutter").isotope({
			itemSelector: '[class^="col-"]',
			percentPosition: true,
			masonry: {
				columnWidth: 1
			}
		});

		$(".filter a").on("click", function () {
			$(".filter a").removeClass("active");
			$(this).addClass("active");
			// portfolio fiter
			var selector = $(this).attr("data-filter");
			$(".isotope-gutter").isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: "linear",
					queue: false
				}
			});
			return false;
		});
	}
	/*----------------------------------------
			Isotope Masonry End
		------------------------------------------*/

	/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
		Preview Pannel Start
	-=-=-=-=-=-=-=-=-=--=-=-=-=-=-*/
	$(".switcher-trigger").on("click", function () {
		$(".preview-wrapper").toggleClass("extend");
		return false;
	});

	$(".btnToggle").click(function () {
		$("body").toggleClass("dark");
	});

	$(".btnLight").click(function () {
		$("body").removeClass("dark");
	});

	$(".btnDark").click(function () {
		$("body").addClass("dark");
	});
	/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
		Preview Pannel End
	-=-=-=-=-=-=-=-=-=--=-=-=-=-=-*/

	/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
		Loader Start
	-=-=-=-=-=-=-=-=-=--=-=-=-=-=-*/
	$(window).on("load", function () {
		$(".preloader").addClass("active");
		isotopeMasonry();
		setTimeout(function () {
			$(".preloader").addClass("done");
		}, 1500);
	});
	/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
			Loader End
		-=-=-=-=-=-=-=-=-=--=-=-=-=-=-*/

		$(window).resize(function () {
			if ($(window).width() < 786) {
				$('body').removeClass('hiddenoverflow');
			}
			else
			{
				$('body').addClass('hiddenoverflow');
			}
		});
		
});





