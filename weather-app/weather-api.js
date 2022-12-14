// import fetch from 'cross-fetch';

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "2e73269d14613529563861032fd383ac";
class WeatherAPI{
    constructor(){
        this.apiURL = new URL(API_BASE_URL);
      }
    
      invoke(userData){
    
        this.buildURL(userData);
        return this.invoke2(userData);

       }

      async invoke2(userData){

        let response = await fetch(this.apiURL);
        if(response.status == 200)
        {
          let responseJSON = await response.json();
          return responseJSON;
        }else
        {
          return 'ERROR';
        }
      }
      buildURL(userData){

        this.apiURL.searchParams.append("q", userData);
        this.apiURL.searchParams.append("appid", API_KEY);
        this.apiURL.searchParams.append("units", "metric");
    
    
        console.log(`URL is ${this.apiURL}`);
      }
}

export {WeatherAPI}