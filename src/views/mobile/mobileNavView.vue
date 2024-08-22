<template>

  <div id="app">




    <div class="topImage"></div>





    <div class="nav">






      <el-button @click="drawer_menu = true"  class="drawerButton">

        <i class="el-icon-s-unfold"></i>

      </el-button>


      <el-image :src="navImageSrc" class="logo" :fit="contain"></el-image>

    </div>






    <router-view/>



    <el-drawer
        title="我是标题"
        :visible.sync="drawer_menu"
        :direction = "direction"
        :with-header="false"
        :modal-append-to-body="modal"
        :size="size"

        id="drawer"

    >


      <div class="menu">

        <div class="menuItem">

          <i class="el-icon-s-home" style="align-self: center"></i>

          <strong style="font-size: 3rem">

            <router-link to="/main" @click.native.prevent="goToRoute('/main')" class="link">首页</router-link>

          </strong>

        </div>

        <div class="menuItem">

          <i class="el-icon-place" style="align-self: center"></i>






          <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" :default-openeds="openedMenus" >


            <el-submenu index="1" class="submenu" :show-timeout="0" :hide-timeout="0" :popper-append-to-body="false">



              <template slot="title">


                <strong style="font-size: 3rem; color: black">关于Lab</strong>

              </template>


              <div class="submenuItemContainer">


                <div class="submenuItem">

                  <strong style="font-size: 3rem; align-self: center">

                    <router-link to="/about"  @click.native.prevent="goToRoute('/about')" class="link">关于Lab</router-link>

                  </strong>

                </div>
                <div class="submenuItem">


                  <strong style="font-size: 3rem">

                    <router-link to="/project" @click.native.prevent="goToRoute('/project')"  class="link">项目</router-link>

                  </strong>

                </div>
                <div class="submenuItem">


                  <strong style="font-size: 3rem">

                    <router-link to="/member" @click.native.prevent="goToRoute('/member')"  class="link">成员</router-link>

                  </strong>

                </div>


              </div>


            </el-submenu>

          </el-menu>

        </div>

        <div class="menuItem">

          <i class="el-icon-menu" style="align-self: center"></i>

          <strong style="font-size: 3rem">

            <router-link to="/main" @click.native.prevent="goToRoute('/main')"  class="link" >聊天室</router-link>

          </strong>


        </div>


      </div>




    </el-drawer>


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
      headerImageSrc: require('@/assets/mobile/headerImage.png'),
      navImageSrc: require('@/assets/pc/logo.png'),


      //drawer
      drawer_menu:false,
      direction:"ltr",
      modal:false,
      size:'50%',


      //menu-submenu
      activeIndex:'',
      openedMenus:[],




    };
  },

  methods: {
    goToRoute(path) {
      if (this.$route.path !== path) {
        this.$router.push(path);

      } else {
        // 如果当前就是目标路由，可以关闭侧边栏
        this.drawer_menu = false;

        this.openedMenus=[]

      }
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
    z-index: 1000;

  }



  .topImage{

    background-image: url("../../assets/mobile/headerImage.png");
    /*transform: translate(-20px,0px);*/

    height: 5vh;

    background-size: cover;

    /* 设置容器的最小宽度，这个值可以根据需要调整 */
    min-width: 100%; /* 或者使用具体的像素值，但这里我们想要它至少和视口一样宽 */

    /* 背景图片在容器中始终从右侧开始，垂直居中 */
    background-position: right center;
    /* 背景图片不重复 */
    background-repeat: no-repeat;
    /* 背景图片覆盖整个容器（但注意，这可能会裁剪图片） */
    background-size: auto 100%; /* 或者使用 cover，但 cover 会保持宽高比并可能裁剪 */


    /* 允许内容溢出（虽然这对背景图片没有直接影响，但可能对容器内的其他元素有用） */
    overflow: visible;

    /* 确保容器有足够的空间来显示背景图片（如果需要的话） */
    position: relative; /* 如果需要绝对定位子元素 */




  }



  .nav{

    height: 5vh;

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

    max-width: 30%;


    margin-left: auto;
    margin-right:1vw;
    overflow: hidden;


  }







  .drawerButton{

    margin-left: 3%;
    size: 20vw;
    border: 0px;

    background-size: 100%;

    display: flex;


  }

  .el-icon-s-unfold{

    flex: 1;
    align-self: center;
    transform: translate(0,-0.5vh);
    font-size: 7vw;

  }

  .el-drawer{

    background-color: rgba(255,255,255,0.9);

  }



  .menu{

    width:100%;

    margin-top:4vh;

    display:flex;
    flex-direction: column;
    justify-content: center;

  }

  .menuItem{

    align-self: center;



    line-height: 10vh !important;
    width: calc(100% - 10vw);

    margin-left: 5vw;
    margin-right:5vw;
    border:100px;

    display: flex;
    justify-content: center;

  }


  .el-menu{
    align-self: center;

    height: 10vh !important;
    line-height: 10vh !important;
    width: calc(100% - 10vw);

    /*margin-left: 5vw;*/
    /*margin-right:5vw;*/
    border:100px;

    display: flex;
    justify-content: center;

    background-color: rgba(255,255,255,0);


  }

  .submenu{

    align-self: center;



    line-height: 10vh !important;
    width: calc(100% - 10vw);

    margin-left: 5vw;
    margin-right:5vw;
    border:100px;

    display: flex;
    justify-content: center;

    background-color: rgba(255,255,255,0);





  }

  .el-menu--horizontal{


    width:60%;

  }


  .submenuItemContainer{



    width: 100%;

    display: flex;
    flex-direction: column;


  }

  .submenuItem{

    align-self: center;

    background-color: rgba(255,255,255,1);

    line-height: 6vh;

    width: calc(100% - 10vw);

    margin-left: 5vw;
    margin-right:5vw;


  }




  .el-icon-s-home, .el-icon-menu, .el-icon-place {


    opacity: 60%;

    font-size: 4vw;

    margin-left: 5vw;
    margin-right: 2vw;

  }






.link{

  color: black;
  text-decoration: none;
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


