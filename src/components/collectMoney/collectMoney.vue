<template>
  <div>
    <el-card class="box-card cllect_money">
      <el-button type="danger" v-if="flag" @click="getflag" round>危险按钮</el-button>
      <div class="font_size" v-if="!flag">
        <p>微信</p>
        <p>支付宝</p>
      </div>
      <div class="pay" v-if="!flag">
        <div class="pay01">
          <img src="../../image/weixin.png" alt>
        </div>
        <div class="pay02">
          <img src="../../image/zhifubao.png" alt>
        </div>
      </div>
      <p>打赏吃土少年_——_</p>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: true
    };
  },
  methods: {
    getflag() {
      this.flag = !this.flag;
    }
  }
};
</script>
<style lang="scss" scoped>
.cllect_money {
  margin-top: -57px;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 100%;
  height: 260px;
  border-radius: 15px;
  background: rgba($color: #e6eaee, $alpha: 0.8);
  opacity: 0.85;
  text-align: center;
  .font_size {
    width: 340px;
    margin-left: 32%;
    display: flex;
    font-size: 24px;
    justify-content: space-evenly;
    color: red;
  }
  .pay {
    width: 300px;
    // background-color: red;
    margin-left: 34%;
    display: flex;
    justify-content: space-evenly;
    div {
      width: 120px;
      height: 120px;
    //   background-color: aqua;
      img{
          width: 100%;
          height: 100%;
      }
    }
  }
  //   .pay01{
  //       position: absolute;
  //       top: 20px;
  //       left: 40%;
  //   }  .pay02{
  //       position: absolute;
  //       top: 20px;
  //       right: 40%;
  //   }
}
</style>
