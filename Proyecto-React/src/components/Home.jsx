import React from 'react';
import Series from './Series';
import Entretenamiento from './Entretenamiento';
import Renderlocation from './Renderlocation';

export default function Home() {
  return (
  <>
    <div className='text-white'>Home</div>
    <Entretenamiento />
    <Series />
    </>
  )
}

