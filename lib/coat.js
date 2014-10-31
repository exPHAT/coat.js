// coat.js
// Aaron Taylor 2014

$.fn.coat = function(attributes) {

	// Retreive the attributes if supplied any
	var css;
	var pointSelector;
	var modifier;
	if (attributes != undefined) {
		css = attributes.css;
		pointSelector = attributes.pointSelector;
		modifier = attributes.modifier;
	}

	// Set the css, pointSelector and modifier variables to their defualts if they're undefined
	if (css == undefined) {
		css = {
			"color": "red"
		}
	}
	if (pointSelector == undefined) {
		pointSelector = ".coat";
	}
	if (modifier == undefined) {
		modifier = 0;
	}

	// Create/assign objects required for coating
	var $parent = this.parent();
	var $otherThis = this.clone();
	var $newParent = $('<div>');

	// Move the elements to their proper place
	$parent.append($newParent);
	this.detach();
	$newParent.append(this);
	$newParent.append($otherThis);

	// Setup the size/position attributes of the new parent
	$newParent.height(this.height());
	$newParent.width(this.width());

	// Set needed CSS rules
	$newParent.css({
		"position": "fixed",
		"top": this.position().top
	});
	this.css("overflow", "hidden");
	$otherThis.css("overflow", "hidden");

	// Apply the specified CSS rules to the second element
	$otherThis.css(css);
	$otherThis.children().css("color", "inherit");

	// create another variable so we can use "this"
	var $thisToPass = this;

	// Add to the onScroll function
	$(document).scroll(function() {

		// Grab the required elments for calculating height
		var scrollTop = $(document).scrollTop();
		var barHeight = $newParent.height();
		var $sections = $(pointSelector);

		// Offset the scroll top if there is a margin or something
		scrollTop += $newParent.position().top;

		// Loop through all possible selectors and ajust the z-index and height accordingly
		for (var i = 0; i < $sections.length; i++) {
			if (scrollTop-barHeight <= $($sections[i]).position().top && scrollTop > 0) { // Ensure there is no overscroll

				var newHeight = ($($sections[i]).position().top - (scrollTop + barHeight)) + barHeight;// Setup the new height

				// Set the z-index based on which pane the scrollTop is at
				if (i%2 == 0) {
					var behind = $thisToPass;
					var front = $otherThis;
				}
				else {
					var behind = $otherThis;
					var front = $thisToPass;
				}

				// Apply the CSS rules to the behind and front objects
				behind.css({
					"z-index": -2,
					"height": barHeight
				});
				front.css({
					"height": newHeight - modifier,
					"z-index": 1
				});

				break;
			}
		}
	});

	$(document).scroll(); // Scroll once so it starts pretty
}
