function rev(str) {
    str_length = str.length;
    arr2 = "";
    for(i=str_length-1; i>=0; i--)
    {
        arr2 += str[i];
    }
	return arr2;
}
console.log(rev("abcde"));
// 오답노트 빈문자열은 인덱스로 대입이 불가