<template>
  <div class="blog">
    <el-container style="height: 1080px; border: 1px solid #eee">
      <el-aside width="300px">
        <div class="aside">
          <!--音乐区域 -->
          <div class="top_banner">
            <div class="music_box">
              <a href>
                <img src="../image/yinle.svg" alt>
              </a>
            </div>
          </div>
          <!-- 中间头像区域 -->
          <div class="personal_img">
            <img
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1770916708,1911260134&fm=27&gp=0.jpg"
              alt
            >
          </div>
          <!-- 底部个人中心 -->
          <div class="middle_banner">
            <h3>
              <router-link to="/home" tag="a">Haverster</router-link>
            </h3>
            <p>一个前端的小学生</p>
            <div class="middle_banner_search">
              <i class="el-icon-search"></i>
              <input type="text">
            </div>
            <!-- 超链接区域 -->
            <div class="middle_banner_href">
              <div>
                <router-link to="/home" tag="a">
                  <img src="../image/shouye1-copy.svg" alt="首页" title="首页">
                </router-link>
              </div>
              <div>
                  <router-link to="/home/document" tag="a">
                  <img src="../image/iconset0152.svg" alt="文档中心" title="文档中心">
               </router-link>
              </div>
              <div>
                <router-link to="/home/category" tag="a">
                  <img src="../image/fenlei-copy.svg" alt="分类" title="分类">
                </router-link>
              </div>
              <div>
                <router-link to="/home/photo" tag="a">
                  <img src="../image/tupian_1.svg" alt="图片中心" title="图片中心">
                </router-link>
              </div>
              <div>
               <router-link to="/home/share" tag="a">
                  <img src="../image/fenxiang.svg" alt="分享" title="分享">
                </router-link>
              </div>
              <div>
                <router-link to="/homen/person" tag="a">
                  <img src="../image/guanyuwomen.svg" alt="关于我" title="关于我">
               </router-link>
              </div>
              <div>
                <router-link to="/home/download" tag="a">
                  <img src="../image/xiazai.svg" alt="相关下载" title="相关下载">
                 </router-link>
              </div>
              <div>
                <router-link to="/homen/night" tag="a">
                  <img src="../image/yejianmoshi.svg" alt="夜间模式" title="夜间模式">
               </router-link>
              </div>
            </div>
          </div>
        </div>
      </el-aside>
      <transition>
      <router-view class="animated zoomIn"></router-view>
      </transition>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.blog {
  height: 100%;
  padding: 0;
  margin: 0;
  background-image: url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2305148691,2698005425&fm=26&gp=0.jpg");
  background-size: 100% 100%;
  overflow: hidden;
}
.aside{
  height:100%;
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
}
.top_banner {
  position: relative;
  height: 200px;
  //   background-color: #b1b1b3;
  background: rgba($color: #b1b1b3, $alpha: 0.8);
}
//音乐盒
.music_box {
  position: absolute;
  height: 34px;
  width: 34px;
  border: 2px solid white;
  // background-color: pink;
  border-radius: 50%;
  top: 50px;
  left: 5px;
  overflow: hidden;
  a {
    margin-top: 4px;
    margin-left: 4px;
    display: block;
    height: 26px;
    width: 26px;
    // background-color: green;
    img {
      width: 100%;
      height: 100%;
      animation: music_box01 linear 2s infinite;
    }
  }
}
@keyframes music_box01 {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
// 个人中心
.middle_banner {
  position: relative;
  height: 100%;
  padding-top: 60px;
  text-align: center;
  background-color: rgba($color: #f1f2f1, $alpha: 0.8);
  h3 a {
    font-family: "-webkit-pictograph";
    font-weight: 600;
    margin-bottom: 10px;
    font-style: inherit;
    cursor: pointer;
    font-size: 30px;
    color: black;
    text-shadow: 0px 0px 1px #eee;
    text-decoration: none;
  }
  h3 a:hover {
    color: #b1b1b3;
  }
  p {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 10px;
    color: black;
    padding: 0;
    margin: 0;
    font-family: serif;
  }
  //搜索框区域
  div {
    position: relative;
    border-radius: 10px;
    input {
      padding: 0;
      height: 20px;
      margin-top: 10px;
      padding-left: 19px;
      border-radius: 10px;
      border-width: 0;
      box-shadow: 0px 0px 1px gray, inset 0px 0px 1px gray;
    }
    i {
      position: absolute;
      top: 13px;
      left: 50px;
      color: #b1b1b3;
      font-size: 16px;
    }
    input:hover {
      box-shadow: 1px 2px 1px grey, 1px -2px 1px grey;
    }
    input:focus{
      border:none;
      outline: none;
    }
  }
  //超链接
  .middle_banner_href {
    position: absolute;
    width: 180px;
    top: 200px;
    left: 50px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    div {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 2px solid gray;
      text-align: center;
      line-height: 40px;
      overflow: hidden;
      margin-bottom: 10px;
      a {
        img {
          width: 50%;
          height: 50%;
        }
      }
    }
  }
}
.aside {
  position: relative;
}

// 侧边栏头像区域
.personal_img {
  position: absolute;
  height: 120px;
  width: 120px;
  border: 5px solid white;
  border-radius: 50%;
  top: 140px;
  left: 50%;
  margin-left: -70px;
  overflow: hidden;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
  }
}
.personal_img:hover {
  animation: personal01 linear 2s alternate;
}
// 头像动画
@keyframes personal01 {
  0% {
    transform: scale(1);
    border: 5px solid lightblue;
  }
  60% {
    border: 5px solid lightblue;
    transform: scale(0.5);
  }
  100% {
    border: 5px solid lightblue;
    transform: scale(0.5) translateX(-260%);
  }
}
// 中心内容动画效果实现
.v-enter {
  transform: translateX(100%);
}

.v-leave-to {
  display: none;
  transform: translateX(200%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}
</style>
