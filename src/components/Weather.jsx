
const Weather = () => {
    let temp = 20;
    if(temp<15){
    return <h1>Freeze</h1>
    } else if(temp<25){
        return <h1>Nice</h1>
    }
    else return <h1>Mayday</h1>;
  
}

export default Weather;