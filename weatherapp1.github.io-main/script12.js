




function f()
{

    let input= document.getElementById("inp").value;
    let city=document.getElementById("city");
    
    let temp=document.getElementById("weather-temp");
    const api='e087ee8896fdf0f43696e392e281c2c7';
    let dep=document.getElementsByTagName("h3");
    



    if(input=="")
     alert("Please Enter some location");
    else
      url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api}`;
      fetch(url).then(res=> res.json())
      .then(data=>{
        console.log(data)
        const{name} = data
        const{feels_like}= data.main
        const{description}=data.weather[0]
        temp.innerText =Math.floor(feels_like-273) + " °C";
        city.innerText=name;
        dep.innerText=description;

      })
      .catch(()=>{
         alert("Enter valid location");
      })

    input=" ";
      

     
}

