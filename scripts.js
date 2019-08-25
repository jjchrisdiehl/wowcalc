/* Set all values to zero */
$("[data-max]").html('<div class="points">0</div>');
/* On mousedown total the tier */
$(document).ready(function() {
	/* Each Column needs its own counter */
	/* Tree One */
	$(".tree_one .item").on("mousedown", function() {
		/* Total the tiers */
		function getSum() {
			var pointsAdded = 0;
			$(".tree_one .tier").find(".points").each(function() {
				pointsAdded += parseInt(this.innerHTML); // "this" is the current element in the loop
			});
			return pointsAdded;
		} /* end of getSum */
		/* Calculate how many points have been used so far */
		var pointsUsed = getSum();
		$("#tree_one_header").html(pointsUsed);
		/* Unlock the tiers conditionally */
		if (pointsUsed > 4) {
			$(".tree_one .tier:nth-child(2)").addClass("unlocked");
		} else {
			$(".tree_one .tier:nth-child(2)").removeClass("unlocked");
		}
		if (pointsUsed > 9) {
			$(".tree_one .tier:nth-child(3)").addClass("unlocked");
		} else {
			$(".tree_one .tier:nth-child(3)").removeClass("unlocked");
		}
		if (pointsUsed > 14) {
			$(".tree_one .tier:nth-child(4)").addClass("unlocked");
		} else {
			$(".tree_one .tier:nth-child(4)").removeClass("unlocked");
		}
		if (pointsUsed > 19) {
			$(".tree_one .tier:nth-child(5)").addClass("unlocked");
		} else {
			$(".tree_one .tier:nth-child(5)").removeClass("unlocked");
		}
		if (pointsUsed > 24) {
			$(".tree_one .tier:nth-child(6)").addClass("unlocked");
		} else {
			$(".tree_one .tier:nth-child(6)").removeClass("unlocked");
		}
		if (pointsUsed > 29) {
			$(".tree_one .tier:nth-child(7)").addClass("unlocked");
		} else {
			$(".tree_one .tier:nth-child(7)").removeClass("unlocked");
		}
	});
	/* Tree Two */
	$(".tree_two .item").on("mousedown", function() {
		/* Total the tiers */
		function getSum() {
			var pointsAdded = 0;
			$(".tree_two .tier").find(".points").each(function() {
				pointsAdded += parseInt(this.innerHTML); // "this" is the current element in the loop
			});
			return pointsAdded;
		} /* end of getSum */
		/* Calculate how many points have been used so far */
		var pointsUsed = getSum();
		$("#tree_two_header").html(pointsUsed);
		/* Unlock the tiers conditionally */
		if (pointsUsed > 4) {
			$(".tree_two .tier:nth-child(2)").addClass("unlocked");
		} else {
			$(".tree_two .tier:nth-child(2)").removeClass("unlocked");
		}
		if (pointsUsed > 9) {
			$(".tree_two .tier:nth-child(3)").addClass("unlocked");
		} else {
			$(".tree_two .tier:nth-child(3)").removeClass("unlocked");
		}
		if (pointsUsed > 14) {
			$(".tree_two .tier:nth-child(4)").addClass("unlocked");
		} else {
			$(".tree_two .tier:nth-child(4)").removeClass("unlocked");
		}
		if (pointsUsed > 19) {
			$(".tree_two .tier:nth-child(5)").addClass("unlocked");
		} else {
			$(".tree_two .tier:nth-child(5)").removeClass("unlocked");
		}
		if (pointsUsed > 24) {
			$(".tree_two .tier:nth-child(6)").addClass("unlocked");
		} else {
			$(".tree_two .tier:nth-child(6)").removeClass("unlocked");
		}
		if (pointsUsed > 29) {
			$(".tree_two .tier:nth-child(7)").addClass("unlocked");
		} else {
			$(".tree_two .tier:nth-child(7)").removeClass("unlocked");
		}
	});
	/* Tree Three */
	$(".tree_three .item").on("mousedown", function() {
		/* Total the tiers */
		function getSum() {
			var pointsAdded = 0;
			$(".tree_three .tier").find(".points").each(function() {
				pointsAdded += parseInt(this.innerHTML); // "this" is the current element in the loop
			});
			return pointsAdded;
		} /* end of getSum */
		/* Calculate how many points have been used so far */
		var pointsUsed = getSum();
		$("#tree_three_header").html(pointsUsed);
		/* Unlock the tiers conditionally */
		if (pointsUsed > 4) {
			$(".tree_three .tier:nth-child(2)").addClass("unlocked");
		} else {
			$(".tree_three .tier:nth-child(2)").removeClass("unlocked");
		}
		if (pointsUsed > 9) {
			$(".tree_three .tier:nth-child(3)").addClass("unlocked");
		} else {
			$(".tree_three .tier:nth-child(3)").removeClass("unlocked");
		}
		if (pointsUsed > 14) {
			$(".tree_three .tier:nth-child(4)").addClass("unlocked");
		} else {
			$(".tree_three .tier:nth-child(4)").removeClass("unlocked");
		}
		if (pointsUsed > 19) {
			$(".tree_three .tier:nth-child(5)").addClass("unlocked");
		} else {
			$(".tree_three .tier:nth-child(5)").removeClass("unlocked");
		}
		if (pointsUsed > 24) {
			$(".tree_three .tier:nth-child(6)").addClass("unlocked");
		} else {
			$(".tree_three .tier:nth-child(6)").removeClass("unlocked");
		}
		if (pointsUsed > 29) {
			$(".tree_three .tier:nth-child(7)").addClass("unlocked");
		} else {
			$(".tree_three .tier:nth-child(7)").removeClass("unlocked");
		}
	});
	/* Total all point displays for total points available */
	$(".item").on("mousedown", function() {
		/* Total the tiers */
		function getSum() {
			var pointsAdded = 0;
			$(".tree_header").each(function() {
				pointsAdded += parseInt(this.innerHTML); // "this" is the current element in the loop
			});
			return pointsAdded;
		} /* end of getSum */
		/* Calculate how many points have been used so far */
		var pointsUsed = getSum();
		var totalPoints = 51 - pointsUsed;
		$("#totalPoints").html(totalPoints);
	});
}); /* End of doc ready */
/* Detect mouse button and add or subtract points */
$(".item").on("mousedown", function(m) {
	const maxData = $(this).attr("data-max");
	let currentPoints = $(this).find(".points").html();
	let totalPoints = $("#totalPoints").html();
	switch (m.which) {
		case 1:
			/* Left mouse button; add a point */
			/* Once total points available is empty, disable items counter increment */
			if (currentPoints < maxData && totalPoints > 0) {
				currentPoints = $(this).find(".points").html();
				currentPoints++;
				$(this).find(".points").html(currentPoints);
				/*  console.log(currentPoints);*/
			}
			if (currentPoints == maxData) {
				$(this).addClass("full");
			}
			break;
		case 3:
      
			/* Check if points exist in next tier */
			let nextTreeVal = $(this).parents('.tier').next().find('.points');
      
      /* run function to add points in next tier */
      function getPoints() {
      var pointsAdded = 0;
			$(nextTreeVal).each(function() {
				pointsAdded += parseInt(this.innerHTML); // "this" is the current element in the loop
			});
			return pointsAdded;
      }
      
      /* set point sum to a variable */
  		let pointsUsed = getPoints();
      
			/* Right mouse button; take a point only if no points in next tier */
			if (currentPoints > 0 && pointsUsed < 1) {
				currentPoints = $(this).find(".points").html();
				currentPoints--;
				$(this).find(".points").html(currentPoints);
				/*      console.log(currentPoints); */
			}
			if (currentPoints != maxData) {
				$(this).removeClass("full");
			}
			break;
	}
  
  /* Lock required talent lock/key pairs */
	$(".item[lock]").each(function(index) {
		/* the value of the needed talent */
		let lockVal = $(this).attr("lock");
		/* find the item with the key matching the stated lockVal */
		let key = $(".item[key=" + lockVal + "]");
		console.log(lockVal);
		console.log(key);
		/* if that item with the key value has the class full */
		if (!$(key).hasClass("full")) {
			/* add the reqLock class to lock the talent */
			$(this).addClass("reqLock");
		} else {
			/* unlock the talent */
			$(this).removeClass("reqLock");
		}
	});
});

/* Add ToolTips */

$( ".item[data-max]" ).hover(
  function() {
    $( this ).append( $( '<div class="tooltip"><p class="talent-title">Talent</p><p class="talent-rank">Rank 0/5</p><p class="talent-req">Requires x points in y</p><p class="talent-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p><p class="talent-next-rank">Nunc euismod, turpis vitae sodales facilisis, est nulla consequat ex.</p><p class="talent-learn">Click to learn</p><p class="talent-unlearn">Click to unlearn</p></div>' ) );
    $(this).css("z-index", "10");
  }, function() {
    $( this ).find( "div.tooltip" ).remove();
    $(this).css("z-index", "0")
  }
);
