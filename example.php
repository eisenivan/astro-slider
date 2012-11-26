<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>

<div id="banners">
	<div class="fixed">
		<div class="slide-center">
			<div class="banners-callouts-container">
				<a href="#" class="banners-callouts-callout trades"></a>
				<a href="#" class="banners-callouts-callout systems"></a>
			</div>
		</div>
	</div>
	
	<div class="slide" style="background: url(/Content/images/bg-homepage-slide1.jpg)">
		<div class="slide-center">
			<h1 class="parallax title" data-distance-x="0" data-distance-y="-50" data-velocity="1">Great Work Lasts Longer.</h1>
			<div class="tool parallax" id="drill" data-distance-x="60" data-distance-y="0" data-velocity=".9">
				<img src="/Content/images/m18-fuel-drill.png">
			</div>
		</div>
	</div>
	<div class="slide" style="background-image: url(http://subtlepatterns.com/patterns/light_honeycomb.png)">
		<div class="slide-center">
			<h1 class="parallax title" data-distance-x="0" data-distance-y="-50" data-velocity="1">Great Work Lasts Longer.</h1>
			<div class="tool parallax" id="other_drill" data-distance-x="-60" data-velocity=".9">
				<img src="/Content/images/m18-fuel-drill.png">
			</div>
		</div>
	</div>
</div>

<script type="text/javascript" src="jquery.astroSlide.js"></script>
<script type="text/javascript">
	$(function(){
		$('#banners').astroSlide({
			duration: 500,
			autoScroll: true,
			autoScrollTimer: 8000,
			clickAdvance: false
		});
	});
</script>