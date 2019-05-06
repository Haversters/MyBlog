<template>
  <div class="box">
    <el-row style="padding-left:10%">
      <el-col
        :span="8"
        v-for="(item, i) in list"
        :key="i"
        :offset="index > 0 ? i : 0"
        style="padding-left:3%"
      >
        <el-card :body-style="{ padding: '0px' }" class="animated flip">
          <img :src="item.src" class="image">
          <div style="padding: 14px;">
            <span>{{item.categroy}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.blurb }}</time>
              <a :href="item.address" class="button">下载</a>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      list: []
    };
  },
  mounted() {
    this.getlist();
    this.setList();
  },
  methods: {
    getlist() {
      this.$ajax.get("http://lxt.anxin.fun/db.json/photo").then(res => {
        this.list = res.data;
        console.log(this.list);
      });
    },
    setList() {
      this.list = [
        {
          id: 1,
          name: "",
          categroy: "一人之下",
          address: "https://pan.baidu.com/s/1ckMdw7JJakL2rmbgGLt3Xg",
          src:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=626203890,3272194803&fm=11&gp=0.jpg",
          blurb: "一人之下图片集"
        },
        {
          id: 2,
          name: "",
          categroy: "秦时明月",
          address: "https://pan.baidu.com/s/1WB4ZOGFiObi3hvToCaUpqg",
          src:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3540744400,3397622721&fm=26&gp=0.jpg",
          blurb: "秦时明月图片集"
        }
      ];
    }
  }
};
</script>
<style lang="scss" scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
// 自定义样式
.box {
  width: 100%;
  background: rgba($color: #fff, $alpha: 0.8);
}
.bottom {
  a {
    color: lightskyblue;
    font-size: 16px;
    text-decoration: none;
  }
}
</style>
