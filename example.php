<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script type="text/javascript" src="jquery.astroSlider.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">

<div class="banners">
	<div class="slide" style="background: url(http://subtlepatterns.com/patterns/light_honeycomb.png)">
		<div class="slide-center">
			<h1 class="parallax title" data-distance-x="0" data-distance-y="-50" data-velocity="1">Slide One</h1>
		</div>
	</div>
	<div class="slide" style="background-image: url(http://subtlepatterns.com/patterns/purty_wood.png)">
		<div class="slide-center">
			<h1 class="parallax title" data-distance-x="0" data-distance-y="50" data-revert="false" data-velocity="1">Slide Two</h1>
		</div>
	</div>
	<div class="slide" style="background-image: url(http://subtlepatterns.com/patterns/rip_jobs.png)">
		<div class="slide-center">
			<h1 class="parallax title" data-distance-x="100" data-distance-y="50" data-revert="true" data-velocity="1">Slide Three</h1>
		</div>
	</div>
</div>


<script type="text/javascript">
	$(function(){
		$('.banners').astroSlide({
			duration: 500,
			autoScroll: true,
			autoScrollTimer: 8000,
			clickAdvance: true
		});
	});
</script>