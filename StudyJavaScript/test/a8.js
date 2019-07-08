var List = [];
function putSchedule(whatToDo) {
    List.push(whatToDo);
}
function deleteSchedule(Done) {

    for(i=0; i<List.length; i++)
    {
        if(List[i] == Done){
            List.splice(i, 1);
        }
    }
}
function deleteAll(List) { 
    List = [];
}

putSchedule("밥먹기");
console.log(List);


deleteSchedule("밥먹기");
console.log(List);

// 오답노트 문자열을 삭제하려면 splice(인덱스, 삭제할 갯수)를 사용한다.