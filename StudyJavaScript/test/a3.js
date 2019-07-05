var str = "12345"; // 12345라는 string 초기화
if(str[0] == 1) { // 첫번째 문자가 1이랑 같을 경우,
    if(str[1] === 2) { // 두번째 문자가 2랑 strong equal인 경우(여기선 false)
        console.log("XXX");
	}
    else {
        console.log("YYY");
    }
}
// 답 : YYY
// equal은 숫자와 문자열을 비교할때, 숫자를 문자로 바꿔서 비교하지만
// strong equal (===)의 경우, 바꾸지 않고 비교하기 때문에 조건이 성립하지 않아
// else문이 실행된다.