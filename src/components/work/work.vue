<template>
  <el-select v-model="value6" placeholder="请选择">
    <el-option v-for="item in cities" :key="item.value" :label="item.label" :id="item.id" :value="item.value">
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
      <span style="float:right; color: #8492a6; font-size:13px">{{item.id}}</span>
      
    </el-option>
  </el-select>
</template> 
      <script>
export default {
  data() {
    return {
      cities: [
        { value: "Beijing", label: "北京",id:"你好" },
        { value: "Shanghai", label: "上海",id:2 },
        { value: "Nanjing", label: "南京",id:3 },
        { value: "Chengdu", label: "成都",id:4 },
        { value: "Shenzhen", label: "深圳",id:5 },
        { value: "Guangzhou", label: "广州",id:6 }
      ],
      value6: ""
    };
  }
};
</script>
