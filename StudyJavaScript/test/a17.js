// 배열 `funcs` 는 인덱스 `i` 에서 `i+1`를 출력하는 **익명함수**가 있다. `funcs`의 길이가 3 일 때, `funcs` 를 작성하고, 각각의 익명함수를 실행하는 코드를 작성하시오.

var funcs = [];
for(i=0; i<3; i++){
    funcs.push(function(i){return i+1});
    
}

console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());

// 오답노트 : 익명함수를 for문을 이용해서 push로 배열에 대입하는 것