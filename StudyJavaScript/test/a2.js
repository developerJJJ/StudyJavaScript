var a = 1; // 윈도우 객체 지역변수 a = 1
b = 2; // 시스템상의 전역변수 b = 2
function foo(num) { // foo 함수는 num을 받아서
    let a = 2; // a에 2를 대입하고
    return a + b * num; // a에 b*num을 더한 값을 리턴
}
console.log(foo(2)) // foo의 num에 2가 들어갔으므로 리턴 값은 
// 2 + 2*2 = 6