# JS 테스트

주석으로 설명 꼭 필수. 이해력을 평가하는 시험임. 질문 금지.  내일 오후 2시까지 완료하시오.

## 문제1

다음 코드에는 오류가 있다. 수정하시오.

```js
var 1val = 1;
var arr[] = [1,2,3];
var val = 1 + "3";
```

## 문제2

다음의 실행결과를 작성하시오.

```js
var a = 1;
b = 2;
function foo(num) {
    let a = 2;
    return a + b * num;
}
console.log(foo(2))
```

## 문제3

다음의 실행 결과를 작성하시오

```js
var str = "12345";
if(str[0] == 1) {
    if(str[1] === 2) {
        console.log("XXX");
	}
    else {
        console.log("YYY");
    }
}
```

## 문제4

다음 조건을 만족하는 함수`stack`을 작성하시오.

| 입력        | 출력        |
| ----------- | ----------- |
| [1,2,3,4,5] | [5,4,3,2,1] |

```js
var input = [1,2,3,4,5];
function(arr) {
	var answer;
	// ....
	return answer;
}
```

## 문제5

다음 문자를 거꾸로 만드는 함수 `rev`를 작성하시오.

| 입력예  | 출력예  |
| ------- | ------- |
| "abcde" | "edcba" |

## 문제6

다음과 같은 변수가 있다.

```js
var data = {
    "id" : "JJJ",
    "password" : "qawsedrf12345"
}
```

이 `data`에 `email` 이라는 항목을 만들기 위해서는 어떻게 해야 하는지 2가지를 말하시오.

## 문제7

다음의 배열이 있다.

```js
var arr = ['a','b','c','d'];
```

이 배열을 이용해 다음의 객체를 출력하는 함수 `foo`를 작성하시오.

```js
{
	'a' : 1,
	'b' : 2,
	'c' : 3,
	'd' : 4
}
```

```js
/*답 예시*/
var arr = ['a', 'b', 'c', 'd'];
function foo(input) {
    var output = {};
	// ....
    return output;
}
```



## 문제8

Todolist를 만들려고 한다. Todolist는 다음의 기능을 가진다.

| 함수명                  | 설명                  |
| ----------------------- | --------------------- |
| `putSchedule(whatToDo)` | 해야할 일을 추가한다. |
| `deleteSchedule(Done)`  | 완료한 일을 지운다.   |
| `deleteAll(List)`       | 모든 할일을 지운다.   |

해야 할 일의 목록은 전역변수인 배열 `List` 로 선언하고 관리한다. 구현하시오.
(이때, `whatToDo` 와 `Done`은 `String` 이다.)

```js
/*해답 예*/
var List = [];
function putSchedule(whatToDo) { }
function deleteSchedule(Done) { }
function deleteAll(List) { }
```



## 문제9

문자열 `"ABC"` 가 있다고 하자. A는 첫번째 숫자니까 1이고, B는 2, C는 3이라한다.

함수 `alphabetToNumber`는 이런 `"ABC"`를 입력으로 받으면 `1+2+3` 으로 모든 순서값을 더해서 출력한다.

문자열 `"AHDBGKKSHEFV"`를  함수 `alphabetToNumber` 를 이용해서 출력해야 한다.

+ 문제 9-1.  `switch-case`문을 이용하여 해결하시오.
+ 문제 9-2. 객체(`{}`)를 이용하여 해결하시오.

## 문제 10

문제8을 객체와 메소드를 이용하여 구현하시오.

## 문제11

다음 10 부터 100까지의 숫자중 랜덤한 숫자 20개를 출력하는 구문을 작성하시오.

## 문제12

JavaScript의 객체 `Array` 의 속성과 메서드를 구글링해서 찾아서 조사하시오.
최소 6칸 이상 작성하시오.

| 속성/메서드 | 역할 설명 |
| ----------- | --------- |
|             |           |
|             |           |
|             |           |
|             |           |

이때 속성(Property)은 앞에 `-` 를 붙이고, 메서드는 `+` 를 이용해 구분하시오.

> 힌트 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

## 문제13 

다음 코드에서 문제점을 발견하고 설명하시오.

```js
let val1 = 2;
let val1 = 10;
const val2 = 8;
val2 = 1;
```

## 문제14

다음 코드는 성능상(메모리)으로 문제가 있다. 이를 해결하려면 어떻게 해야 할까?

```js
for(var i = 1; i < 99; i++) {
	for(var j = 1; j < 99; j++) {
        // ....
	}
}
```

> 힌트 : `i`, `j` 와 `var`

## 문제15

큐를 객체를 통해 구현하려고 한다. 객체 `stack`의 속성(`-`로 구분됨) 과 메서드(`+`로 구분됨)는 다음과 같다.

| 속성/메서드     | 설명                              |
| --------------- | --------------------------------- |
| `-` `data`      | 배열이다. 실제로 드나드는 데이터. |
| `-` `size`      | 큐 내의 `item` 개수               |
| `+` `put(item)` | `item`을 집어넣는다.              |
| `+` `get()`     | `item` 을 꺼낸다.                 |

이를 통해 큐 `queueEx` 라는 인스턴스를 만들고 1,2,3,4를 `put` 하고 두번 `get` 할 결과 `data` 배열을 출력하시오.

> 힌트 : 큐는 선입선출이다.

## 문제16

다음을 arrow function으로 바꾸시오.

```js
function foo(input1, input2) {
    return input1 + input2
}
```

## 문제17

배열 `funcs` 는 인덱스 `i` 에서 `i+1`를 출력하는 **익명함수**가 있다. `funcs`의 길이가 3 일 때, `funcs` 를 작성하고, 각각의 익명함수를 실행하는 코드를 작성하시오.

> 힌트 : 아래 코드 참조
>
> ```js
> var arr = [
>     // 함수들...
> ]
> ```