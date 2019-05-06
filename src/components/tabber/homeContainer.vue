<template>
  <el-container>
    <el-main class="home_main">
      <el-card v-for="(item,index) in list" :key="index" class="box-card animated flip">
        <div slot="header" class="clearfix">
          <div class="main_title_header">
            <div class="right">{{item.title}}</div>
            <div class="left">
              <span class="time_log">
                <img src="../../image/riqi_1.svg" alt>
              </span>
              <span class="time_d">{{item.date}}</span>
            </div>
          </div>
          <div class="main_middle_header">
            <section v-html="item.content"></section>
          </div>
        </div>
        <div class="text item main_middle_href">
          <!-- 箭头区域 -->
          <div class="crrows_box">
            <div class="main_crrows01">
              <img src="../../image/iconset0152.svg" alt>
              <a href @click.prevent="open11">
                <span class="triangle_left"></span>
                <span class="triangle_right">{{item.category[0]}}</span>
              </a>
            </div>
            <div class="main_crrows01">
              <img src="../../image/fenlei-copy.svg" alt>
              <a href @click.prevent="open12">
                <span class="triangle_left bd_color01"></span>
                <span class="triangle_right bg_color01">{{item.category[1]}}</span>
              </a>
            </div>
            <div class="main_crrows01">
              <a href @click.prevent="open13">
                <span class="triangle_left bd_color02"></span>
                <span class="triangle_right bg_color02">{{item.category[2]}}</span>
              </a>
            </div>
          </div>
          <!-- 阅读全文超链接 -->
          <router-link :to="{path:'/homen/artical',query:{i:index}}" class="artical_href" tag="div">
            <span>阅读全文</span>
            <span>>></span>
          </router-link>
        </div>
      </el-card>
      <el-card class="box-card animated zoomIn">
        <div slot="header" class="clearfix">
          <div class="main_title_header">
            <div class="right">验证登录机制</div>
            <div class="left">
              <span class="time_log">
                <img src="../../image/riqi_1.svg" alt>
              </span>
              <span class="time_d">2018-07-16</span>
            </div>
          </div>
          <div class="main_middle_header">
            <section>如果安全要求不高，可在前端直接用localstorage或sessionstorage这些浏览器存储存放用户信息。</section>安全性要求高，就如上面所说用JWT来做。其实归根接地都是用浏览器存储做
          </div>
        </div>
        <div class="text item main_middle_href">
          <!-- 箭头区域 -->
          <div class="crrows_box">
            <div class="main_crrows01">
              <img src="../../image/iconset0152.svg" alt>
              <a href @click.prevent="open11">
                <span class="triangle_left"></span>
                <span class="triangle_right">前端</span>
              </a>
            </div>
            <div class="main_crrows01">
              <img src="../../image/fenlei-copy.svg" alt>
              <a href @click.prevent="open12">
                <span class="triangle_left bd_color01"></span>
                <span class="triangle_right bg_color01">LocalStorage</span>
              </a>
            </div>
            <div class="main_crrows01">
              <a href @click.prevent="open13">
                <span class="triangle_left bd_color02"></span>
                <span class="triangle_right bg_color02">SessionStorage</span>
              </a>
            </div>
          </div>
          <!-- 阅读全文超链接 -->
          <router-link :to="{path:'/homen/artical',query:{i:0}}" class="artical_href" tag="div">
            <span>阅读全文</span>
            <span>>></span>
          </router-link>
        </div>
      </el-card>
      <el-card class="box-card animated zoomIn">
        <div slot="header" class="clearfix">
          <div class="main_title_header">
            <div class="right">验证登录机制</div>
            <div class="left">
              <span class="time_log">
                <img src="../../image/riqi_1.svg" alt>
              </span>
              <span class="time_d">2018-07-16</span>
            </div>
          </div>
          <div class="main_middle_header">
            <section>如果安全要求不高，可在前端直接用localstorage或sessionstorage这些浏览器存储存放用户信息。</section>安全性要求高，就如上面所说用JWT来做。其实归根接地都是用浏览器存储做
          </div>
        </div>
        <div class="text item main_middle_href">
          <!-- 箭头区域 -->
          <div class="crrows_box">
            <div class="main_crrows01">
              <img src="../../image/iconset0152.svg" alt>
              <a href @click.prevent="open11">
                <span class="triangle_left"></span>
                <span class="triangle_right">前端</span>
              </a>
            </div>
            <div class="main_crrows01">
              <img src="../../image/fenlei-copy.svg" alt>
              <a href @click.prevent="open12">
                <span class="triangle_left bd_color01"></span>
                <span class="triangle_right bg_color01">LocalStorage</span>
              </a>
            </div>
            <div class="main_crrows01">
              <a href @click.prevent="open13">
                <span class="triangle_left bd_color02"></span>
                <span class="triangle_right bg_color02">SessionStorage</span>
              </a>
            </div>
          </div>
          <!-- 阅读全文超链接 -->
          <router-link :to="{path:'/homen/artical',query:{i:0}}" class="artical_href" tag="div">
            <span>阅读全文</span>
            <span>>></span>
          </router-link>
        </div>
      </el-card>
      <el-card class="box-card animated zoomIn">
        <div slot="header" class="clearfix">
          <div class="main_title_header">
            <div class="right">验证登录机制</div>
            <div class="left">
              <span class="time_log">
                <img src="../../image/riqi_1.svg" alt>
              </span>
              <span class="time_d">2018-07-16</span>
            </div>
          </div>
          <div class="main_middle_header">
            <section>如果安全要求不高，可在前端直接用localstorage或sessionstorage这些浏览器存储存放用户信息。</section>安全性要求高，就如上面所说用JWT来做。其实归根接地都是用浏览器存储做
          </div>
        </div>
        <div class="text item main_middle_href">
          <!-- 箭头区域 -->
          <div class="crrows_box">
            <div class="main_crrows01">
              <img src="../../image/iconset0152.svg" alt>
              <a href @click.prevent="open11">
                <span class="triangle_left"></span>
                <span class="triangle_right">前端</span>
              </a>
            </div>
            <div class="main_crrows01">
              <img src="../../image/fenlei-copy.svg" alt>
              <a href @click.prevent="open12">
                <span class="triangle_left bd_color01"></span>
                <span class="triangle_right bg_color01">LocalStorage</span>
              </a>
            </div>
            <div class="main_crrows01">
              <a href @click.prevent="open13">
                <span class="triangle_left bd_color02"></span>
                <span class="triangle_right bg_color02">SessionStorage</span>
              </a>
            </div>
          </div>
          <!-- 阅读全文超链接 -->
          <router-link :to="{path:'/homen/artical',query:{i:0}}" class="artical_href" tag="div">
            <span>阅读全文</span>
            <span>>></span>
          </router-link>
        </div>
      </el-card>
      <el-card class="box-card animated zoomIn">
        <div slot="header" class="clearfix">
          <div class="main_title_header">
            <div class="right">验证登录机制</div>
            <div class="left">
              <span class="time_log">
                <img src="../../image/riqi_1.svg" alt>
              </span>
              <span class="time_d">2018-07-16</span>
            </div>
          </div>
          <div class="main_middle_header">
            <section>如果安全要求不高，可在前端直接用localstorage或sessionstorage这些浏览器存储存放用户信息。</section>安全性要求高，就如上面所说用JWT来做。其实归根接地都是用浏览器存储做
          </div>
        </div>
        <div class="text item main_middle_href">
          <!-- 箭头区域 -->
          <div class="crrows_box">
            <div class="main_crrows01">
              <img src="../../image/iconset0152.svg" alt>
              <a href @click.prevent="open11">
                <span class="triangle_left"></span>
                <span class="triangle_right">前端</span>
              </a>
            </div>
            <div class="main_crrows01">
              <img src="../../image/fenlei-copy.svg" alt>
              <a href @click.prevent="open12">
                <span class="triangle_left bd_color01"></span>
                <span class="triangle_right bg_color01">LocalStorage</span>
              </a>
            </div>
            <div class="main_crrows01">
              <a href @click.prevent="open13">
                <span class="triangle_left bd_color02"></span>
                <span class="triangle_right bg_color02">SessionStorage</span>
              </a>
            </div>
          </div>
          <!-- 阅读全文超链接 -->
          <router-link :to="{path:'/homen/artical',query:{i:0}}" class="artical_href" tag="div">
            <span>阅读全文</span>
            <span>>></span>
          </router-link>
        </div>
      </el-card>
      <el-card class="box-card animated zoomIn">
        <div slot="header" class="clearfix">
          <div class="main_title_header">
            <div class="right">验证登录机制</div>
            <div class="left">
              <span class="time_log">
                <img src="../../image/riqi_1.svg" alt>
              </span>
              <span class="time_d">2018-07-16</span>
            </div>
          </div>
          <div class="main_middle_header">
            <section>如果安全要求不高，可在前端直接用localstorage或sessionstorage这些浏览器存储存放用户信息。</section>安全性要求高，就如上面所说用JWT来做。其实归根接地都是用浏览器存储做
          </div>
        </div>
        <div class="text item main_middle_href">
          <!-- 箭头区域 -->
          <div class="crrows_box">
            <div class="main_crrows01">
              <img src="../../image/iconset0152.svg" alt>
              <a href @click.prevent="open11">
                <span class="triangle_left"></span>
                <span class="triangle_right">前端</span>
              </a>
            </div>
            <div class="main_crrows01">
              <img src="../../image/fenlei-copy.svg" alt>
              <a href @click.prevent="open12">
                <span class="triangle_left bd_color01"></span>
                <span class="triangle_right bg_color01">LocalStorage</span>
              </a>
            </div>
            <div class="main_crrows01">
              <a href @click.prevent="open13">
                <span class="triangle_left bd_color02"></span>
                <span class="triangle_right bg_color02">SessionStorage</span>
              </a>
            </div>
          </div>
          <!-- 阅读全文超链接 -->
          <router-link :to="{path:'/homen/artical',query:{i:0}}" class="artical_href" tag="div">
            <span>阅读全文</span>
            <span>>></span>
          </router-link>
        </div>
      </el-card>
      <el-card class="box-card animated zoomIn">
        <div slot="header" class="clearfix">
          <div class="main_title_header">
            <div class="right">验证登录机制</div>
            <div class="left">
              <span class="time_log">
                <img src="../../image/riqi_1.svg" alt>
              </span>
              <span class="time_d">2018-07-16</span>
            </div>
          </div>
          <div class="main_middle_header">
            <section>如果安全要求不高，可在前端直接用localstorage或sessionstorage这些浏览器存储存放用户信息。</section>安全性要求高，就如上面所说用JWT来做。其实归根接地都是用浏览器存储做
          </div>
        </div>
        <div class="text item main_middle_href">
          <!-- 箭头区域 -->
          <div class="crrows_box">
            <div class="main_crrows01">
              <img src="../../image/iconset0152.svg" alt>
              <a href @click.prevent="open11">
                <span class="triangle_left"></span>
                <span class="triangle_right">前端</span>
              </a>
            </div>
            <div class="main_crrows01">
              <img src="../../image/fenlei-copy.svg" alt>
              <a href @click.prevent="open12">
                <span class="triangle_left bd_color01"></span>
                <span class="triangle_right bg_color01">LocalStorage</span>
              </a>
            </div>
            <div class="main_crrows01">
              <a href @click.prevent="open13">
                <span class="triangle_left bd_color02"></span>
                <span class="triangle_right bg_color02">SessionStorage</span>
              </a>
            </div>
          </div>
          <!-- 阅读全文超链接 -->
          <router-link :to="{path:'/homen/artical',query:{i:0}}" class="artical_href" tag="div">
            <span>阅读全文</span>
            <span>>></span>
          </router-link>
        </div>
      </el-card>
      <el-card class="box-card animated zoomIn">
        <div slot="header" class="clearfix">
          <div class="main_title_header">
            <div class="right">验证登录机制</div>
            <div class="left">
              <span class="time_log">
                <img src="../../image/riqi_1.svg" alt>
              </span>
              <span class="time_d">2018-07-16</span>
            </div>
          </div>
          <div class="main_middle_header">
            <section>如果安全要求不高，可在前端直接用localstorage或sessionstorage这些浏览器存储存放用户信息。</section>安全性要求高，就如上面所说用JWT来做。其实归根接地都是用浏览器存储做
          </div>
        </div>
        <div class="text item main_middle_href">
          <!-- 箭头区域 -->
          <div class="crrows_box">
            <div class="main_crrows01">
              <img src="../../image/iconset0152.svg" alt>
              <a href @click.prevent="open11">
                <span class="triangle_left"></span>
                <span class="triangle_right">前端</span>
              </a>
            </div>
            <div class="main_crrows01">
              <img src="../../image/fenlei-copy.svg" alt>
              <a href @click.prevent="open12">
                <span class="triangle_left bd_color01"></span>
                <span class="triangle_right bg_color01">LocalStorage</span>
              </a>
            </div>
            <div class="main_crrows01">
              <a href @click.prevent="open13">
                <span class="triangle_left bd_color02"></span>
                <span class="triangle_right bg_color02">SessionStorage</span>
              </a>
            </div>
          </div>
          <!-- 阅读全文超链接 -->
          <router-link :to="{path:'/homen/artical',query:{i:0}}" class="artical_href" tag="div">
            <span>阅读全文</span>
            <span>>></span>
          </router-link>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list:[
        {
          id: 1,
          title: "验证登录机制",
          content:
            "<p>如果安全要求不高，可在前端直接用localstorage或sessionstorage这些浏览器存储存放用户信息。</p><p>安全性要求高，就如上面所说用JWT来做。其实归根接地都是用浏览器存储做</p>",
          date: "2018-12-29",
          year: "2018",
          category: ["WEB前端", "localstorage", "sessionstorage"]
        },
        {
          id: 2,
          title: "JS 中的严格模式与非严格模式",
          content:
            "<p>严格模式是一种将更好的错误检查引入代码中的方法。 在使用严格模式时，无法使用隐式声明的变量、将值赋给只读属性或将属性添加到不可扩展的对象等</p> <h4>1、严格模式的目的</h4><p>1） 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为</p><p>2）消除代码运行的一些不安全之处，保证代码运行的安全</p><p>3） 提高编译器效率，增加运行速度</p><p>4） 为未来新版本的Javascript做好铺垫</p><h3>声明严格模式</h3><p>可以通过在文件、程序或函数的开头添加 use strict; 来声明严格模式。 此类声明称作“指令序言”。 严格模式声明的范围取决于其上下文。 如果在全局上下文（函数的范围之外）中声明严格模式，则程序中的所有代码都处于严格模式。如果在函数中声明严格模式，则函数中的所有代码都处于严格模式。</p> ",
          date: "2018-12-29",
          year: "2018",
          category: ["WEB前端", "localstorage", "sessionstorage"]
        },
        {
          id: 3,
          title: "HTML_严格模式与混杂模式",
          content:
            "<p>这篇内容是在了解了<!DOCTYPE>之后,需要知道的。</p><p>Doctype可声明三种DTD类型，分别表示严格版本、过渡版本以及基于框架的 HTML 文档。</p><p>当浏览器厂商开始创建与标准兼容的浏览器时，他们希望确保向后兼容性。为了实现这一点，他们创建了两种呈现模式：标准模式和混杂模式</p><p>在标准模式中，浏览器以其支持的最高标准呈现页面</p><p>在混杂模式中，页面以一种比较宽松的向后兼容的方式显示。混杂模式通常模拟老式浏览器的行为以防止老站点无法工作。</p><h4>模式触发</h4><p>浏览器根据DOCTYPE是否存在以及使用的哪种DTD来选择要使用的呈现方法。</p><p>如果XHTML、HTML 4.01文档包含形式完整的DOCTYPE，那么它一般以标准模式呈现。</p><p>包含过渡DTD和URI的DOCTYPE也导致页面以标准模式呈现，但是有过渡DTD而没有URI会导致页面以混杂模式呈现。</p><p>DOCTYPE不存在或形式不正确会导致HTML和XHTML文档以混杂模式呈现。</p><p>html5既然没有DTD，也就没有严格模式与宽松模式的区别，html5有相对宽松的语法，实现时，已经尽可能大的实现了向后兼容。</p>  ",
          date: "2018-12-29",
          year: "2018",
          category: ["WEB前端", "HTML", "严格模式与混杂模式"]
        },
        {
          id: 4,
          title: "vue-router模块化开发",
          content:
            "<p>如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能</p> <p>< router-view > 路由匹配到的组件将渲染在这里</p><p>我们经常将动态路由和嵌套路由共同使用,嵌套路由即是在原路由的基础上增加一个 children ,children 是一个数组.并且我们还需要在原来的组件上添加< router-view >来渲染 chlidren 里面的路由.当我们在地址后面直接添加任意字符,我们会发现文档内容随着我们的更改而改变.</p> <p>Elementui基于vue的前端组件库</p>  ",
          date: "2018-12-29",
          year: "2018",
          category: ["WEB前端", "vue-router", "模块化开发"]
        },
        {
          id: 5,
          title: "webAPP与原生APP",
          content:
            "<h3>Web版APP</h3><p>本质就是浏览器功能的叠加，用普通Web开发语言开发的，通过浏览器运行。</p><h4>优势：</h4><p>1、支持范围广；</p><p>2、开发成本低、周期短。</p><h4>缺点：</h4><p>1、对联网要求高，离线不能做任何操作；</p><p>2、功能有限；</p><p>3、运行速度慢，页面不能承载太多东西；</p><p>4、图片和动画支持性不高；</p><p>5、如果用户使用更多的新型浏览器，那么就会出现运行问题。</p><h3>原生APP</h3><p>原生APP是什么？原生APP就是利用Android、iOS平台官方的开发语言、开发类库、工具进行开发。比如安卓的java语言，iOS的object-c 语言。在应用性能上和交互体验上应该是好的</p><h4>优点：</h4><p>1、可访问手机所有功能、可实现功能齐全；</p><p>2、运行速度快、性能高，的用户体验；</p><p>3、支持大量图形和动画和重新发现，不卡，反应快。</p><p>4、比较快捷地使用设备端提供的接口，处理速度上有优势。</p><h4>缺点：</h4><p>在过去主要是成本高、周期长，Android和iOS都需要单独开发。现在，通过“应用公园”平台不用敲代码自己就能制作APP，成本、周期降低90%以上。而且应用公园APP在线制作平台采用的是源生语言开发，适配，另有源码独立部署版，支持二次开发，实现功能无限扩展。</p><h3>混合开发</h3><p>即利用了原生APP的开发技术还应用了HTML5开发技术，是原生和HTML5技术的混合应用。混合比例不限。</p><h4>优点：</h4><p>1、比web版实现功能多；</p><p>2、兼容多平台；</p><p>3、可离线运行；</p><h4>缺点：</h4><p>1、用户体验不如本地应用；</p><p>2、性能稍慢（需要连接网络）；</p><p>3、技术还不是很成熟。</p><p>三大APP类型，客户可以根据自己的需求进行选择。现在，随着APP开发技术不断取得发展，新兴起的全新APP开发方式：不用敲代码，自己就能制作原生手机APP，而且Android和iOS可以一键自动生成。</p>",
          date: "2018-12-29",
          year: "2018",
          category: ["WEB前端", "webAPP", "sessionstorage"]
        }
      ]
    };
  },
  mounted() {
    // this.getList();
  },
  methods: {
    open11() {
      this.$notify({
        title: "嘚瑟",
        message: "我会让你去前端？别想了",
        offset: 100
      });
    },
    open12() {
      this.$notify({
        title: "膨胀",
        message: "我会让你去LocalStorage？别想了",
        offset: 100
      });
    },
    open13() {
      this.$notify({
        title: "累吗",
        message: "我会让你去SessionStorage？别点了",
        offset: 100
      });
    },
    // getList() {
    //   this.$ajax
    //     .get("http://lxt.anxin.fun/db.json")
    //     .then(res => {
    //       this.list = res.data;
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }
};
</script>

<style lang="scss" scoped>
.home_main {
  background: rgba($color: #e6eaee, $alpha: 0.8);
  opacity: 0.85;
}
/* 区域文档样式 */
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
// 文档自定义样式开始
.box-card {
  padding: 0;
  width: 100%;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 40px;
  // 文章标题区域
  .main_title_header {
    display: flex;
    justify-content: space-between;
    text-align: center;
    height: 30px;
    margin-bottom: 10px;
    // background-color: pink;
    .right {
      font-size: 24px;
      font-family: "宋体";
      font-weight: 600;
      vertical-align: middle;
    }
    .left {
      display: flex;
      justify-content: space-between;
      line-height: 36px;
      span {
        display: block;
        font-size: 14px;
      }
      .time_log {
        width: 14px;
        height: 14px;
        // background-color: pink;
        margin-right: 5px;
        vertical-align: middle;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .time_d {
        line-height: 32px;
      }
    }
  }
  // 文章内容区域
  .main_middle_header {
    max-height: 150px;
    overflow: hidden;
  }
  // 最底部链接处
  .main_middle_href {
    display: flex;
    justify-content: space-between;
    //箭头链接区域
    .crrows_box {
      overflow: hidden;
      .main_crrows01:nth-child(1) {
        margin-right: 10px;
      }
      .main_crrows01 {
        // background: pink;
        float: left;
        img {
          display: block;
          height: 25px;
          width: 20px;
          float: left;
        }
        a {
          .triangle_left {
            display: block;
            float: left;
            width: 0;
            height: 0;
            border-top: 12px solid transparent;
            border-right: 15px solid #85aadf;
            border-bottom: 12px solid transparent;
          }
          .triangle_right {
            display: block;
            float: left;
            height: 24px;
            line-height: 22px;
            font-size: 14px;
            color: white;
            background: #85aadf;
            margin-right: 10px;
            padding-right: 5px;
          }
          .bd_color01 {
            border-right: 15px solid #fbd3db;
          }
          .bg_color01 {
            background-color: #fbd3db;
          }
          .bd_color02 {
            border-right: 15px solid #51c8f3;
          }
          .bg_color02 {
            background-color: #51c8f3;
          }
          .bd_color03 {
            border-right: 15px solid #b41fda;
          }
          .bg_color03 {
            background-color: #b41fda;
          }
          .bd_color04 {
            border-right: 15px solid #da1f8c;
          }
          .bg_color04 {
            background-color: #da1f8c;
          }
        }
      }
      .main_crrows01:hover:nth-child(1) {
        a {
          .triangle_left {
            border-right: 15px solid rgb(75, 15, 109);
          }
          .triangle_right {
            background: rgb(75, 15, 109);
          }
        }
      }
      .main_crrows01:hover:nth-child(2) {
        a {
          .triangle_left {
            border-right: 15px solid rgb(247, 52, 17);
          }
          .triangle_right {
            background: rgb(247, 52, 17);
          }
        }
      }
      .main_crrows01:hover:nth-child(3) {
        a {
          .triangle_left {
            border-right: 15px solid rgb(223, 8, 133);
          }
          .triangle_right {
            background: rgb(223, 8, 133);
          }
        }
      }
    }
    // <!-- 阅读全文超链接 -->
    .artical_href {
      height: 24px;
      line-height: 24px;
      border-radius: 5px;
      text-align: center;
      background-color: #50cdfb;
      color: white;
      cursor: pointer;
      font-size: 14px;
      span:nth-child(1) {
        font-family: "宋体";
        padding-left: 5px;
        padding-right: 5px;
        font-weight: 600;
      }
      span:nth-child(2) {
        font-size: 14px;
        padding-right: 5px;
      }
    }
    .artical_href:hover {
      background-color: #da1f8c;
    }
  }
}
</style>

