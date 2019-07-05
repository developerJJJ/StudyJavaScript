function rev(arr) {
    arr_length = arr.length;
    arr2 = [];
    for(i=0; i<arr_length; i++)
    {
        arr2.push(arr.pop());
    }
	return arr2;
}

console.log(rev(['a', 'b', 'c', 'd', 'e']));