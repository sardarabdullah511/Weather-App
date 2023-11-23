const request= require('request')
const forecast = (latitude,longitude,callback)=>{
    const url= 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=' + encodeURIComponent(latitude)+','+ encodeURIComponent(longitude) + '&units=m'

    request({url, json:true},(error,{body})=>{
if(error){
    callback("unable to connect",undefined);
}
else if(body.error){
    callback("unable to find address", undefined);
}else{
    callback(undefined,body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degree out. It feels like  '+body.current.feelslike + 'degress out. The humidity is ' + body.current.humidity + '%.')
}
    })


}



module.exports= forecast