import React, { useState } from 'react';
import { FilterContext, FilterDispatch } from '../Context/FilterProvider'

export const ShowToggle = () => {
  const state = FilterContext();
  const dispatch = FilterDispatch();
  
    dispatch({ type: 'ISOPEN'})
  
}