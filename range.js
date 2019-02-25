function range(start,end,step)
{
  var arrayNum = [];
  if (start == undefined || step == undefined || end == undefined)
  {
    return arrayNum;
  }
  else if (start > end)
  {
    return arrayNum;
  }
  else if (step < 0)
  {
    return arrayNum;
  }
  else
  {
    for (var i = start; i < end; i+=step)
    {
      arrayNum.push(i);
    }
    return arrayNum;
  }
}

console.log(range(0,10,2));
console.log(range(-5,2,3));