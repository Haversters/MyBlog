<template>
  <div class="share_list">
    <h3>友情链接</h3>
    <el-table
      :data="tableData.filter(data => !search || data.blurb.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="Name" prop="name"></el-table-column>
      <el-table-column label="Synopsis" prop="blurb"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <a size="medium" type="danger" :href="tableData[scope.$index].address">点击查看</a>
          <el-button
            size="mini"
            style="opacity:0;cursor: Default"
            @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      search: ""
    };
  },
  mounted() {
    // this.getList();
    this.setList();
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index);
      console.log(this.tableData[index]);
      this.$router.push({ path: this.tableData[index].address });
    },
    // getList() {
    //   this.$ajax.get("http://lxt.anxin.fun/db.json/share").then(res => {
    //     this.tableData = res.data;
    //     console.log(res.data);
    //   });
    // },
    setList() {
      this.tableData = [
        {
          id: 1,
          name: "蕊希Erin",
          address: "https://weibo.com/u/2042392072?is_hot=1#_rnd1546132604242",
          blurb: "情感电台，不要多听，会感伤"
        },
        {
          id: 2,
          name: "海上升明月",
          address: "http://url.cn/5esvkKi",
          blurb: "特定时期的一段歌单"
        },
        {
          id: 3,
          name: "诗酒趁年华",
          address: "http://www.shawnzeng.com/",
          blurb: "一个喜欢捣鼓前端的产品汪"
        },
        {
          id: 4,
          name: "Haverster",
          address: "https://github.com/Haversters/VUE-app",
          blurb: "一个烂到极点的VUE移动端项目"
        },
        {
          id: 5,
          name: "诗酒趁年华",
          address: "http://www.shawnzeng.com/",
          blurb: "一个喜欢捣鼓前端的产品汪"
        },
        {
          id: 6,
          name: "诗酒趁年华",
          address: "http://www.shawnzeng.com/",
          blurb: "一个喜欢捣鼓前端的产品汪"
        },
        {
          id: 7,
          name: "诗酒趁年华",
          address: "http://www.shawnzeng.com/",
          blurb: "一个喜欢捣鼓前端的产品汪"
        }
      ];
    }
  }
};
</script>
<style lang="scss" scoped>
.share_list {
  width: 100%;
  background: rgba($color: #fff, $alpha: 0.8);
  opacity: 0.85;
  text-align: center;
  h3 {
    font-size: 30px;
    color: crimson;
  }
}
</style>
