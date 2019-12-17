import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Swiper from 'swiper';
import "swiper/css/swiper.css";

function Slider(props) {
  const [sliderSwiper, setSliderSwiper] = useState(null);
  // const { bannerList } = props;
  const bannerList = [{
		"picUrl": "http://p1.music.126.net/sg2bQzsML_XVAgGCqJF3PA==/109951164563953200.jpg",
		"url": "/song?id=1407551413",
		"targetId": "1407551413",
		"backgroundUrl": "",
		"targetType": "1",
		"monitorType": "",
		"monitorImpress": "",
		"monitorClick": "",
		"backgroundColor": ""
	}, {
		"picUrl": "http://p1.music.126.net/C4rhO4OXqt8jnHiF_GhP9Q==/109951164554085275.jpg",
		"url": "/song?id=1408763442",
		"targetId": "1408763442",
		"backgroundUrl": "",
		"targetType": "1",
		"monitorType": "",
		"monitorImpress": "",
		"monitorClick": "",
		"backgroundColor": ""
	}, {
		"picUrl": "http://p1.music.126.net/QbXHjBCZYXJu31Xtz-B8zw==/109951164554145283.jpg",
		"url": "/song?id=1409540467",
		"targetId": "1409540467",
		"backgroundUrl": "",
		"targetType": "1",
		"monitorType": "",
		"monitorImpress": "",
		"monitorClick": "",
		"backgroundColor": ""
	}, {
		"picUrl": "http://p1.music.126.net/LGM0_7DkDbhc27DnptOAVA==/109951164554156000.jpg",
		"url": "/song?id=1409966500",
		"targetId": "1409966500",
		"backgroundUrl": "",
		"targetType": "1",
		"monitorType": "",
		"monitorImpress": "",
		"monitorClick": "",
		"backgroundColor": ""
	}, {
		"picUrl": "http://p1.music.126.net/PA5LroNudUDpQ_VN5EVidg==/109951164554096643.jpg",
		"url": "/album?id=83689416",
		"targetId": "83689416",
		"backgroundUrl": "",
		"targetType": "10",
		"monitorType": "",
		"monitorImpress": "",
		"monitorClick": "",
		"backgroundColor": ""
	}, {
		"picUrl": "http://p1.music.126.net/px9qQ5_YeMWnVgIciSqOtg==/109951164554101660.jpg",
		"url": "/song?id=1409951058",
		"targetId": "1409951058",
		"backgroundUrl": "",
		"targetType": "1",
		"monitorType": "",
		"monitorImpress": "",
		"monitorClick": "",
		"backgroundColor": ""
	}, {
		"picUrl": "http://p1.music.126.net/QxqE00cTpJjv6dR8VOxscA==/109951164554163032.jpg",
		"url": "/song?id=1410033727",
		"targetId": "1410033727",
		"backgroundUrl": "",
		"targetType": "1",
		"monitorType": "",
		"monitorImpress": "",
		"monitorClick": "",
		"backgroundColor": ""
	}, {
		"picUrl": "http://p1.music.126.net/CJy0eav9fyT8BnLYjL0Rcw==/109951164554163188.jpg",
		"url": "/song?id=1409995344",
		"targetId": "1409995344",
		"backgroundUrl": "",
		"targetType": "1",
		"monitorType": "",
		"monitorImpress": "",
		"monitorClick": "",
		"backgroundColor": ""
	}, {
		"picUrl": "http://p1.music.126.net/dO8lnkrePSRI2-h0e6909A==/109951164563769849.jpg",
		"url": "https://music.163.com/m/at/5df76f775ac64a9b79d4f30b",
		"targetId": "0",
		"backgroundUrl": "",
		"targetType": "3000",
		"monitorType": "",
		"monitorImpress": "",
		"monitorClick": "",
		"backgroundColor": ""
	}]

  useEffect(()=>{
    if(bannerList.length || !sliderSwiper) {
      let sliderSwiper = new Swiper(".slider-container", {
        loop: true,
        autoplay: {
          delay: 3000,
          /* disableOnInteraction: false, */
        },
        pagination: {el: '.swiper-pagination'},
      });

      setSliderSwiper(sliderSwiper);
    }
  },[bannerList.length, sliderSwiper])

  return (
    <SliderContainer>
      <div className="before"></div>

      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map(slider => {
              return (
                <div className='swiper-slider' key={slider.picUrl} >
                  <div className='slider-nav'>
                    <img src={slider.picUrl} width='100%' height='100%' alt='推荐' />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </SliderContainer>
  )
}

const SliderContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: auto;
  background: white;
  .before{
    position: absolute;
    top: -300px;
    height: 400px;
    width: 100%;
    background: #d44439;
    z-index: 1;
  }
  .slider-container{
    position: relative;
    width: 98%;
    height: 160px;
    overflow: hidden;
    margin: auto;
    border-radius: 6px;
    .slider-nav{
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
    .swiper-pagination-bullet-active{
      background: #d44439;
    }
  }
`

export default Slider;