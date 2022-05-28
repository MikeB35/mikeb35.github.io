$("#kuchyne_link").click(function () {
	$("#arrow_kuchyne").toggleClass("uparrow");
	$("#kuchyne_menu_drawer").slideToggle();
	$("#kuchyne_menu_drawer").css("display", "flex");
	$("#akce_menu_drawer").css("display", "none");
	$("#skrine_menu_drawer").css("display", "none");
	$("#showroomy_menu_drawer").css("display", "none");
	$("#spotrebice_menu_drawer").css("display", "none");
	$("#realizace_menu_drawer").css("display", "none");
	$("#kontakt_menu_drawer").css("display", "none");
	$("#arrow_showroomy").removeClass("uparrow");
	$("#arrow_spotrebice").removeClass("uparrow");
	$("#arrow_akce").removeClass("uparrow");
	$("#arrow_kontakt").removeClass("uparrow");
	$("#arrow_realizace").removeClass("uparrow");
	$(".themodal").toggleClass("themodalon");
});
/*$("#skrine_link").click(function () {
	$("#arrow_skrine").toggleClass("uparrow");
	$("#skrine_menu_drawer").slideToggle();
	$("#skrine_menu_drawer").css("display", "flex");
	$("#akce_menu_drawer").css("display", "none");
	$("#kuchyne_menu_drawer").css("display", "none");
	$("#showroomy_menu_drawer").css("display", "none");
	$("#spotrebice_menu_drawer").css("display", "none");
	$("#realizace_menu_drawer").css("display", "none");
	$("#kontakt_menu_drawer").css("display", "none");
});
*/
$("#showroomy_link").click(function () {
	$("#arrow_showroomy").toggleClass("uparrow");
	$("#showroomy_menu_drawer").slideToggle();
	$("#showroomy_menu_drawer").css("display", "flex");
	$("#akce_menu_drawer").css("display", "none");
	$("#kuchyne_menu_drawer").css("display", "none");
	$("#skrine_menu_drawer").css("display", "none");
	$("#spotrebice_menu_drawer").css("display", "none");
	$("#realizace_menu_drawer").css("display", "none");
	$("#kontakt_menu_drawer").css("display", "none");
	$("#arrow_kuchyne").removeClass("uparrow");
	$("#arrow_spotrebice").removeClass("uparrow");
	$("#arrow_akce").removeClass("uparrow");
	$("#arrow_kontakt").removeClass("uparrow");
	$("#arrow_realizace").removeClass("uparrow");
	$(".themodal").toggleClass("themodalon");
});
$("#spotrebice_link").click(function () {
	$("#arrow_spotrebice").toggleClass("uparrow");
	$("#spotrebice_menu_drawer").slideToggle();
	$("#spotrebice_menu_drawer").css("display", "flex");
	$("#akce_menu_drawer").css("display", "none");
	$("#kuchyne_menu_drawer").css("display", "none");
	$("#showroomy_menu_drawer").css("display", "none");
	$("#skrine_menu_drawer").css("display", "none");
	$("#realizace_menu_drawer").css("display", "none");
	$("#kontakt_menu_drawer").css("display", "none");
	$("#arrow_showroomy").removeClass("uparrow");
	$("#arrow_kuchyne").removeClass("uparrow");
	$("#arrow_akce").removeClass("uparrow");
	$("#arrow_kontakt").removeClass("uparrow");
	$("#arrow_realizace").removeClass("uparrow");
	$(".themodal").toggleClass("themodalon");
});
$("#akce_link").click(function () {
	$("#arrow_akce").toggleClass("uparrow");
	$("#akce_menu_drawer").slideToggle();
	$("#akce_menu_drawer").css("display", "flex");
	$("#skrine_menu_drawer").css("display", "none");
	$("#kuchyne_menu_drawer").css("display", "none");
	$("#showroomy_menu_drawer").css("display", "none");
	$("#spotrebice_menu_drawer").css("display", "none");
	$("#realizace_menu_drawer").css("display", "none");
	$("#kontakt_menu_drawer").css("display", "none");
	$("#arrow_showroomy").removeClass("uparrow");
	$("#arrow_spotrebice").removeClass("uparrow");
	$("#arrow_kuchyne").removeClass("uparrow");
	$("#arrow_kontakt").removeClass("uparrow");
	$("#arrow_realizace").removeClass("uparrow");
	$(".themodal").toggleClass("themodalon");
});
$("#kontakt_link").click(function () {
	$("#arrow_kontakt").toggleClass("uparrow");
	$("#kontakt_menu_drawer").slideToggle();
	$("#kontakt_menu_drawer").css("display", "flex");
	$("#akce_menu_drawer").css("display", "none");
	$("#kuchyne_menu_drawer").css("display", "none");
	$("#showroomy_menu_drawer").css("display", "none");
	$("#spotrebice_menu_drawer").css("display", "none");
	$("#realizace_menu_drawer").css("display", "none");
	$("#arrow_showroomy").removeClass("uparrow");
	$("#arrow_spotrebice").removeClass("uparrow");
	$("#arrow_akce").removeClass("uparrow");
	$("#arrow_kuchyne").removeClass("uparrow");
	$("#arrow_realizace").removeClass("uparrow");
	$(".themodal").toggleClass("themodalon");
});

$("#realizace_link").click(function () {
	$("#arrow_realizace").toggleClass("uparrow");
	$("#realizace_menu_drawer").slideToggle();
	$("#realizace_menu_drawer").css("display", "flex");
	$("#akce_menu_drawer").css("display", "none");
	$("#kuchyne_menu_drawer").css("display", "none");
	$("#showroomy_menu_drawer").css("display", "none");
	$("#spotrebice_menu_drawer").css("display", "none");
	$("#skrine_menu_drawer").css("display", "none");
	$("#kontakt_menu_drawer").css("display", "none");
	$("#arrow_showroomy").removeClass("uparrow");
	$("#arrow_spotrebice").removeClass("uparrow");
	$("#arrow_akce").removeClass("uparrow");
	$("#arrow_kontakt").removeClass("uparrow");
	$("#arrow_kuchyne").removeClass("uparrow");
	$(".themodal").toggleClass("themodalon");
});

$(".openbtn").click(function () {
	$("#mySidepanel").toggleClass("sidepanel_open");
});

$(".closebtn").click(function () {
	$("#mySidepanel").toggleClass("sidepanel_open");
});

var viewportWidth = $(window).width();

$(".header_button").click(function () {
	console.log(viewportWidth);
});

if (viewportWidth <= 600) {
	$(".footer").css("display", "none");
	$(".footer_phone").css("display", "block");
}

if (viewportWidth >= 600) {
	$(".footer").css("display", "flex");
	$(".footer_phone").css("display", "none");
}
if (viewportWidth <= 600) {
	$("#cover_title").html(
		"Zákazník a kvalita naší práce<br> je pro nás na prvním místě"
	);
}

var navbar_width = $(".navbar-nav").css("width");
var navbar_width_int = parseFloat(navbar_width);

var count = (viewportWidth - navbar_width_int) / 2;
console.log(viewportWidth);
console.log(navbar_width);
console.log(count);

$(".navbar-nav").css("left", count + "px");

$("#footer_button_one").click(function () {
	$("#footer_content_one").toggleClass("content_show");
});

$("#footer_button_two").click(function () {
	$("#footer_content_two").toggleClass("content_show");
});
$("#footer_button_three").click(function () {
	$("#footer_content_three").toggleClass("content_show");
});

$(".themodal").click(function () {
	$(".themodal").css("display", "none");

	$("#realizace_menu_drawer").slideUp();
	$("#akce_menu_drawer").slideUp();
	$("#kuchyne_menu_drawer").slideUp();
	$("#showroomy_menu_drawer").slideUp();
	$("#spotrebice_menu_drawer").slideUp();
	$("#skrine_menu_drawer").slideUp();
	$("#kontakt_menu_drawer").slideUp();
	$("#arrow_realizace").removeClass("uparrow");
	$("#arrow_showroomy").removeClass("uparrow");
	$("#arrow_spotrebice").removeClass("uparrow");
	$("#arrow_akce").removeClass("uparrow");
	$("#arrow_kontakt").removeClass("uparrow");
	$("#arrow_kuchyne").removeClass("uparrow");
});

document.addEventListener("DOMContentLoaded", function (event) {
	jQuery(document).ready(function ($) {
		var _SlideshowTransitions = [
			{
				$Duration: 1200,
				x: -0.3,
				$During: { $Left: [0.3, 0.7] },
				$Easing: {
					$Left: $JssorEasing$.$EaseInCubic,
					$Opacity: $JssorEasing$.$EaseLinear,
				},
				$Opacity: 2,
			},
			{
				$Duration: 1200,
				x: 0.3,
				$SlideOut: true,
				$Easing: {
					$Left: $JssorEasing$.$EaseInCubic,
					$Opacity: $JssorEasing$.$EaseLinear,
				},
				$Opacity: 2,
			},
		];
		var options = {
			$AutoPlay: true,
			$AutoPlaySteps: 1,
			$AutoPlayInterval: 4000,
			$PauseOnHover: 1,
			$ArrowKeyNavigation: false,
			$SlideDuration: 500,
			$MinDragOffsetToSlide: 20,
			$SlideSpacing: 0,
			$DisplayPieces: 1,
			$ParkingPosition: 0,
			$UISearchMode: 1,
			$PlayOrientation: 1,
			$DragOrientation: 3,

			$SlideshowOptions: {
				$Class: $JssorSlideshowRunner$,
				$Transitions: _SlideshowTransitions,
				$TransitionsOrder: 1,
				$ShowLink: true,
			},
			$ArrowNavigatorOptions: {
				$Class: $JssorArrowNavigator$,
				$ChanceToShow: 2,
				$Steps: 1,
			},
		};
		var jssor_sliderb = new $JssorSlider$("my_slider1", options);
		function ScaleSlider() {
			var parentWidth = jssor_sliderb.$Elmt.parentNode.clientWidth;

			if (viewportWidth >= 600) {
				if (parentWidth) jssor_sliderb.$ScaleWidth(Math.min(parentWidth, 1200));
				else window.setTimeout(ScaleSlider, 30);
			} else {
				if (parentWidth) jssor_sliderb.$ScaleWidth(Math.min(parentWidth, 400));
				else window.setTimeout(ScaleSlider, 30);
			}
			ScaleSlider();
			if (
				!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)
			) {
				$(window).bind("resize", ScaleSlider);
			}
		}
	});
});

document.addEventListener("DOMContentLoaded", function (event) {
	jQuery(document).ready(function ($) {
		var _SlideshowTransitions = [
			{
				$Duration: 1200,
				x: -0.3,
				$During: { $Left: [0.3, 0.7] },
				$Easing: {
					$Left: $JssorEasing$.$EaseInCubic,
					$Opacity: $JssorEasing$.$EaseLinear,
				},
				$Opacity: 2,
			},
			{
				$Duration: 1200,
				x: 0.3,
				$SlideOut: true,
				$Easing: {
					$Left: $JssorEasing$.$EaseInCubic,
					$Opacity: $JssorEasing$.$EaseLinear,
				},
				$Opacity: 2,
			},
		];

		var options = {
			$AutoPlay: true,
			$AutoPlaySteps: 1,
			$AutoPlayInterval: 8000,
			$PauseOnHover: 1,
			$ArrowKeyNavigation: false,
			$SlideDuration: 500,
			$MinDragOffsetToSlide: 20,
			$SlideSpacing: 42,
			$SlideWidth: 200,

			$DisplayPieces: 5,
			$Cols: 5,
			$FillMode: 2,

			$ParkingPosition: 0,
			$UISearchMode: 1,
			$PlayOrientation: 1,
			$DragOrientation: 3,

			$SlideshowOptions: {
				$Class: $JssorSlideshowRunner$,
				$Transitions: _SlideshowTransitions,
				$TransitionsOrder: 1,
				$ShowLink: true,
			},
			$ArrowNavigatorOptions: {
				$Class: $JssorArrowNavigator$,
				$ChanceToShow: 2,
				$Steps: 1,
			},
		};

		var jssor_sliderb = new $JssorSlider$("my_slider", options);
		function ScaleSlider() {
			var parentWidth = jssor_sliderb.$Elmt.parentNode.clientWidth;
			if (parentWidth) jssor_sliderb.$ScaleWidth(Math.min(parentWidth, 1450));
			else window.setTimeout(ScaleSlider, 30);
		}
		ScaleSlider();
		if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
			$(window).bind("resize", ScaleSlider);
		}
	});
});
if (viewportWidth <= 600) {
	$(".my_slider1_slides").css("width", "400px");
	$(".my_slider1_slides").css("height", "300px");
}

if (viewportWidth <= 600) {
	$("#my_slider").css("display", "none");
}
