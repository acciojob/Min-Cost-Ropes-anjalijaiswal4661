function mincost(arr)
{ 
//write your code here
// return the min cost
	let totalCost = 0
	while(arr.length > 1){
		arr.sort((a,b) => a-b);
		let first = arr.shift();
		let second = arr.shift();

		let cost = first+second;
		totalCost+=cost;

		arr.push(cost)
	}
	return totalCost;
	 
  
}
// let input=prompt("Enter the number of element")
// let arr=[]
// for(let i=0;i<input;i++){
// 	arr=arr.push(prompt(`Enter the ${i+1} element`))
// }
// alert(mincost(arr))
module.exports=mincost;
