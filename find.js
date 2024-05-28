/*
find is cousin of filter.Filter is if condition is met it all show all that have met the condition.Where as find() do the same but it dont show all
rather it show 1 element that it find met the condition.It doesnt check the rest. 
*/

const players = [75, 65, 67, 72, 55, 59, 80];

const selected = players.find(p => p > 70);
console.log(selected);
/*
We have learned ->
1.Map
2.forEach
3.Filter
4.Find
*/