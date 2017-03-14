$(document).ready( function() {

	var TAX = 0.055;
	var phone_price = 149.99;
	var ACCESORY = 29.99;

	var amount = 0;
	var bankAcct = 303.71;

	function add_tax(amount) {
		return amount * TAX;
	}		

	function format_price(amount) {
		return '$' + amount.toFixed(2);
	}

	while ( amount < bankAcct ){
		amount += phone_price;
		console.log(amount);
		if ( amount < bankAcct ) {
			amount += ACCESORY;
		} else {
			break;
		}
	}

	var tax_amount = add_tax(amount);

	var final = (format_price(amount + tax_amount));

	$('#tax').html(tax_amount); 
	$('#total_price').html(final);


} ); //end ready