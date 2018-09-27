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
          <flexbox class="text" :gutter="gutterNum">
            <flexbox-item  v-for="item in textItem" :key="item.id">
              {{item.text}}
            </flexbox-item>
          </flexbox>
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
             totalGolds:4522,
             continuousSignDays:1,
             todayGolds:0,
             gutterNum:0,
             activeClass:false,
             items:[
               {"id":"1","text":"10","isActive":false},{"id":"2","text":"15","isActive":false},
               {"id":"3","text":"20","isActive":false},{"id":"4","text":"25","isActive":false},
               {"id":"5","text":"30","isActive":false},{"id":"6","text":"35","isActive":false},
               {"id":"7","text":"40","isActive":false}
             ],
             textItem:[{"id":"1","text":"1天"},{"id":"2","text":"2天"},{"id":"3","text":"3天"},
               {"id":"4","text":"4天"},{"id":"5","text":"5天"},{"id":"6","text":"6天"},{"id":"7","text":"7天及以上"}]
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
      }
    }
</script>
<style lang="less">
  @pinkColor:#FF6192;
  @bgColor:#fff;
  @grayColor:#f2f2f2;
  .themeColor{
    color:  @pinkColor;
  }
  .task-center{
    .vux-header{
      height: 1.17rem;
      background: @bgColor;
      padding:0;
      border-bottom: 1px solid #E6E6E6;
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
      width: 100%;
      height:6.187rem;
      background: @bgColor;
      margin-bottom: 0.266rem;
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
        top: 1.5rem;
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
  }
</style>
