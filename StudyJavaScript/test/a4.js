var input = [1,2,3,4,5];
function stack(arr) {
	var answer = arr.pop();
	return answer;
}
arr_length = input.length;
for(i=0; i<arr_length; i++)
{
    console.log(stack(input));
}