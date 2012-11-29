# Astro Slider
## Installation
Include the plugin after including JQuery.

`<script type="text/javascript" src="jquery.astroSlider.js"></script>`

Include the CSS file, or integrate the styles into your css file.

`<script type="text/javascript" src="jquery.astroSlider.js"></script>`

Instantiate the plugin after JQuery and the plugin have loaded. The options show are optional.

    $(function(){
		$('.astroslider').astroSlide({
			duration: 500,
			autoScroll: true,
			autoScrollTimer: 8000,
			clickAdvance: true
		});
	});
	
## Usage
Inside the target wrapper ( `<div class="astroslider"` by default) you will add your slides. The plugin is looking for elements with the class `slide`.

    <div class="slide">
        (Code Here)
    </div>
    
The parallax (animated) elements can be any element inside the slide container with the class `.parallax`.

    <div class="slide">
        <h1 class="parallax">I'm Animated</h1>
    </div>

You can use various data attributes on a parallax item to manipulate its animation properties.

    <div class="slide">
        <h1 class="parallax" data-distance-x="100" data-distance-y="-50" data-velocity="1.3">I'm Animated</h1>
        <div class="parallax" data-distance-x="20" data-revert="false" data-velocity=".3">
            <img src="http://placehold.it/100x100">
        </div>
    </div>

### Atributes
There are multiple data attributes that are used to help you craft your parallax animations.

#### Distance-x
This value represents the elements horizontal movement in pixels. The value is relative to the `left` attribute, meaning a negative value will move the element to the right.

    // This will move the element 20px to the right.
    data-distance-x="20"
    
#### Velocity
This value represents how long the animation will take to complete. This value can be a decimal and will be multiplied with the `duration` variable (default 500ms) to determine the final time. Giving an element a velocity of 1 will cause the animation to take 1/2 second (500ms * 1 = 500ms || .5s).

    // This element's animation will take half as long as
    // the standard animation.
    data-velocity=".5"
    
#### Distance-y (optional)
This value represents the elements vertical movement in pixels. The value is relative to the `top` attribute, meaning a negative value will move the element up. Default value = 0.

    // This will move the element 20px up.
    data-distance-y="-20"
    
#### Revert (optional)
This boolean value determines if the element will transition out the way it came in, or continue on in a liner path. By default elements animate out the same way they animate in. Default value = true.

    // This element will animate out in the same direction
    // as it animated in.
    data-distance-y="-20"



