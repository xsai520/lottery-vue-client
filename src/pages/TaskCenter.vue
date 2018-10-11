<template>
  <div class="task-center">
    <x-header title="任务中心" :left-options="{backText:''}"/>
    <div class="get-gold">
      <div class="total-golds">签到累积金币：<span class="num">{{totalGolds}}</span></div>
      <a class="right-now-lottery">
        <span>立刻<br/>抽奖</span>
      </a>
      <div class="sign-in">
        <div class="sign-in-btn">签到领金币</div>
        <div class="sign-in-text">已连续签到<span class="themeColor"> {{continuousSignDays}} </span>天，
          今日签到可得<span class="themeColor"> {{todayGolds}} </span>金币</div>
      </div>
      <div class="golds-num" >
        <flexbox class="golds">
          <flexbox-item v-for="item in items" :key="item.id" :class="{active:item.isActive}">
            <div><span>+</span>{{item.text}}</div>
            <img src="../images/金币@2x.png"/>
          </flexbox-item>
        </flexbox>
        <flexbox class="text" :gutter="0">
          <flexbox-item  v-for="item in textItem" :key="item.id">
            {{item.text}}
            </flexbox-item>
        </flexbox>
      </div>
    </div>
    <div class="newbieTask task">
      <div class="title">新手任务</div>
      <ul>
        <li v-for="item in newbieTask" :key="item.id">
          <flexbox :gutter="0">
            <flexbox-item :span="8">
              <div>
                <div class="radio-box">
                  <span  :class="{activeInput:item.done}"></span>
                </div>
              </div>
              <span class="itemContent">{{item.name}}</span>
            </flexbox-item>
            <flexbox-item :span="4">
              <img class="img2" src="../images/角标@2x.png"/>
              <img class="img1" src="../images/金币@2x.png"/>
              <span class="task-golds">+{{item.gold}}</span>
            </flexbox-item>
          </flexbox>
        </li>
      </ul>
    </div>
    <div class="dayTask task">
      <div class="title">每日任务</div>
      <ul>
        <li v-for="item in dayTask" :key="item.id">
          <flexbox :gutter="0">
            <flexbox-item :span="8">
              <div>
                <div class="radio-box">
                  <span :class="{activeInput:item.done}"></span>
                </div>
              </div>
              <span class="itemContent">
                  {{item.name}}
                  <span v-if="item.progress">{{item.progress}}</span>
                </span>
            </flexbox-item>
            <flexbox-item :span="4">
              <img class="img2" src="../images/角标@2x.png"/>
              <img class="img1" src="../images/金币@2x.png"/>
              <span class="task-golds">+{{item.gold}}</span>
            </flexbox-item>
          </flexbox>
        </li>
      </ul>
    </div>
    <div class="task lottery-type">
      <div class="title" style="padding:0.3rem 0.3rem 0 0.3rem">签到抽奖</div>
      <div class="regular-lottery lottery">
        <div class="name-box">
          <div class="name">普通抽奖</div>
        </div>
        <div class="lottery-box">
          <!--上-->
          <div class="dotted dots-top-left" v-for="item in dots" style="top:0.08rem;" :style="{left:item+'rem'}" :key="'top-left'+item"></div>
          <!--右-->
          <div class="dotted dots-top-right" v-for="item in dots" style="left:9.12rem;" :style="{top:item+'rem'}" :key="'top-right'+item"></div>
          <!--下-->
          <div class="dotted dots-bottom-right" v-for="item in dots" style="top:9.12rem" :style="{right:item+'rem'}" :key="'bottom-left'+item"></div>
          <!--左-->
          <div class="dotted dots-bottom-left" v-for="item in dots"  style="left:0.08rem;" :style="{bottom:item+'rem'}" :key="'bottom-right'+item"></div>
          <ul class="bg2"  :gutter="0" wrap="wrap" >
            <li class="lottery-item" :span="4" v-for="(item,index) in lotteryItems" :key="index">
              <div class="lottery-mask" v-if="index==4" :class="{lottery_mask_active:isLotteryMaskShow}"></div>
              <div class="prize" :class="{prizeActive:item.isActive}" v-if="index==4" @click="regularLottery"  style="position:relative;background:#845ae8;border-color:#9b79ec">
                <div class="prize-text">抽奖</div>
                <div class="prize-num">剩余：<span>{{lotteryNum}}</span>次</div>
              </div>
              <div class="prize" :class="{prizeActive:item.isActive}" v-else>
                <div class="prize-img"><img src="../assets/prize.jpg"/></div>
                <div class="prize-name">{{item.prizeName}}</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="tip">*每连续签到5天获得1次普通抽奖机会</div>
      </div>
      <div class="super-lottery lottery">
        <div class="name-box">
          <div class="name">超级抽奖</div>
        </div>
        <div class="lottery-box">
          <!--上-->
          <div class="dotted dots-top-left" v-for="item in dots" style="top:0.08rem;" :style="{left:item+'rem'}" :key="'super-top-left'+item"></div>
          <!--右-->
          <div class="dotted dots-top-right" v-for="item in dots" style="left:9.12rem;" :style="{top:item+'rem'}" :key="'super-top-right'+item"></div>
          <!--下-->
          <div class="dotted dots-bottom-right" v-for="item in dots" style="top:9.12rem" :style="{right:item+'rem'}" :key="'super-bottom-left'+item"></div>
          <!--左-->
          <div class="dotted dots-bottom-left" v-for="item in dots"  style="left:0.08rem;" :style="{bottom:item+'rem'}" :key="'super-bottom-right'+item"></div>
          <ul class="bg2"  :gutter="0" wrap="wrap" >
            <li class="lottery-item" :span="4" v-for="(item,index) in superItems" :key="index" >
              <div class="lottery-mask" v-if="index==4"  :class="{super_mask_active:isSuperMaskShow}"></div>
              <div class="prize" :class="{prizeActive:item.isActive}" v-if="index==4" style="position:relative;background:#fe4d82;border-color:#fe6e99" @click="superLottery">
                <div class="prize-text">抽奖</div>
                <div class="prize-num">剩余：<span>{{superLotteryNum}}</span>次</div>
              </div>
              <div class="prize" :class="{prizeActive:item.isActive}" v-else>
                <div class="prize-img"><img src="../assets/prize.jpg"/></div>
                <div class="prize-name">{{item.prizeName}}</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="tip">*每连续签到30天获得3次超级抽奖机会</div>
      </div>
    </div>
  </div>
</template>
<script>
  import {XHeader,Flexbox,FlexboxItem} from 'vux'
  export default{
    components: {XHeader,Flexbox,FlexboxItem},
    name:"TaskCenter",
    data(){
      return{
        dots:["0.08","1","2","3","4","5","6","7","8"],
        totalGolds:4522,
        continuousSignDays:1,
        todayGolds:0,
        activeClass:false,
        lotteryNum:5,
        superLotteryNum:5,
        activeId:-1,
        isLotteryMaskShow:false,
        isSuperMaskShow:false,
        items:[
          {"id":"1","text":"10","isActive":false},{"id":"2","text":"15","isActive":false},
          {"id":"3","text":"20","isActive":false},{"id":"4","text":"25","isActive":false},
          {"id":"5","text":"30","isActive":false},{"id":"6","text":"35","isActive":false},
          {"id":"7","text":"40","isActive":false}
        ],
        textItem:[{"id":"1","text":"1天"},{"id":"2","text":"2天"},{"id":"3","text":"3天"},
          {"id":"4","text":"4天"},{"id":"5","text":"5天"},{"id":"6","text":"6天"},{"id":"7","text":"7天"}],
        newbieTask:[
          {"id":"1","name":"完成注册登录","gold":500,"done":true},
          {"id":"2","name":"完善个人信息","gold":500,"done":false},
          {"id":"3","name":"完成实名认证","gold":1000,"done":false}
        ],
        dayTask:[
          {"id":"1","name":"开启看苏州","gold":10,"done":false},
          {"id":"2","name":"在看苏州停留15分钟","gold":50,"done":false},
          {"id":"3","name":"阅读5篇文章","progress":"(今日进度2/5篇)","gold":50,"done":true},
          {"id":"4","name":"完成3次评论","progress":"(今日进度1/3次)","gold":30,"done":false},
          {"id":"5","name":"回复他人评论3次","progress":"(今日进度0/3次)","gold":30,"done":false},
          {"id":"6","name":"分享精彩好文","gold":20,"done":false}
        ],
        lotteryItems:[
          {"id":1,"prizeName":"一等奖","prizeImg":"","isActive":false},
          {"id":2,"prizeName":"二等奖","prizeImg":"","isActive":false},
          {"id":3,"prizeName":"三等奖","prizeImg":"","isActive":false},
          {"id":4,"prizeName":"四等奖","prizeImg":"","isActive":false},
          {"id":5,"prizeName":"","prizeImg":""},
          {"id":6,"prizeName":"五等奖","prizeImg":"","isActive":false},
          {"id":7,"prizeName":"六等奖","prizeImg":"","isActive":false},
          {"id":8,"prizeName":"七等奖","prizeImg":"","isActive":false},
          {"id":9,"prizeName":"八等奖","prizeImg":"","isActive":false}],
        superItems:[
          {"id":1,"prizeName":"一等奖","prizeImg":"","isActive":false},
          {"id":2,"prizeName":"二等奖","prizeImg":"","isActive":false},
          {"id":3,"prizeName":"三等奖","prizeImg":"","isActive":false},
          {"id":4,"prizeName":"四等奖","prizeImg":"","isActive":false},
          {"id":5,"prizeName":"","prizeImg":""},
          {"id":6,"prizeName":"五等奖","prizeImg":"","isActive":false},
          {"id":7,"prizeName":"六等奖","prizeImg":"","isActive":false},
          {"id":8,"prizeName":"七等奖","prizeImg":"","isActive":false},
          {"id":9,"prizeName":"八等奖","prizeImg":"","isActive":false}]
      }
    },
    mounted:function(){
      if(this.continuousSignDays>7){
        this.items[this.items.length-1].isActive = true;
        this.todayGolds = this.items[this.items.length-1].text;
      }else{
        this.items[this.continuousSignDays-1].isActive=true;
        this.todayGolds = this.items[this.continuousSignDays-1].text;

      }
    },
    methods:{
      regularLottery:function () {
        //剩余次数
        if(this.lotteryNum==0){ //如果剩余次数为0的，则弹框提示
          this.$vux.alert.show({
            title: '提示',
            content: '抽奖次数已达上限'
          })
        }else{
          this.lotteryNum = this.lotteryNum-1;
          this.commonLottery("regular",this.lotteryItems,3);//3是中奖id
        }
      },
      superLottery:function () {
        //剩余次数
        if(this.superLotteryNum==0){
          this.$vux.alert.show({
            title: '提示',
            content: '抽奖次数已达上限'
          })
        }else{
          this.superLotteryNum = this.superLotteryNum-1;
          this.commonLottery("super",this.superItems,2);
        }
      },
      commonLottery(type,lotteryItems,prizeId){ //type是抽奖类型
        //点击抽奖之后将点击按钮进行锁定
        if(type=="regular"){
          this.isLotteryMaskShow = true;
        }else{
          this.isSuperMaskShow = true;
        }
        let array=[0,1,2,5,8,7,6,3]; //这是抽奖要走的路线位置，每个数字代表抽奖数组的下标
        let n=0;
        let activeId = -1;
        let timer = setInterval(()=>{
          lotteryItems.forEach((item)=>{
            item.isActive=false;
          });
          lotteryItems[array[n]].isActive=true;
          activeId = lotteryItems[array[n]].id;
          n++;
          if(n==8){
            n=0;
          }
          //模拟请求接口返回
          setTimeout(()=>{
            //假如中了一等奖,只需要把中奖的id返回即可
            if(activeId==prizeId){
              clearInterval(timer);
              //获取中奖商品之后对抽奖按钮进行解锁
              if(type=="regular"){
                this.isLotteryMaskShow = false;
              }else{
                this.isSuperMaskShow = false;
              }
            }
          },2000)
        },200);
      }
    }
  }
</script>
<style lang="less">
  @pinkColor:#FF6192;
  @bgColor:#fff;
  @grayColor:#f2f2f2;
  @lotteryBox:8.46rem;
  .themeColor{
    color:  @pinkColor;
  }
  .task-center{
    .vux-header{
      position: fixed;
      width: 100%;
      height: 1.17rem;
      background: @bgColor;
      padding:0;
      border-bottom: 1px solid #E6E6E6;
      z-index: 9999;
      .vux-header-title{
        color:@pinkColor;
        font-size: 0.53rem;
      }
      .left-arrow{
        padding-left: 0.5rem;
        &:before{
          top: 7px !important;
          border-color:@pinkColor !important;
          border-width: 2px 0 0 2px !important;
        }
      }
    }
    .get-gold{
      position: relative;
      top: 1.17rem;
      width: 100%;
      height:6.187rem;
      background: @bgColor;
      .total-golds{
        font-size: 0.41rem;
        color: #666;
        height:1rem;
        line-height: 1rem;
        padding-left: 0.4rem;
        padding-bottom: 0.4rem;
        .num{
          color:@pinkColor;
        }
      }
      .right-now-lottery{
        position:absolute;
        top: 0.3rem;
        right: 0.4rem;
        display:block;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        border:2px solid @pinkColor;
        color:@pinkColor;
        span{
          display: flex;
          font-size: 0.4rem;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }
      }
      .sign-in{
        height:auto;
        .sign-in-btn{
          width:3.52rem;
          height:1.013rem;
          line-height: 1.013rem;
          margin:0 auto;
          text-align: center;
          color: #fff;
          font-size: 0.5rem;
          background:@pinkColor;
          border-radius: 1rem;
        }
        .sign-in-text{
          text-align: center;
          font-size: 0.41rem;
          padding-top: 0.293rem;
          color: #666;
        }
      }
      .golds-num{
        width: 96%;
        height: auto;
        margin: 0.3rem 2% 0;
        .golds{
          .vux-flexbox-item{
            text-align: center;
            border-radius:4px;
            height:1.586rem;
            background:@grayColor;
            margin-left: 0.15rem !important;
            div{
              height:0.7rem;
              padding-top:0.25rem;
              font-size: 0.45rem;
              color:@pinkColor;
              span:last-child{
                font-size: 0.5rem;
              }
            }
            img{
              width: 0.43rem;
              height: 0.43rem;
            }
          }
        }
        .text{
          margin-top: 0.1rem;
          .vux-flexbox-item{
            text-align: center;
            color: #666;
          }
        }
      }
    }
    .active{
      background:@pinkColor !important;
      div{
        color:#fff !important;
      }
      img{
        width:0.48rem !important;
        height:0.48rem !important
      }
    }
    .task{
      height:auto;
      background:@bgColor;
      margin-top: 0.266rem;
      padding: 0.3rem 0.3rem 0.4rem;
      .title{
        padding-bottom: 0.2rem;
        color: #333;
        font-size:0.43rem;
      }
      ul{
        li{
          height: 0.8rem;
          line-height: 0.8rem;
          .vux-flexbox-item{
            position: relative;
            div{
              position: absolute;
              width: 0.33rem;
              height: 0.33rem;
              z-index:1;
              .radio-box{
                display: flex;
                float: left;
                border:1px solid #cccccc;
                border-radius: 50%;
                margin: 0.2rem 0.3rem 0.2rem 0.2rem;
                align-items: center;
                justify-content: center;
                .activeInput{
                  width: 0.15rem;
                  height: 0.15rem;
                  background:@pinkColor;
                  border-radius: 50%;
                }
              }
            }
            .itemContent{
              margin-left: 1rem;
            }
          }
          .task-golds,img{
            display: block;
            float: right;
            width: auto;
            font-size: 0.45rem;

          }
          .img1{
            width: 0.43rem;
            height: 0.43rem;
            margin: 0.15rem 0.1rem 0.1rem 0.1rem;
          }
          .img2{
            width: 0.32rem;
            height: 0.16rem;
            margin: 0.3rem 0.1rem 0.1rem 0.1rem;
          }
        }
      }
    }
    .lottery-type{
      padding:0 !important;
    }
    .lottery{
      .name-box{
        position: relative;
        width: 50%;
        height: 0.4rem;
        margin:0 auto;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        .name{
          position: absolute;
          top:-0.2rem;
          left:30%;
          width:40%;
          height:0.6rem;
          line-height: 0.6rem;
          color:#fff;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          text-align: center;
          font-size: 0.35rem;
        }
      }
      .lottery-box{
        position:relative;
        width: 9.36rem;
        height:9.36rem;
        margin: 0 auto;
        padding:0.305rem;
        box-sizing: border-box;
        border-radius: 4px;
        .dotted{
          position:absolute;
          width: 0.16rem;
          height: 0.16rem;
          background: rgba(255,255,255,0.5);
          border-radius:50%;
        }
        .dots-top-left:nth-child(even),
        .dots-top-right:nth-child(even),
        .dots-bottom-right:nth-child(even),
        .dots-bottom-left:nth-child(even),
        .dots-super-top-left:nth-child(even),
        .dots-super-top-right:nth-child(even),
        .dots-super-bottom-right:nth-child(even),
        .dots-super-bottom-left:nth-child(even){
          background: rgba(255,255,255,1);
        }
        .bg2{
          width:8.55rem;
          height:8.55rem;
          border-radius: 4px;
          padding: 0.1rem;
          .lottery-item{
            float: left;
            width:2.85rem;
            height:2.85rem;
            overflow: hidden;
            .prize{
              width:2.65rem;
              height:2.65rem;
              margin: 0.1rem auto;
              border:0.1rem solid rgba(255,255,255,0);
              background:  rgba(255,255,255,0.8);
              border-radius: 4px;
              box-sizing: border-box;
              .prize-img{
                width:2.13rem;
                height:1.6rem;
                margin: 0.1rem auto;
                img{
                  display: block;
                  width: 100%;
                  height: 100%;
                }
              }
              .prize-name{
                width:100%;
                height:0.7rem;
                text-align: center;
                line-height: 0.7rem;
              }
              .prize-text{
                display: flex;
                height:1.6rem;
                align-items: center;
                justify-content: center;
                font-size: 0.95rem;
                color: #fff;
              }
              .prize-num{
                color: #fff;
                text-align: center;
              }
            }
            &:nth-child(5){
              position: relative;
            }
          }
        }
      }
      .tip{
        width:9.36rem;
        margin:0 auto;
        color: #666;
        font-size: 0.37rem;
      }
      margin-bottom: 0.7rem;
    }
    .regular-lottery {
      .name-box{
        background: #f2800f;
        .name{
          background: #845ae8;
        }
      }
      .lottery-box{
        background: #ebcd0b;
        .bg2{
          background:#f3810f;
          .prizeActive{
            border-color:#845AE8 !important;
          }
          .prize-name{
            color: #845AE8;
          }
        }
      }
    }
    .super-lottery {
      .name-box{
        background: #cf3e69;
        .name{
          background: #fe4d82;
        }
      }
      .lottery-box{
        background: #fe4d82;
        .bg2{
          background:#ebcd0a;
          .prizeActive{
            border-color:#FE4D82 !important;
          }
          .prize-name{
            color: #FE4D82 ;
          }
        }
      }
    }
    .lottery-mask{
      position: absolute;
      display:none;
      width: 2.85rem;
      height: 2.85rem;
      background: rgba(0, 0, 0, 0.5);
      z-index: 9999;
      top: 0rem;
      left: 0rem;
      border-radius: 4px;
    }
    .lottery_mask_active{
      display:block;
    }
    .super_mask_active{
      display:block;
    }
  }
</style>
