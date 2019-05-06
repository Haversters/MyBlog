<template>
  <el-container>
    <el-main>
      <el-card class="box-card animated bounceInUp">
        <!-- 左边区域年份 -->
        <div class="document_left">
          <p style="color:red">CateGory</p>
          <h3>{{category}}</h3>
        </div>
        <div class="document_right">
          <el-table
            :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%"
          >
            <el-table-column label="Date" prop="date"></el-table-column>
            <el-table-column label="Title" prop="title"></el-table-column>
            <el-table-column align="right">
              <template slot="header" slot-scope="scope">
                <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
              </template>
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleEdit(scope.$index, scope.row)"
                >阅读全文</el-button>
              </template>
            </el-table-column>
          </el-table>
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
      search: "",
      tableData: [],
      category: ""
    };
  },
  mounted() {
    // this.getList();
    this.setList();
  },
  methods: {
    handleEdit(index, row) {
     this.$router.push({path:'/homen/artical',query:{i:index,row:row}})
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    // getList() {
    //   axios
    //     .get(" http://localhost:3000/artical")
    //     .then(res => {
    //       // console.log(res.data)
    //       this.tableData = res.data;
    //        this.category = res.data[0].category[0];
    //       console.log(this.list);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
    setList() {
      this.tableData = [
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
        },
        {
          id: 6,
          title: "基于 Token 的身份验证",
          content:
            "<h3>基于 Token 的身份验证</h3><p>基于 Token 的身份验证， 跟大伙分享下。 很多大型网站也都在用， 比如 Facebook， Twitter， Google + ，Github 等等， 比起传统的身份验证方法， Token 扩展性更强， 也更安全点， 非常适合用在 Web应用或者移动应用上。 Token 的中文有人翻译成“ 令牌”传统身份验证的方法 </p><p>HTTP 是一种没有状态的协议， 也就是它并不知道是谁是访问应用。 这里我们把用户看成是客户端， 客户端使用用户名还有密码通过了身份验证， 不过下回这个客户端再发送请求时候， 还得再验证一下。解决的方法就是， 当用户请求登录的时候， 如果没有问题， 我们在服务端生成一条记录， 这个记录里可以说明一下登录的用户是谁， 然后把这条记录的 ID 号发送给客户端， 客户端收到以后把这个 ID 号存储在 Cookie里， 下次这个用户再向服务端发送请求的时候， 可以带着这个 Cookie， 这样服务端会验证一个这个 Cookie 里的信息， 看看能不能在服务端这里找到对应的记录， 如果可以， 说明用户已经通过了身份验证， 就把用户请求的数据返回给客户端。上面说的就是 Session， 我们需要在服务端存储为登录的用户生成的 Session， 这些 Session 可能会存储在内存， 磁盘， 或者数据库里。 我们可能需要在服务端定期的去清理过期的 Session。基于 Token 的身份验证方法 </p><p>使用基于 Token 的身份验证方法， 在服务端不需要存储用户的登录记录。 大概的流程是这样的： </p> <p>1. 客户端使用用户名跟密码请求登录 </p> <p>2. 服务端收到请求， 去验证用户名与密码 </p> <p>3. 验证成功后， 服务端会签发一个 Token， 再把这个 Token 发送给客户端 </p> <p>4. 客户端收到 Token 以后可以把它存储起来， 比如放在 Cookie 里或者 Local Storage 里 </p> <p>5. 客户端每次向服务端请求资源的时候需要带着服务端签发的 Token </p> <p>6. 服务端收到请求， 然后去验证客户端请求里面带着的 Token， 如果验证成功， 就向客户端返回请求的数据 </p> <p>JWT </p> <p>实施 Token 验证的方法挺多的， 还有一些标准方法， 比如 JWT， 读作： jot， 表示： JSON Web Tokens。 JWT 标准的 Token 有三个部分： </p> <p>header（ 头部） </p> <p>payload（ 数据） </p> <p>signature（ 签名） </p> <p> 中间用点分隔开， 并且都会使用 Base64 编码， 所以真正的 Token 看起来像这样 < p > ",
          date: "2018-08-20",
          year: "2018",
          category: ["WEB前端", "Token", "sessionstorage"]
        },
        {
          id: 7,
          title: "清除浮动方法",
          content:
            "<h3>清除浮动方法</h3><h4>1.父级div定义伪类：after和zoom</h4><p>原理： IE8以上和非IE浏览器才支持: after， 原理和方法2有点类似， zoom(IE转有属性) 可解决ie6,ie7浮动问题 </p> <p>优点： 浏览器支持好， 不容易出现怪问题（ 目前： 大型网站都有使用， 如： 腾迅， 网易， 新浪等等)</p> <p>缺点： 代码多， 不少初学者不理解原理， 要两句代码结合使用， 才能让主流浏览器都支持 </p> <p>建议： 推荐使用， 建议定义公共类， 以减少CSS代码 </p> <p>评分：★★★★☆ </p><h4>  2. 在结尾处添加空div标签clear: both </h4> <p> 原理： 添加一个空div， 利用css提高的clear: both清除浮动， 让父级div能自动获取到高度 </p> <p>优点： 简单， 代码少， 浏览器支持好， 不容易出现怪问题 </p> <p>缺点： 不少初学者不理解原理； 如果页面浮动布局多， 就要增加很多空div， 让人感觉很不爽 </p> <p>建议： 不推荐使用， 但此方法是以前主要使用的一种清除浮动方法 </p>  3. 父级div定义height </h4> <p>原理： 父级div手动定义height， 就解决了父级div无法自动获取到高度的问题 </p> <p>优点： 简单， 代码少， 容易掌握 </p> <p>缺点： 只适合高度固定的布局， 要给出精确的高度， 如果高度和父级div不一样时， 会产生问题 </p> <p>建议： 不推荐使用， 只建议高度固定的布局时使用 </p> <h4> 4. 父级div定义overflow: hidden </h4>  <p> 原理： 必须定义width或zoom: 1， 同时不能定义height， 使用overflow: hidden时， 浏览器会自动检查浮动区域的高度 </p> <p>优点： 简单， 代码少， 浏览器支持好 </p> <p>缺点： 不能和position配合使用， 因为超出的尺寸的会被隐藏 </p> <p>建议： 只推荐没有使用position或对overflow: hidden理解比较深的朋友使用 </p> <h4> 5. 父级div定义overflow: auto </h4>  <p> 原理： 必须定义width或zoom: 1， 同时不能定义height， 使用overflow: auto时， 浏览器会自动检查浮动区域的高度 </p> <p>优点： 简单， 代码少， 浏览器支持好 </p> <p>缺点： 内部宽高超过父级div时， 会出现滚动条。 </p> <p>建议： 不推荐使用， 如果你需要出现滚动条或者确保你的代码不会出现滚动条就使用吧。 </p>  <h4> 6. 父级div也一起浮动 </h4><p>原理： 所有代码一起浮动， 就变成了一个整体 </p> <p>优点： 没有优点 </p> <p>缺点： 会产生新的浮动问题。 </p> <p>建议： 不推荐使用， 只作了解。 </p> <h4> 7. 父级div定义display: table </h4> < /p > <p> 原理： 将div属性变成表格 </p> <p>优点： 没有优点 </p> <p>缺点： 会产生新的未知问题 </p> <p>建议： 不推荐使用， 只作了解 </p> <p></p> <h4> 8、 结尾处加br标签clear: both </h4>  <p> 原理： 父级div定义zoom: 1 来解决IE浮动问题， 结尾处加br标签clear: both </p> <p>建议： 不推荐使用， 只作了解 </p> <p> </p>",
          date: "2018-12-29",
          year: "2018",
          category: ["WEB前端", "清除浮动方法", "浮动"]
        }
      ];
      this.category=this.list[0].category[0];
      console.log(this.category);
    }
  }
};
</script>
<style lang="scss" scoped>
.box-card {
  width: 100%;
  background: rgba($color: #fff, $alpha: 0.8);
  opacity: 0.85;
  border-radius: 15px;
  overflow: hidden;
}
// <!-- 左边区域年份 -->
.document_left {
  width: 16%;
  height: 100%;
  float: left;
  p{
    font-size: 24px;
  }
}
.document_right {
  float: left;
  width: 84%;
}
</style>

