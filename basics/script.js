
const url = "https://cat-fact.herokuapp.com/facts/";

const body = document.querySelector("body");

let i = 1;
const testApi = async () =>{

    console.log("fetching api...");
    let response = await fetch(url);
    console.log("api fetched");
    let data = await response.json();
    let para = document.createElement("p");
    body.prepend(para);
    let showdata = data[i].text;
    await i++; 
    console.log(showdata);
    para.innerText = showdata;
    if(i==5){
        i = 1;
    }
};

// testApi();