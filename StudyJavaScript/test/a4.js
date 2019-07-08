var input = [1,2,3,4,5];

function stack(arr) {
	answer = []
	arr_length = arr.length;
	for(i=0; i<arr_length; i++)
	{
		answer.push(arr.pop());
	}
	return answer;
}
console.log(stack(input));