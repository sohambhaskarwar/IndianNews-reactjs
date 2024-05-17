import React from 'react';
import Loader from '../loader.gif'

export default function Loading () {
  
    return (
      <div className='text-center'>
        <img alt='' src={Loader} style={{mixBlendMode:"light"}}/>
      </div>
    );
}
