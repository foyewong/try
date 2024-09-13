<template>
 <nav class="nav">
    <div class="nav_content">
      <div class="logo">
        <img src="../img/LOGO.png">
      </div>
      <div class="nav_menu">
        <ul>
          <li>
            <!-- <RouterLink to="/index">
              <a id="index" >首页</a>
            </RouterLink> -->
            <a id="index" href="/index">首页</a>
          </li>
          <li>
            <a id="made" class="active">优选质造</a>
          </li>
          <li>
            <a id="cross-border">跨境电商收结汇</a>
          </li>
          <li>
            <a id="trade">一股贸易收结汇</a>
          </li>
          <li>
            <a id="service">跨贸服务中心</a>
          </li>
        </ul>
      </div>
      <div class="right">
        <img src="../img/形状 3.png">
        <div>重庆</div>
      </div>
    </div>
  </nav>
  <!-- <div class="test"> 你好</div> -->

</template>

<script setup lang="ts" name="Header">
import {} from "vue"

</script>

<style scoped>

  .nav {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: MyCustomFont;
      min-width: 1140px;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 9999;
      box-shadow: 0 2px 4px #0000001a;
      display: flex;
    }

    .nav .nav_content {
      margin: auto;
      width: 1140px;
      position: static;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .nav .nav_content .logo {
      align-items: center;
      justify-content: center;
      cursor: pointer;
      display: flex;
      margin-right: 40px;
      display: flex;

    }

    .nav .nav_content .nav_menu {
      font-family: MyCustomFont;
      display: flex;
      font-size: 14px;
      text-align: center;
    }

    .nav .nav_content .nav_menu ul {
      height: 80px;
      align-items: center;
      justify-content: center;
      text-align: center;
      box-sizing: border-box;
      font-family: MyCustomFont;
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      width: 780px;
      font-size: 20px;

    }

    .nav .nav_content .nav_menu ul li a {
      text-align: center;
      cursor: pointer;
      font-size: 20px;
      font-family: MyCustomFont;
      margin-right: 40px;
      text-decoration: none;
      color: #000000;
    }

    .nav .nav_content .nav_menu ul li a:hover {
      color: blue;
      lighting-color: blue;
    }

    .active {
      color: blue !important;
      lighting-color: blue;
      font-weight: bolder;

    }

    .nav .nav_content .right {
      display: flex;
      border-radius: 25px;
      margin: auto;
      width: 120px;
      height: 36px;
      border: 1px solid blue;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: blue;
      gap: 0px 10px
    }
   .test{
    margin: 0;
    background-color: skyblue;
   }
 
</style>
