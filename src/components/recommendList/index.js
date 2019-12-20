
import React from 'react';
import styled from 'styled-components';

function RecommendList(props){
  const recommendData =  [{
		"id": 3023534021,
		"type": 0,
		"name": "请再稍稍加点油，你一定可以成为更好的自己",
		"copywriter": "编辑推荐：再争口气 一切都会好的",
		"picUrl": "http://p1.music.126.net/hVzHvlj0FYfF3ICVxqDYfg==/109951164547710123.jpg",
		"canDislike": false,
		"trackNumberUpdateTime": 1576658280434,
		"playCount": 1224542.0,
		"trackCount": 78,
		"highQuality": false,
		"alg": "featured"
	}, {
		"id": 3066461681,
		"type": 0,
		"name": "快乐小镇♪愿我们永怀童真 笑对生活",
		"copywriter": "编辑推荐：要做个可爱的人！",
		"picUrl": "http://p1.music.126.net/AQSWeEiq60adWw5u2UVrBw==/109951164479567489.jpg",
		"canDislike": false,
		"trackNumberUpdateTime": 1573882458649,
		"playCount": 201103.0,
		"trackCount": 24,
		"highQuality": false,
		"alg": "featured"
	}, {
		"id": 3051369560,
		"type": 0,
		"name": "虚化了的浪漫，旧故事里隐藏的诗篇",
		"copywriter": "热门推荐",
		"picUrl": "http://p1.music.126.net/AgMwPcjUzDcrdg_VN2isBw==/109951164530329593.jpg",
		"canDislike": true,
		"trackNumberUpdateTime": 1576389497619,
		"playCount": 4446951.0,
		"trackCount": 40,
		"highQuality": false,
		"alg": "cityLevel_unknow"
	}, {
		"id": 310970433,
		"type": 0,
		"name": "【旋律控】超级好听的欧美良曲",
		"copywriter": "热门推荐",
		"picUrl": "http://p1.music.126.net/2MsstS-M9w5-li0aRy3sUQ==/1380986606815861.jpg",
		"canDislike": true,
		"trackNumberUpdateTime": 1554649190002,
		"playCount": 3.27910816E8,
		"trackCount": 363,
		"highQuality": false,
		"alg": "cityLevel_unknow"
	}, {
		"id": 3116652568,
		"type": 0,
		"name": "暗恋歌词本：抄了很多首，每一首都关于你",
		"copywriter": "热门推荐",
		"picUrl": "http://p1.music.126.net/crxsiIl-qUfJjj2J-m08YQ==/109951164546421468.jpg",
		"canDislike": true,
		"trackNumberUpdateTime": 1576227304945,
		"playCount": 4209150.0,
		"trackCount": 30,
		"highQuality": false,
		"alg": "cityLevel_unknow"
	}, {
		"id": 3112856048,
		"type": 0,
		"name": "怀旧经典丨行走的华语金曲留声机",
		"copywriter": "热门推荐",
		"picUrl": "http://p1.music.126.net/82GkSApuzIOg9CM1HJEM0Q==/109951164542791193.jpg",
		"canDislike": true,
		"trackNumberUpdateTime": 1576470527830,
		"playCount": 4861544.0,
		"trackCount": 115,
		"highQuality": false,
		"alg": "cityLevel_unknow"
	}, {
		"id": 2993015219,
		"type": 0,
		"name": "「欧美」听了这些歌，我就是街上最酷的崽",
		"copywriter": "热门推荐",
		"picUrl": "http://p1.music.126.net/FBFfvR2s_kzhYsLAe4dX9A==/109951164376888184.jpg",
		"canDislike": true,
		"trackNumberUpdateTime": 1576459935842,
		"playCount": 771353.0,
		"trackCount": 22,
		"highQuality": false,
		"alg": "cityLevel_unknow"
	}, {
		"id": 863744119,
		"type": 0,
		"name": "100首好听的翻唱",
		"copywriter": "热门推荐",
		"picUrl": "http://p1.music.126.net/p8UsKXA-qjfYuicFEZ_bbw==/109951163822176249.jpg",
		"canDislike": true,
		"trackNumberUpdateTime": 1576768756763,
		"playCount": 8.2510352E7,
		"trackCount": 151,
		"highQuality": false,
		"alg": "cityLevel_unknow"
	}]
  return (
    <div>
      <div style={{paddingTop: 10}}>推荐歌单</div>
      <RecommendContainer>
        {
          recommendData.map((item, key)=>{
            return (
              <div className='recommend-item' key={key}>
                <div className='recommend-img'>
                  <img src={item.picUrl} width='100%' height='100%' alt='歌单' />
                </div>
                <span className='total-play'>▷ {`${parseInt(item.playCount/10000)}w`}</span>
                <span>{item.name.slice(0,16)}</span>
            </div>
            )
          })
        }
      </RecommendContainer>
    </div>
  )
}

const RecommendContainer = styled.div`
  display: flex;
  align-item: center;
  width: 100%;
  flex-wrap: wrap;
  margin: 2% 1%;
  font-size: 14px;
  line-height: 1.2;
  .recommend-item {
    position: relative
    width: 32%;
    margin-bottom: 2%;

    .total-play {
      position: absolute;
      top: 1%;
      right: 1%;
      color: white;
    }
    .recommend-img {
      margin: 2% 0;
    }
  }

  .recommend-item:nth-of-type(3n-1) {
    margin: 0 1%;
  }
`

export default RecommendList