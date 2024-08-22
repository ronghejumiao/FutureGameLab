<template>

  <div id="app">


    <el-image :src="headerImageSrc" class="topImage"></el-image>


    <div class="nav">



      <el-image :src="navImageSrc" class="logo"></el-image>



      <el-menu class="navMenu" id="navMenu" :default-active="activeIndex"  :mode="menuMode" @select="handleSelect">

        <el-menu-item index="1"><strong>

          <router-link to="/main">首页</router-link>

        </strong></el-menu-item>

        <el-submenu index="2">
          <template slot="title"><strong>关于Lab</strong></template>
          <el-menu-item index="2-1" ><strong>

            <router-link to="/about" style="color: black; text-decoration: none;" class="link">关于Lab</router-link>

          </strong></el-menu-item>
          <el-menu-item index="2-2" ><strong>

            <router-link to="/project" style="color: black; text-decoration: none;" class="link">项目</router-link>

          </strong></el-menu-item>
          <el-menu-item index="2-3"><strong>

            <router-link to="/member" style="color: black; text-decoration: none;" class="link">成员</router-link>

          </strong></el-menu-item>
        </el-submenu>

        <el-menu-item index="3"><strong>聊天室</strong></el-menu-item>
      </el-menu>



    </div>



  </div>

</template>





<script>
/*


      App.vue存放header和左侧导航栏 和背景


 */

// import mainVue from "@/views/mainVue";


export default {

  data() {
    return {
      headerImageSrc: require('@/assets/pc/headerImage.png'),
      navImageSrc: require('@/assets/pc/logo.png'),

      menuMode: "horizontal"
    }
  },


  components:{

    // mainVue

  }

}

</script>


<style>


  #app{

    display: flex;
    flex-direction: column;

    position: -webkit-sticky;
    position: sticky;
    top: -5vh; /* 当页面滚动到这个位置时，导航栏将固定 */
    z-index: 1000; /* 确保它位于其他内容之上 */

  }

  .topImage{


    height: 5vh;

    overflow: hidden;
    background-size: cover;

  }


  /*
    导航栏高度
   */
  .nav{

    height: 70px;

    display: flex;

    background-color: white;

    position: -webkit-sticky;
    position: sticky;
    top: 0; /* 当页面滚动到这个位置时，导航栏将固定 */
    z-index: 1000; /* 确保它位于其他内容之上 */

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;



  }





  .logo{

    margin-left: 3vw;
    margin-right:3vw;
    flex-direction: column;

  }

  .navMenu{

    flex:1;

  }




.link:hover{

  color: #6d6b6b !important;
  text-decoration: #6d6b6b underline !important;

}


/* 当router-link处于激活状态时 */
.router-link-active {
  color: red; /* 激活状态的颜色 */
}

/* 如果需要精确匹配才激活 */
.router-link-exact-active {
  color: #0075cb !important; /* 精确匹配时的颜色 */
}


</style>


