<template>
    <div class="task-center">
      <x-header title="任务中心" :left-options="{backText:''}"/>
      <div class="get-gold">
        <div class="total-golds">签到累积金币：<span class="num">{{totalGolds}}</span></div>
        <a class="right-now-lottery">
          <span>立刻</span>
          <span>抽奖</span>
        </a>
        <div class="sign-in">
          <div class="sign-in-btn">签到领金币</div>
          <div class="sign-in-text">已连续签到<span class="themeColor"> {{continuousSignDays}} </span>天，
          今日签到可得<span class="themeColor"> {{todayGolds}} </span>金币</div>
        </div>
      </div>
    </div>
</template>
<script>
  import XHeader from "../../node_modules/vux/src/components/x-header/index";
    export default{
      components: {XHeader},
      name:"TaskCenter",
       data(){
           return{
             totalGolds:4522,
             continuousSignDays:1,
             todayGolds:15
           }
        }
    }
</script>
<style lang="less">
  @pinkColor:#FF6192;
  @bgColor:#fff;
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
        padding-bottom: 0.3rem;
        .num{
          color:@pinkColor;
        }
      }
      .right-now-lottery{
        display: block;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        border:2px solid @pinkColor;
        span{
          display: block;
          height:auto;
          text-align: center;
          font-size: 0.4rem;
        }
      }
      .sign-in{
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
        }
      }
    }
  }


</style>
