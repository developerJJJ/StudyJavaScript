function makeRandom(min, max){
    var RandVal = Math.floor( Math.random()*(max-min+1) ) + min;
    return RandVal;
}
for(i=0; i<20; i++)
{
    console.log(makeRandom(10, 100));
}