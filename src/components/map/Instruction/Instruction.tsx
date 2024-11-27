
import './Instruction.css'
import React from 'react'
import TurnLeftIcon from '@mui/icons-material/TurnLeft';
import TurnRightIcon from '@mui/icons-material/TurnRight';
import PlaceIcon from '@mui/icons-material/Place';
import { RoutingType } from '../data/Util';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

type Props = {
  routingData?: RoutingType,
  profileVehicle?: string
  setProfileVehicle?: React.Dispatch<React.SetStateAction<string>>
}

const Instruction:React.FC<Props> = ({routingData, profileVehicle, setProfileVehicle}) => {

  return (
    <div className='instruction-container'>
      <div className='instruction-header' style={{height: '50px'}}>
        <h2>Hướng dẫn </h2>
      </div>
      <div className='instruction-profile'>
          <button className={`profile-btn ${profileVehicle === 'car' && 'active'}`}
            onClick={() => setProfileVehicle!("car")}
          >
            <DirectionsCarIcon sx={{fontSize: '24px'}} />
          </button>
          <button className={`profile-btn ${profileVehicle === 'bike' && 'active'}`}
            onClick={() => setProfileVehicle!("bike")}
          >
            <DirectionsBikeIcon sx={{fontSize: '24px'}} />
          </button>
          <button className={`profile-btn ${profileVehicle === 'foot' && 'active'}`}
            onClick={() => setProfileVehicle!("foot")}
          >
            <DirectionsWalkIcon sx={{fontSize: '24px'}} />
          </button>
        </div>
      {routingData ? <div className=''>
        <div className='overview'>
          <h3 className='time'>{(routingData?.paths[0].time / 60000).toFixed(1)} phút</h3>
          <h4 className='distance'>{(routingData?.paths[0].distance / 1000).toFixed(1)} km</h4>
        </div>
        <ul className='instructions-list'>
          {routingData?.paths[0].instructions.map((route, index) => {
            if (index === 0) {
              return (
                <li key={index} className='instruction-item'>
                  <div className='instruction-icon'>
                    <PlaceIcon sx={{fontSize: '32px', color: 'green'}}/>
                  </div>
                  <div className='instruction-content'>
                    <h4>{route.text}</h4>
                    <p>{route.distance.toFixed(0)} m</p>
                  </div>
                </li>
              )  
            } else if (index === routingData?.paths[0].instructions.length - 1) {
              return (
                <li key={index} className='instruction-item'>
                  <div className='instruction-icon'>
                    <PlaceIcon sx={{fontSize: '32px', color: 'red'}}/>
                  </div>
                  <div className='instruction-content'>
                    <h4>{route.text}</h4>
                    <p>{route.distance.toFixed(0)} m</p>
                  </div>
                </li>
              )  
            }
            
            if (route.text.includes("Rẽ trái")) {
              return (
                <li key={index} className='instruction-item'>
                  <div className='instruction-icon'>
                    <TurnLeftIcon sx={{fontSize: '32px'}}/>
                  </div>
                  <div className='instruction-content'>
                    <h4>{route.text}</h4>
                    <p>{route.distance.toFixed(0)} m</p>
                  </div>
                </li>
              )  
            }
            return (
              <li key={index} className='instruction-item'>
                <div className='instruction-icon'>
                  <TurnRightIcon sx={{fontSize: '32px'}}/>
                </div>
                <div className='instruction-content'>
                  <h4>{route.text}</h4>
                  <p>20m</p>
                </div>
              </li>
            )  
          })}
        </ul>
        <div className='bottom'></div>
      </div> : 
        <h3>
          Không tìm thấy hướng dẫn cho đường đi. Vui lòng thử lại. 
        </h3>
        }
    </div>
  )
}

export default Instruction