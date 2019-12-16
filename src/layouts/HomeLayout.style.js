import styled from 'styled-components';
// import style from '../assets/global-style';

export const Top=styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  font-size: 120%
  padding: 2%
  .menu, .search{
    font-size: 130%
  }
}

  span {
    flex: 1
  }

  span:nth-of-type(2) {
    text-align: center;
  }

  span:nth-of-type(3) {
    text-align: right;
  }


  

`;

export const Tab=styled.div`
  display: flex
  align-item: center;
  justify-content: center;
  padding: 2% 4%;
  text-align: center;
  span {
    color: black;
  }
`;

export const TabItem=styled.div`
  width: 66px;
`
