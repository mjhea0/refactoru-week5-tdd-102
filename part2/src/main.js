// Returns a string that concatenates each string from the array separated by 
// the given delimeter.
// e.g. joinTest(['one', 'two', 'three'], ' and ') 
// returns: 'one and two and three'

var joinTest = function(arr, delimeter) {

	var output = ""

	for(var i=0; i<arr.length; i++) {
		output += arr[i] + " "
	}
	output = output.trimRight()

	if (typeof delimeter !== 'string') {
		delimeter = ' ' +delimeter.toString()+ ' '
	} else {
		delimeter 
	}
	return output.replace(/ /g, delimeter)
};