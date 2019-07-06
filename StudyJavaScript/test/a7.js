var arr = ['a', 'b', 'c', 'd'];

function foo(input) 
{
    var output = {}
    iLength = input.length;
    for(i=0; i<iLength; i++)
    {
        output[input[i]] = i+1;
    }
    // return output;
    console.log(output);
}
foo(arr);