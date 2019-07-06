stringA = "AHDBGKKSHEFV"

function alphabetToNumber(str){
    result = 0;

    someObject = {}

    for(i=0; i<str.length; i++)
    {
        c = str[i];
        someObject[c] = alphabetToNumber(c);
    }
    return someObject;
    // str.charCodeAt(0) - 64
}
/*
+ 문제 9-1.  `switch-case`문을 이용하여 해결하시오.

function alphabetToNumber(str){
    result = 0;

    someObject = {}

    for(i=0; i<str.length; i++)
    {
        c = str[i];
        someObject[c] = alphabetToNumber(c);
    }


    function "caseInSwitch(val){
    var answer = "";
    switch(val){
        case 'A':
            answer = 1;
        break;
        case 'B':
            asnwer = 2;
        break;
        case 'D':
            asnwer = 4;
        break;
        case 'E':
            asnwer = 5;
        break;
        case 'F':
            asnwer = 6;
        break;
        case 'G':
            asnwer = 7;
        break;
        case 'H':
            asnwer = 8;
        break;
        case 'K':
            asnwer = 2;
        break;
    }
    return answer;
}

    return someObject;
    // str.charCodeAt(0) - 64
}

caseInSwitch(1);
*/

// + 문제 9-2. 객체(`{}`)를 이용하여 해결하시오.

// console.log(stringA.charCodeAt(0));
// console.log(someObject);
alphabetToNumber(stringA);