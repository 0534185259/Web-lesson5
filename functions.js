function f1(){

    let name=document.querySelector("#filter").value; 
    const catalog1= catalog.filter(x=>x.title.includes(name))
      for (let i = 0; i < catalog1.length; i++) {
          document.querySelector("#result").innerHTML+=catalog1[i].title;
      }
}
const lands=catalog.map(x=>x.country)
 const country=lands.filter((item, index) => lands.includes(item, index + 1))
console.log(country)
   country.sort()
   for(const i in country)
       document.querySelector("#countries").innerHTML+="<option>" +i+"</option>";

function f2()
{
  let country=document.querySelector("#countries").value;
    let disks=catalog.filter(item=>item.country===country)
    for(let i=0;i<disks.length;i++)
    {
        document.querySelector("#bycountry").innerHTML+=i+1+". "+catalog[i].title+"<br>";
    }
}


