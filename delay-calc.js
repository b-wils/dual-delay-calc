$( document ).ready(function() {
  // Handler for .ready() called.

	$('#delay1length input').on('change', function() {
	   // console.log($("#delay1length input[type='radio']:checked").val()); 
	});

	$('.optionSelect input').on('change', function() {
	   updateValues();
	});

	$('#bpmInput').on('input', function() {
	   updateValues();
	});

  updateValues();
});

function updateValues() {
	var delay1length = $("#delay1length input[type='radio']:checked").val();
	var delay1mod = $("#delay1mod input[type='radio']:checked").val();
	var delay2length = $("#delay2length input[type='radio']:checked").val();
	var delay2mod = $("#delay2mod input[type='radio']:checked").val();

	var bpm = $("#bpmInput").val();

	var delay1 = delay1length * delay1mod;
	var delay2 = delay2length * delay2mod;

	var delayRatio = Math.round(delay2/delay1 * 100);

	$('#delayratio').html(delayRatio);

	$('#delay1time').html(calcTimeFromBPM(bpm,delay1));

	$('#delay2time').html(calcTimeFromBPM(bpm,delay2));
}

function calcTimeFromBPM(bpm, length) {
	time = 1000 * 60 * length / bpm;

	time = Math.round(time);

	return time;
}