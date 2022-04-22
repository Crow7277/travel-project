 <swiper  :options="swiperOption" ref="swiperLogin"  >
        <swiper-slide v-for="(item,index) in carouselList" :key="index" >
              <img :src="item.path" style="width:100%;height:100%" alt=""/>
          </swiper-slide>
   </swiper>

    data(){
            return {
                carouselList: [   //图片
                    {path: require('../assets/one.jpg')},
                    {path: require('../assets/two.jpg')},
                    {path: require('../assets/three.jpg')},
                    {path: require('../assets/four.jpg')},
                    {path: require('../assets/six.jpg')},
                    {path: require('../assets/seven.jpg')},
                    {path: require('../assets/eight.jpg')},
                    {path: require('../assets/night.jpg')},
                    {path: require('../assets/ten.jpg')}
                ],
             }
      }       
