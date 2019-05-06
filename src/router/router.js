import Vuerouter from "vue-router"

import homecontair from "../components/tabber/homeContainer.vue"
import jsonser from "../particlal-json-server/jsonserver.vue"
import document from "../components/subComment/documentCenter.vue"
import category from "../components/subComment/categoryList.vue"
import photolist from "../components/subComment/photoList.vue"
import sharelist from "../components/subComment/shareList.vue"
import personself from "../components/subComment/personSelf.vue"
import download from "../components/subComment/downloadCenter.vue"
import nightmode from "../components/work/work.vue"
import articaldetails from "../components/artical/articalDetails.vue"
// 引入商城首页
import homepage from "../components/shopping/homepage.vue"
const router =new Vuerouter({
  linkActiveClass:'active',
  routes:[
      {path:"/",redirect:'/home'},
      {path:"/home",component:homecontair},
      {path:"/json",component:jsonser},
      {path:"/home/document",component:document},
      {path:"/home/category",component:category},
      {path:"/home/photo",component:photolist},
      {path:"/home/share",component:sharelist},
      {path:"/homen/person",component:personself},
      {path:"/home/download",component:download},
      {path:"/homen/night",component:nightmode},
      {path:"/homen/artical",component:articaldetails},
      // 引入商城首页
      {path:"/shopping/homepage",component:homepage}
  ]
})
export default router