$(this).on('show.daterangepicker', function (ev, picker) {
	console.log("PICKER HERE!", picker)
	let distanceToViewportBottom;
	let pickerContainerHeight;
	let pickerInputMeasures;
	for (let ctn of picker.container) {
		if ($(ctn).is(":visible")) {
			pickerInputMeasures = picker.element[0].getBoundingClientRect()
			distanceToViewportBottom = window.innerHeight - pickerInputMeasures.bottom
			pickerContainerHeight = ctn.offsetHeight
		}
	}

	// Applying changes to all containers attached to this picker
	for (let ctn of picker.container) {
		if (pickerContainerHeight > distanceToViewportBottom) {
			ctn.style.top = "unset"
			ctn.style.bottom = (distanceToViewportBottom + pickerInputMeasures.height + 5) + "px"
			$(ctn).removeClass("drop-down").addClass("drop-up")
		}
	}
});