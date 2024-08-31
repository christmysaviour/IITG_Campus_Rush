
import React from 'react';
import './routes.css';

const Routes = (props) => {
  const shortestPathIndex = props.dataPoint.paths.findIndex(pathObj => pathObj.distance === Math.min(...props.dataPoint.paths.map(p => p.distance)));

  return (
    <div className='routesContainer'>
      <div className='source'>
        <div className='labelText'>Source: </div>
        <div className='sourceData'>{props.dataPoint.from}</div>
      </div>
      <div className='destination'>
        <div className='labelText'>Destination: </div>
        <div className='destinationData'>{props.dataPoint.to}</div>
      </div>
      
      <div className='pathsContainer'>
        <div className='labelText'>Paths (sorted from shortest to longest):</div>
        {props.dataPoint.paths.map((pathObj, index) => (
          <div key={index} className={`pathCard ${index === shortestPathIndex ? 'shortestPathCard' : ''}`}>
            <div className='cardHeader'>Path {index + 1}</div>
            <div className='cardContent'>
              <div className='spots'>
                {pathObj.path.join(' → ')}
              </div>
              <div className='distanceData'>{pathObj.distance} m</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Routes;

