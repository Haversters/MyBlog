<template>
  <div class="blog">
    <el-container style="height:1080px; border: 1px solid #eee">
      <el-aside width style="background-color: rgb(238, 241, 246);opacity:0.7" class="hidden-sm-and-down">
        <el-radio-group
          v-model="isCollapse"
          style="margin-bottom: 10px;margin-top:5px"
          :class="{'margin_left':!isCollapse}"
        >
          <el-radio-button :label="false">
            展开
            <i :class="{'el-icon-arrow-right':isCollapse}"></i>
          </el-radio-button>
          <el-radio-button :label="true" :class="{'none':isCollapse}">
            <i :class="{'el-icon-arrow-left':!isCollapse}">闭合</i>
          </el-radio-button>
        </el-radio-group>
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">个人首页</span>
            </template>
            <el-menu-item-group>
              <!-- 超链接区域 -->
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">
                <router-link to="/home" tag="a">
                  <img class="imgg" src="../image/shouye1-copy.svg" alt="首页" title="首页">首页
                </router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/home/document" tag="a">
                  <img class="imgg" src="../image/iconset0152.svg" alt="文档中心" title="文档中心">文档中心
                </router-link>
              </el-menu-item>
              <el-menu-item index="1-3">
                <router-link to="/home/category" tag="a">
                  <img class="imgg" src="../image/fenlei-copy.svg" alt="分类" title="分类">分类
                </router-link>
              </el-menu-item>
              <el-menu-item index="1-4">
                <router-link to="/home/photo" tag="a">
                  <img class="imgg" src="../image/tupian_1.svg" alt="图片中心" title="图片中心">图片中心
                </router-link>
              </el-menu-item>
              <el-menu-item index="1-5">
                <router-link to="/home/share" tag="a">
                  <img class="imgg" src="../image/fenxiang.svg" alt="分享" title="分享">分享
                </router-link>
              </el-menu-item>
              <el-menu-item index="1-6">
                <router-link to="/homen/person" tag="a">
                  <img class="imgg" src="../image/guanyuwomen.svg" alt="关于我" title="关于我">关于我
                </router-link>
              </el-menu-item>
              <el-menu-item index="1-7">
                <router-link to="/home/download" tag="a">
                  <img class="imgg" src="../image/xiazai.svg" alt="相关下载" title="相关下载">相关下载
                </router-link>
              </el-menu-item>
              <el-menu-item index="1-8">
                <router-link to="/homen/night" tag="a">
                  <img class="imgg" src="../image/yejianmoshi.svg" alt="夜间模式" title="夜间模式">夜间模式
                </router-link>
              </el-menu-item>
              <el-menu-item index="1-9">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2" >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">待开发商城</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="2-1">
                <router-link to="/shopping/homepage" tag="a">
                  <img class="imgg" src="../image/yejianmoshi.svg" alt="商城首页" title="商城首页">商城首页
                </router-link>
              </el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <span slot="title">选项4</span>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">商城首页</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px;opacity:0.8;position:relative">
          <el-dropdown>
            <i class="el-icon-menu" style="margin-right: 40px;font-size:20px;"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/home" tag="a">
                  <img class="imgg" src="../image/shouye1-copy.svg" alt="首页" title="首页">首页
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/home/document" tag="a">
                  <img class="imgg" src="../image/iconset0152.svg" alt="文档中心" title="文档中心">文档中心
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/home/category" tag="a">
                  <img class="imgg" src="../image/fenlei-copy.svg" alt="分类" title="分类">分类
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/home/photo" tag="a">
                  <img class="imgg" src="../image/tupian_1.svg" alt="图片中心" title="图片中心">图片中心
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/home/share" tag="a">
                  <img class="imgg" src="../image/fenxiang.svg" alt="分享" title="分享">分享
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/homen/person" tag="a">
                  <img class="imgg" src="../image/guanyuwomen.svg" alt="关于我" title="关于我">关于我
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/home/download" tag="a">
                  <img class="imgg" src="../image/xiazai.svg" alt="相关下载" title="相关下载">相关下载
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/homen/night" tag="a">
                  <img class="imgg" src="../image/yejianmoshi.svg" alt="夜间模式" title="夜间模式">夜间模式
                </router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- 顶部头像区域 -->
          <div>
            <span class="personal_img">
              <img
                class="personal_imgg"
                src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1770916708,1911260134&fm=27&gp=0.jpg"
                alt
              >
            </span>
          </div>
        </el-header>

        <el-main>
          <transition>
            <router-view class="animated zoomIn"></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item),
      isCollapse: false,
      heightt: ""
    };
  },
  beforeCreate() {
    // var blog = document.getElementsByClassName('blog');
    var w = document.documentElement.clientHeight || document.body.clientHeight;
    //750这个数字是根据你的设计图的实际大小来的，所以值具体根据设计图的大小
    // html.style.fontSize =20*(w / 750) + "px";
    // blog.style.height=w;
    // html.style.fontSize = w / 3.75 + 'px';
    this.heightt = w + "px";
    console.log(this.heightt);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.blog {
  height: 100%;
  padding: 0;
  margin: 0;
  background-image: url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2305148691,2698005425&fm=26&gp=0.jpg");
  background-size: 100% 100%;
  overflow: hidden;
}
.elcontainer {
  padding: 0;
  margin: 0;
  background-image: url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2305148691,2698005425&fm=26&gp=0.jpg");
  background-size: 100% 100%;
  overflow: hidden;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-image: url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2305148691,2698005425&fm=26&gp=0.jpg");
  color: #333;
}
.none {
  display: none;
}
.block {
  display: block;
}
.margin_left {
  margin-left: 10px;
}
a {
  text-decoration: none;
  color: gray;
  font-size: 14px;
}
.imgg {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 5px;
}
/* // 中心内容动画效果实现 */
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
/* // 侧边栏头像区域 */
.personal_img {
  display: inline-block;
  height: 40px;
  width: 40px;
  border: 5px solid white;
  border-radius: 50%;
  overflow: hidden;
  z-index: 1;
  position: absolute;
  top: 6px;
  left: 10px;
}
.personal_imgg {
  width: 100%;
  height: 100%;
}
.personal_img:hover {
  animation: personal01 linear 2s alternate;
}
/* // 头像动画 */
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
    transform: scale(0.5) translateX(360%);
  }
}
</style>
