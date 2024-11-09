const options = {
  method: 'GET',
  headers: {
'x-rapidapi-key': 'c115d09deemshf707f96bf028fe5p1c629djsn4c1e852dd33f',
		'x-rapidapi-host': 'weather-api-by-any-city.p.rapidapi.com'
  }
  };
  
  const getweather=(city)=>{
    cityName.innerHTML=city
fetch('https://weather-api-by-any-city.p.rapidapi.com/weather/'+city, options) 
  .then(response => response.json())
  .then((response)=> {
    console.log(response)
    const temp_c = response.current.temp_c;
    const temp_f = response.current.temp_f;
    const wind_degree = response.current.wind_degree ;  
    const wind_kph = response.current.wind_kph;
    const wind_dir = response.current.wind_dir  ;
    const humidity  = response.current.humidity;
    const cloud = response.current.cloud;
    const uv =response.current.uv;
    const wind_kph2=response.current.wind_kph;
    const temp_2=response.current.temp_c;
    const humidity_2=response.current.humidity;





    const weatherDescription = response.current.condition.text;
    console.log(weatherDescription);
   
    // Select the HTML element where you want to display the weather description
    const weatherElement = document.getElementById('weatherDescription');
    const tempc = document.getElementById('temp_c');
    const  tempf = document.getElementById('temp_f');
    const winddegree = document.getElementById('wind_degree');
    const  winddir= document.getElementById('wind_dir');
    const windkph = document.getElementById('wind_kph');
    const humid=document.getElementById('humidity');
    const cloudper=document.getElementById('cloud');
    const uvind=document.getElementById('uv');
    const temp2 = document.getElementById('temp_2');
    const windkph2 = document.getElementById('wind_kph2');
    const humidity2 = document.getElementById('humidity_2');



    // Update the element's innerHTML with the weather description
    weatherElement.innerHTML = weatherDescription;
    tempc.innerHTML = temp_c;    
    tempf.innerHTML = temp_f;
    winddegree.innerHTML = wind_degree;
    winddir.innerHTML = wind_dir;
    windkph.innerHTML = wind_kph;
    humid.innerHTML = humidity;
    cloudper.innerHTML=cloud;
    temp2.innerHTML=temp_c;
    uvind.innerHTML=uv;
    windkph2.innerHTML=wind_kph2;
    humidity2.innerHTML=humidity;

    })
  .catch(err => console.error(err));
  }

  document.addEventListener("DOMContentLoaded", () => {
    const submit = document.getElementById("submit");
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        getweather(city.value);
    });
});


  getweather("Delhi")
  