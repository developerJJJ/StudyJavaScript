class Schedule{
    constructor(){
        this.List = [];
    }
    putSchedule(whatToDo) {
        this.List.push(whatToDo);
    }
    deleteSchedule(Done) {
        var i;
        for(i=0; i<this.List.length; i++)
        {
            if(this.List[i] == Done){
                this.List.splice(i, 1);
            }
        }
    }
    deleteAll() { 
        this.List = [];
    }
}
var sched = new Schedule();
sched.putSchedule("Lunch");
console.log(sched.List);

sched.deleteSchedule("Lunch");
console.log(sched.List);
// 오답노트 this를 잘 사용, 객체 생성시 var를 사용,
// deleteAll()의 경우 매개변수가 필요 없음.