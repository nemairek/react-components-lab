const WeatherForecast = (props) => {
    const {forecast} = props
    return (
<ul>
     
   <li>
      <h2>{forecast.day}</h2>
      <img src={forecast.img}/>
      <p>{forecast.conditions}</p>
      <p>{forecast.time}</p>
   </li>
    </ul>
    )}
export default WeatherForecast;