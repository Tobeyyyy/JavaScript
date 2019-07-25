//ConvertSingle('88727607240');//887276072401

function ConvertSingle(this_upc_11){//single upc converter
	var upc_11=String(this_upc_11);
	var upc_length=upc_11.length;
	var sum_old_digit=0;
	var sum_even_digit=0;
	var i=0;
	var upc_12=0;
	while (i< upc_length){
		sum_old_digit=sum_old_digit+parseInt(upc_11[i]);
		if ((i+1)<upc_length){
			sum_even_digit=sum_even_digit+parseInt(upc_11[i+1]);
		}
		i=i+2;
	}
	var sum_old_time_three=sum_old_digit*3+sum_even_digit;
	var round_up=sum_old_time_three%10;
	var upc_last_digit=10-round_up;
	if (upc_last_digit==10){
		upc_last_digit=0;
	}
	upc_12=upc_11+String(upc_last_digit);
	console.log(upc_12);
	return upc_12;
}

function ConvertMultiple(upc_11_startpoint,quantity){
	var upc_string='';
	var upc_11=parseInt(upc_11_startpoint);
	for(var i=0;i<quantity;i++){
		
		upc_string=upc_string+ConvertSingle(upc_11)+',';
		upc_11++;		
	}
	console.log(upc_string);
	return upc_string;
}