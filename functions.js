function f1(){

    let name=document.querySelector("#filter").value; 
    const catalog1= catalog.filter(x=>x.title.includes(name))
      for (let i = 0; i < catalog1.length; i++) {
        document.querySelector("#result").innerHTML+=catalog1[i].title;
      }
}