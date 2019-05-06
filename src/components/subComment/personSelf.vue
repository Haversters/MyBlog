<template>
  <el-container class="box">
    <el-main>
      <el-card class="box-card animated flip">
        <h3 >Haverster</h3>
        <p>一个前端的小学生</p>
        <section>喜欢看书，听歌，动漫，空闲时间喜欢听电台，目前从事web前端，平时喜欢逛逛各大技术论坛。</section>
      </el-card>
    </el-main>
  </el-container>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
//   自定义样式
.box {
  background: rgba($color: #e6eaee, $alpha: 0.8);
  opacity: 0.85;
}
.box-card {
  width: 100%;
  height: 100%;
  text-align: center;
  h3 {
    font-family: "-webkit-pictograph";
    font-weight: 600;
    margin-bottom: 10px;
    font-style: inherit;
    cursor: default;
    font-size: 30px;
    color: black;
    text-shadow: 0px 0px 1px #eee;
    text-decoration: none;
  }
  p {
    cursor: default;
  }
  //   .personself_img {
  //     position: absolute;
  //     height: 120px;
  //     width: 120px;
  //     border: 5px solid white;
  //     border-radius: 50%;
  //     top: 140px;
  //     left: 50%;
  //     margin-left: -70px;
  //     overflow: hidden;
  //     z-index: 1;
  //     img {
  //       width: 100%;
  //       height: 100%;
  //     }
  //   }
}
</style>
