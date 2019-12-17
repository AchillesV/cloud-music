import React from 'react';
import styled from 'styled-components';
import Slider from '../../components/slider/index'



function Recommend(){


  return (
    <Content>
      <div>        
        <Slider></Slider>
        {/* <RecommendList></RecommendList> */}
      </div>
    </Content>
  )
}

const Content = styled.div`
  width: 100%;
  position: fixed;
  top: 90px;
  left: 0;
`

export default Recommend;