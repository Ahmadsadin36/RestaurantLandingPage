import React from 'react';
import { images } from '../../constants';

const SubHeading = ({title}) => (
  <div className=' mb-4'>
    <h2>{title}</h2>
    <img src= {images.spoon} alt="" />
  </div>
);

export default SubHeading;
