
const names=['Alice','Bob','Tiff','Bruce','Alice'];
const result=names.reduce((prev,cur)=>{         
    if (!prev[cur])
       prev[cur] = 0;
    prev[cur]++;
return prev;},{})
console.log(result);


const letters=['a','b','a','b','c','e','e','c','d','d'];
const result1=letters.reduce((prev,cur)=>{         
    if (!prev.includes(cur))
       prev.push(cur);
return prev;},[])
console.log(result1);


const numbers=[-5,25,-19,0,16,0];
const result2=numbers.reduce((prev,cur)=>{
    if(cur>0)
       prev.push(Math.sqrt(cur))
    return prev
},[])
console.log(result2);