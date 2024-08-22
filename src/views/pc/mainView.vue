<template>
  <div class="mainContainer">

  <nav-view/>


    <div class="mainBodyDiv">

      <div class="mainBody">

        <div class="container">

          <div class="aside" style="width:25%">

            <el-aside style="width:100%" >


              <el-row class="tac" >


                <el-col style="overflow: hidden">

                  <el-menu
                      default-active="1"
                      class="el-menu-vertical-demo"
                      @open="handleOpen"
                      @close="handleClose"



                  >

                    <el-submenu index="1">
                      <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>关于Lab</span>
                      </template>

                      <el-menu-item-group>
                        <el-menu-item index="1-1">

                          <router-link to="/about">关于Lab</router-link>

                        </el-menu-item>
                        <el-menu-item index="1-2">

                          <router-link to="/project">项目</router-link>

                        </el-menu-item>



                        <el-menu-item index="1-3">

                          <router-link to="/member">成员</router-link>

                        </el-menu-item>

                      </el-menu-item-group>

                    </el-submenu>
                    <el-menu-item index="2">
                      <i class="el-icon-menu"></i>
                      <span slot="title">聊天室</span>
                    </el-menu-item>


                  </el-menu>
                </el-col>
              </el-row>

            </el-aside>

            <div class="extender">

            </div>

          </div>

          <div class="main">

            <div style="background-color: rgba(255,255,255,0.5)">


              <div style="background-color: #409EFF; height:20px"></div>

              <el-image :src="bg_lab" style=
                  "
                     padding-top: 5%;
                     padding-left:5%;
                     padding-right:5%;

                  "></el-image>

              <div style="
                          padding-top: 20px;
                          padding-left:20px;

                          ">

                <h2>欢迎来到未来游戏开发部</h2>

                <div class="hrText">

                  <div class="hrLeft">

                  </div>

                  <div class="hrTextContainer">
                    Future Game Lab
                  </div>


                  <div class="hrRight">

                  </div>
                </div>

              </div>

            </div>

            <div class="extender"></div>

          </div>

        </div>



      </div>



    </div>




  </div>
</template>

<script>
import navView from "@/views/pc/navView";

export default {

  data() {
    return {

      name: "mainVue",

      bgImageSrc:require('@/assets/pc/background1.png'),
      bg_lab:require('@/assets/pc/bg_lab.jpg')

    };
  },

  components:{

    navView

  }


}
</script>

<style>


  .mainContainer{
    height:200vh;

    display: flex;
    flex-direction: column;

  }


  .el-menu .el-menu-item,
  .el-menu .el-submenu__title {
    font-size: 20px;

    margin-left:30px;
    margin-right: 30px;
  }





  .mainBodyDiv {




    /* 设置背景图片 */
    background-image: url('../../assets/pc/background3.png'); /* 替换为你的图片URL */

    /* 确保背景图片覆盖整个div */
    background-size: cover; /* 图片会被缩放以完全覆盖容器区域，可能会被裁剪 */

    /* 不让背景图片重复 */
    background-repeat: no-repeat;

    /* 背景图片的位置 */
    background-position: center; /* 图片居中显示 */



    /* 其他样式设置，确保div有足够的空间显示背景 */
    width: 100%; /* 或者具体宽度 */
    height:100%;

    flex:1;

    /* 为了让背景图片不随div的内容滚动而滚动，可以添加 */
    background-attachment: fixed; /* 可选，根据需求决定是否需要 */
  }

  .mainBody {
    height: calc(100% - 10%); /* 减去 padding-top 的值 */
    padding-top: 10%;
    margin-left: 13%;
    margin-right: 13%;
    box-sizing: border-box; /* 确保 padding 和 border 不会增加元素的总宽度和高度 */
  }

  .container{

    height:100%;

    display:flex;

  }

  .aside{

    display: flex;
    flex-direction: column;

  }





  .main{
    flex:1;

    display: flex;
    flex-direction: column;

    margin-left: 20px;
    padding-top: 20px;

  }


  .hrText{

    display: flex;
    align-items: center; /* 垂直居中 */
    text-align: center; /* 文本居中（虽然在这里flex布局下不是必需的，但有助于理解） */
    position: relative; /* 为了伪元素定位 */

  }

  .hrLeft{

    width:70%;

    display: flex;
    align-items: center; /* 垂直居中 */
    text-align: center; /* 文本居中（虽然在这里flex布局下不是必需的，但有助于理解） */
    position: relative; /* 为了伪元素定位 */

  }

  .hrRight{

    width:10%;

    display: flex;
    align-items: center; /* 垂直居中 */
    text-align: center; /* 文本居中（虽然在这里flex布局下不是必需的，但有助于理解） */
    position: relative; /* 为了伪元素定位 */

  }

  .hrTextContainer{

    color: #000; /* 文字颜色 */
    font-size: 16px; /* 文字大小 */



  }
  .hrLeft::before,
  .hrRight::after{

    content: ''; /* 伪元素内容为空 */
    flex: 1; /* 使得伪元素占据剩余空间 */
    height: 1px; /* 分割线高度 */
    background-color: #015bcb; /* 分割线颜色 */
    margin: 0 8px; /* 分割线与文字的间距 */

  }


  .extender{

    flex:1;
    background-color: rgba(255,255,255,0.5);
  }

</style>