stringArabia = "1234556789"
// `switch-case`문 사용
function arabiaToRoma(str){
    var answer = "";
    
    for(i=0; i<str.length; i++)
    {
        switch(str[i]){
           case '1':
               answer += "I";
               break;
           case '2':
               answer += "II";
               break;
           case '3':
               answer += "III";
               break;
           case '4':
               answer += "VI";
               break;
           case '5':
               answer += "V";
               break;
           case '6':
               answer += "VI";
               break;
           case '7':
               answer += "VII";
               break;
           case '8':
               answer += "VIII";
               break;
           case '9':
               answer += "IX";
               break;
        }
    }
    return answer;
}

console.log(arabiaToRoma(stringArabia));


// 객체사용
function arabiaToRoma(str){
    var result = "";

    var mappingTable = {
        '1' : 'I',
        '2' : 'II',
        '3' : 'III',
        '4' : 'IV',
        '5' : 'V',
        '6' : 'VI',
        '7' : 'VII',
        '8' : 'VIII',
        '9' : 'IX',
        '10': 'X',
    }

    for(i=0; i<str.length; i++)
        result += mappingTable[str[i]];

    return result;
}

console.log(arabiaToRoma(stringArabia));