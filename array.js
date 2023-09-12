//get all the countries from asia continent/region using filter function

let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    let countryData = JSON.parse(request.response);
    console.log(countryData);
    console.log(request.status);
    let asia = countryData.filter((a)=>{
        if(a.region==="Asia"){
            return a.name;
        }
    })
    console.log(asia);
}

//get all the countries with a population of less than 2 lakhs using filter functiion

let connect = new XMLHttpRequest();
connect.open("GET","https://restcountries.com/v3.1/all");
connect.send();
connect.onload = function(){
    let countryData = JSON.parse(connect.response);
    console.log(countryData);
    console.log(connect.status);
    let population1 = countryData.filter((element)=>{
        return element.population<200000;
    })
    console.log(population1);
}

//print the followinig details name, capita, flag, using foreach funcrion

let data = new XMLHttpRequest();
data.open("GET","https://restcountries.com/v3.1/all");
data.send();
data.onload = function (){
    let countryData = JSON.parse(data.response);
    console.log(countryData);
    console.log(data.status);
    countryData.forEach(details => {
        console.log(details.name,details.capital,details.flag);
    });
}

//print the total population of countries using reduce function

let data1 = new XMLHttpRequest();
data1.open("GET","https://restcountries.com/v3.1/all");
data1.send();
data1.onload = function (){
    let countryData = JSON.parse(data1.response);
    console.log(countryData);
    console.log(data1.status);
    let population2 = countryData.reduce((acc,element)=>{
        return acc+element.population;
    })
    console.log(population2);
}

//print the country which use US Dollars as currency 

let data2 = new XMLHttpRequest();
data2.open("GET","https://restcountries.com/v3.1/all");
data2.send();
data2.onload = function (){
    let data = JSON.parse(data2.response);
    console.log(data);
    console.log(data2.status);
    for(let i=0; i<data.length; i++){
        if(data[i].currencies && data[i].currencies.USD)
    {
        console.log("name :",data[i].name.common,"==>",data[i].currencies.USD.name)
    }

    }
}








