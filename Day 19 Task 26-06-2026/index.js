
 const button = document.getElementById("btn")
 const result = document.getElementById("result")
 button.addEventListener("click",async()=>{
    const city=document.getElementById("city").value 
    try{
        const response=await fetch(
            `https://wttr.in/${city}?format=j1`
        )
        if(!response.ok){
            throw new Error("Failed to fetch weather data")
        }
        const data=await response.json()
        const temp=data.current_condition[0].temp_C
        const humidity=data.current_condition[0].humidity
        const weather=data.current_condition[0].weatherDesc[0].value
        result.innerHTML=`
        <h3>${city}</h3>
        <p>Temperarture:${temp}°C</p>
        <p>Humidity:${humidity}%</p>
        <p>Condition:${weather}</p>
        `
    }
    catch(error){
        result.innerHTML=`<p>${error.message}</p>`

}
finally{
    console.log("API call completed")
}
})