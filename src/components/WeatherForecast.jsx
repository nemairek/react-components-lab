import '../WeatherForecast.css';

const WeatherForecast = (props) => {
    const {forecast} = props
    return (
        <section>
        <section className='weather'>
            <span>
<ul>
     
   <li>
      <h2>{forecast.day}</h2>
      <img src={forecast.img}/>
      <p>{forecast.conditions}</p>
      <p>{forecast.time}</p>
   </li>
    </ul>
    </span>
    </section>
    </section>
    )}
export default WeatherForecast;