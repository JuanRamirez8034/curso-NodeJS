const getData = async ()=>{
  try{
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await resp.json();
    console.log(json);
  }catch(e){
    console.log(e);
  }
}

getData();