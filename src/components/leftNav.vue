<template lang="html">
  <div class="left-nav">
    <ul>
      <li>
        <router-link to="/">
        <i class="icon iconfont icon-computer"></i>
        <div class="">
          收银
        </div>
      </router-link>
      </li>
      <li>
        <router-link to="/map">
        <i class="icon iconfont icon-home"></i>
        <div class="">
          店铺
        </div>
      </router-link>
      </li>
      <li>
        <router-link to="">
        <i class="icon iconfont icon-cart"></i>
        <div class="">
          商品
        </div>
      </router-link>
      </li>
      <li>
        <router-link to="">
        <i class="icon iconfont icon-my"></i>
        <div class="">
          会员
        </div>
      </router-link>
      </li>
      <li>
        <router-link to="">
        <i class="icon iconfont icon-tag"></i>
        <div class="">
          统计
        </div>
      </router-link>
      </li>
      <li>
        <router-link to="">
        <i class="icon iconfont icon-sitting"></i>
        <div class="">
          设置
        </div>
      </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'leftNav',
  data() {
    return{

    }
  }
}
</script>

<style lang="css">
.left-nav{
  color: #fff;
  font-size: 10px;
  height: 100%;
  background: #fff;
  float: left;
  width: 5%;
}
.iconfont{
  font-size:24px;
}
.left-nav ul {
  padding: 0;
  margin: 0;
}
.left-nav li {
  list-style: none;
  text-align: center;
  border-bottom: solid #fff 1px;
  padding: 10px;
}
</style>
