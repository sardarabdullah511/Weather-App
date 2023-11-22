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
    callback(undefined,'it is currently ' + body.current.temperature + ' degree out. It fell like  '+body.current.feelslike)
}
    })


}


// const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=42.3605,-71.0596&units=f'

// request({ url: url, json:true }, (error, response) => {
//     // const data = JSON.parse(response.body)
//     // console.log(data.current)
// // const currentTemprature =response.current.temperature
//     console.log('it is currently ' + response.body.current.temperature +'degree out. It fell like  '+response.body.current.feelslike)


// })


module.exports= forecast