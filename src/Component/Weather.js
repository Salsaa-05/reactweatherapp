import React from 'react';


const Weather = (props) => {

  return (
    <div classsName='info'>
      {props.tempreature &&
        <p className='info_key'>Tempreature :
      <span className='info_value'>  {props.tempreature}</span>
        </p>

      }

      {
        props.city && <p className='info_key'>City: <span className='info_value'></span>{props.city}</p>
      }
      {
        props.country && <p className='info_key'>Country: <span className='info_value'>{props.country}</span></p>
      }

      {
        props.humidity && <p className='info_key'>Humidity: <span className='info_value'>{props.humidity}</span></p>
      }

      {
        props.description && <p className='info_key'>Description:<span className ='info_value' >{props.description}</span></p>

      }
      {
        props.Error && <p className='info_key'>Error :<span className='info_value'>{props.Error}</span> </p>
      }

    </div>
  )
}








export default Weather;