<template>
  <div :class="{'logout': $route.name === 'Login'}" class="top-bar"></div>
  <transition name="fade">
    <div :class="{'logout': $route.name === 'Login'}" class="app-content">
      <router-view/>
    </div>
  </transition>
  <transition name="fade">
    <div v-show="$store.state.loading" id="main-green-preloader">
      <div class="preloader-container">
        <img src="img/1487.gif" alt="">
      </div>
    </div>
  </transition>
  <transition v-show="$store.state.menuDisplayed" name="fade">
    <menu-component />
  </transition>
</template>
<script lang="ts">
import {Vue, Options} from "vue-class-component";
import MenuComponent from "@/components/MenuComponent.vue";


@Options({
  components: {
  MenuComponent,
  },
})
export default class App extends Vue {

}
</script>

<style lang="less">
@media (min-width: 600px) {
  .top-bar.logout{
    display: none !important;
  }
  .app-content.logout{
    padding: 0;
    max-width: initial !important;

  }
  .top-bar {
    display: block !important;
    background-color: #212223;
    height: 120px;
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 100;
  }
  #app{
    padding-top: 140px;
    min-height: 100vh !important;
    box-sizing: border-box;
    padding-left: 300px;
  }
}
.top-bar {
  display: none;
}
.app-content{
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
}
#app {
  font-family: "Open Sans", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: .9rem;

  background-color: #f9f9fb;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
body {
  touch-action: none;
  margin: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.preloader-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: white;
  width: 128px;
  height: 128px;
  border-radius: 1.25rem;
}
.preloader-container img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
}
#main-green-preloader {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 9999999;
  transition: all .3s ease;
  overflow: hidden;
}
//.preloader-content {
//  position: absolute;
//  top: -5px;
//  left: -5px;
//  border: 5px solid #e86441;
//  border-radius: 54px;
//  height: 35px;
//  width: 35px;
//  clip: rect(0px, 18px, 18px, 0px);
//  animation: rotate 1.5s;
//  animation-timing-function: linear;
//  animation-iteration-count: infinite;
//}
//.preloader {
//  width: 35px;
//  height: 35px;
//  border-radius: 50%;
//  border: 5px solid #c3cce0;
//  position: absolute;
//  top: 50%;
//  left: 50%;
//  transform: translate3d(-50%, -50%, 0);
//}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
