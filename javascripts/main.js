$(document).ready(function() {
	$('button').click(function(){
	var Total = $('#bill').val();
	var Tip = $('#slideval').val();
	var NumberOfPeople = $('#people').val();
	var AdjTotal = (((Tip/100)*Total)+Total/1).toFixed(2);
	var Result = (AdjTotal/NumberOfPeople).toFixed(2);
	if(isNaN(AdjTotal)) {
	    $('#result').remove();
	    $('#total').append('<p class="error">Please enter valid numbers into the above fields.</p>');
	}
	else {
	    $('#result').remove();
	    $('#total').append('<p class="result">Entire Bill: $' + AdjTotal + ' ' + '</p><p class="result"> Each Person Owes: $' + Result + '.</p>');
	}
	});
});