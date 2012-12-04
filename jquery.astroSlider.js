/* ===========================================================
 * AstroSlide v1.2
 * =========================================================== */

(function($) {
	$.fn.extend({

		astroSlide: function(options) {

			//Settings list and the default values
			var defaults = {
				duration: 500,
				autoScroll: true,
				autoScrollTimer: 8000,
				clickAdvance: false
			};

			options = $.extend(defaults, options);

			var scope = $(this);
			var complete = true;
			var ready = false;

			var init = function(options) {
					
					if(!$('.slide.active', scope).length) {
						$('.slide:first', scope).addClass('active');
					}

					var active = $('.slide.active', scope);

					$('.fixed', scope).fadeIn();

					slideIn(options, active, function(){
						ready = false;
						//load secondary slides
						$('.slide', scope).each(function(){
							$(this).css('background-image', 'url('+$(this).attr('data-image')+')');
							$('img', this).each(function(){
								$(this).attr('src', $(this).attr('data-image'));
							});
							ready = true;
						});
					});
				};

			var coordinate = function(element) {
					var coords = element.position();

					if(typeof(element.attr('data-position-x')) === 'undefined') {
						element.attr('data-position-x', coords.left);
					}

					if(typeof(element.attr('data-position-y')) === 'undefined') {
						element.attr('data-position-y', coords.top);
					}
				};

			var slideOut = function(options, current, callback) {
					var objects = $('.parallax', current);
					var timeout = options.duration;

					objects.each(function() {

						var element = $(this);
						var velocity = parseFloat(element.attr('data-velocity'));

						var distancex = 0;
						if(typeof(element.attr('data-distance-x')) !== 'undefined') {
							distancex = parseInt(element.attr('data-distance-x'), 10);
						}

						var distancey = 0;
						if(typeof(element.attr('data-distance-y')) !== 'undefined') {
							distancey = parseInt(element.attr('data-distance-y'), 10);
						}

						if(typeof(element.attr('data-revert')) !== 'undefined') {
							if(element.attr('data-revert') === 'false'){
								distancex = distancex * -1;
								distancey = distancey * -1;
							}
						}

						var positionx = parseInt(element.attr('data-position-x'), 10);
						var positiony = parseInt(element.attr('data-position-y'), 10);

						var vector = options.duration * velocity;

						if(vector > timeout) {
							timeout = vector;
						}

						element.animate({
							left: distancex + positionx + 'px',
							top: distancey + positiony + 'px',
							opacity: 0
						}, vector);

					});

					// fire callback if one exists
					if(typeof(callback) !== 'undefined') {
						setTimeout(function() {
							callback();
						}, timeout);
					}
				};

			var slideIn = function(options, next, callback) {

				var objects = $('.parallax', next);
				var timeout = options.duration;

				objects.each(function() {

					coordinate($(this));

					var element = $(this);
					var velocity = parseFloat(element.attr('data-velocity'));
					var distancex = parseInt(element.attr('data-distance-x'), 10);
					var distancey = 0;

					if(typeof(element.attr('data-distance-y')) !== 'undefined') {
						distancey = parseInt(element.attr('data-distance-y'), 10);
					}

					var positionx = parseInt(element.attr('data-position-x'), 10);
					var positiony = parseInt(element.attr('data-position-y'), 10);

					var vector = options.duration * velocity;

					if(vector > timeout) {
						timeout = vector;
					}

					element.css({
						'left': (distancex + positionx) + 'px',
						'top': (distancey + positiony) + 'px'
					});

					element.animate({
						left: positionx + 'px',
						top: positiony + 'px',
						opacity: 1
					}, vector);

					// fire callback if one exists
					if(typeof(callback) !== 'undefined') {
						setTimeout(function() {
							callback();
						}, timeout);
					}
				});
			};


			var changeSlide = function(options, next) {

				//ensure last change is complete
				if(complete === true && ready === true) {
					complete = false;
					// Set Change Variables
					var current = $('.active', scope);

					// Check if we have a manual next variable, set it if we don't
					if(typeof(next) === 'undefined') {
						if(current.is(':last-child')) {
							next = $('.slide:first', scope);
						} else {
							next = current.next('.slide');
						}
					}

					next.addClass('next-slide');
					slideOut(options, current, function() {
						next.fadeIn(options.duration, function() {
							slideIn(options, next, function() {
								next.removeClass('next-slide');
								next.addClass('active');
								current.removeClass('active');
								current.fadeOut(10, function() {
									complete = true;
								});
							});
						});
					});
				}
			};

			return this.each(function() {
				var o = options;

				//initialize
				$(window).load(function(){

					//set ready variable
					ready = true;

					//preload
					var first_slide = $('.slide:first', scope);
					var first_slide_images = $('.slide:first img', scope);
					first_slide.css('background-image', 'url('+first_slide.attr('data-image')+')');
					first_slide_images.each(function(){
						if(typeof $(this).attr('data-image') !== 'undefined')
							$(this).attr('src', $(this).attr('data-image'));
					});

					setTimeout(function(){
						init(o);
					}, 400);
				});

				//disable animation on link clicks
				$('a', $(this)).click(function(e) {
					e.stopPropagation();
				});

				//if click advance is turned up set up the hook
				if(o.clickAdvance) {
					$(this).click(function() {
						changeSlide(o);
					});
				}

				//if autoscroll is turned on set the interval
				if(o.autoScroll) {
					setInterval(function() {
						changeSlide(o);
					}, o.autoScrollTimer);
				}
			});
		}
	});

})(jQuery);