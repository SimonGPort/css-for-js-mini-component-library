/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBarContainer=styled.div`
overflow:hidden;
width:370px;
box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
background: rgba(128, 128, 128, 0.15);


border-radius: ${props =>{ 
  if(props.size==="large"){
    return '8px'
  }else{return '4px'}}};

height:${props =>{ 
  if(props.size==="large"){
    return '24px'
  }
  if(props.size==="medium"){
    return '12px'
  }
  if(props.size==="small"){
    return '8px'
  }
}
}
`

const Progress=styled.div`
background: #4747EB;
border-radius:  4px 0px 0px 4px;
height:100%;
width:${props =>{return props.value+'%' }}
`


const ProgressBar = ({ value, size }) => {





  return (<ProgressBarContainer size={size}>
<Progress value={value}/>
  </ProgressBarContainer>)
};

export default ProgressBar;
