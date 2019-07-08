stringA = "AHDBGKKSHEFV"
/*
+ 문제 9-1.  `switch-case`문을 이용하여 해결하시오.
*/
function alphabetToNumber(str){
    var answer = 0;
    for(i=0; i<str.length; i++)
    {
        switch(str[i]){
            case 'A':
                answer += 1; 
                break;
           case 'B':
                answer += 2;
               break;
           case 'D':
                answer += 4;
               break;
           case 'E':
               answer += 5;
               break;
           case 'F':
               answer += 6;
               break;
           case 'G':
               answer += 7;
               break;
           case 'H':
               answer += 8;
               break;
           case 'K':
               answer += 11;
               break;
           case 'S':
               answer += 19;
               break;
           case 'V':
               answer += 22;
               break;
        }
    }
    return answer;
}
console.log(alphabetToNumber(stringA))
// + 문제 9-2. 객체(`{}`)를 이용하여 해결하시오.

// console.log(stringA.charCodeAt(0));

function alphabetToNumber(str){
    var result = 0;

    var someObject = {
        'A': 1,
        'B': 2,
        'C': 3,
        'D': 4,
        'E': 5,
        'F': 6,
        'G': 7,
        'H': 8,
        'I': 9,
        'J': 10,
        'K': 11,
        'L': 12,
        'M': 13,
        'N': 14,
        'O': 15,
        'P': 16,
        'Q': 17,
        'R': 18,
        'S': 19,
        'T': 20,
        'U': 21,
        'V': 22
    }

    for(i=0; i<str.length; i++)
    {
        result += someObject[str[i]];
    }

    return result;
    // str.charCodeAt(0) - 64
}
console.log(alphabetToNumber(stringA));

// 오답노트 : 알고리즘 문제는 적으면서 풀자. object는 index를 property를 사용한다.