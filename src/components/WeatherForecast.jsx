

const WeatherForecast = (props) => {
    const {forecast} = props
    return (
        <section className='weather'>
<ul>
     
   <li>
      <h2>{forecast.day}</h2>
      <img src={forecast.img}/>
      <p>{forecast.conditions}</p>
      <p>{forecast.time}</p>
   </li>
    </ul>
    </section>
    )}
export default WeatherForecast;