<template>
  <transition name="fade">
    <router-view/>
  </transition>
  <transition name="fade">
    <div v-show="$store.state.loading" id="main-green-preloader">
      <div class="preloader" style="">
        <div class="loader">
          <div class="shadow"></div>
          <div class="box"></div>
        </div>
      </div>
    </div>
  </transition>
  <transition v-if="$store.state.menuDisplayed" name="fade">
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
#app {
  font-family: "Open Sans", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: .9rem;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate {
  17% {
    border-bottom-right-radius: 3px
  }

  25% {
    -webkit-transform: translateY(9px) rotate(22.5deg);
    transform: translateY(9px) rotate(22.5deg)
  }

  50% {
    -webkit-transform: translateY(18px) scale(1,.9) rotate(45deg);
    transform: translateY(18px) scale(1,.9) rotate(45deg);
    border-bottom-right-radius: 40px
  }

  75% {
    -webkit-transform: translateY(9px) rotate(67.5deg);
    transform: translateY(9px) rotate(67.5deg)
  }

  100% {
    -webkit-transform: translateY(0) rotate(90deg);
    transform: translateY(0) rotate(90deg)
  }
}

@-webkit-keyframes shadow {
  50% {
    -webkit-transform: scale(1.2,1);
    transform: scale(1.2,1)
  }
}

@keyframes shadow {
  50% {
    -webkit-transform: scale(1.2,1);
    transform: scale(1.2,1)
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
.preloader {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background: -webkit-gradient(linear,left top,right top,from(#ee0979),to(#ff6a00));
  background: linear-gradient(90deg,#ee0979 0%,#ff6a00 100%);
  top: 0;
  left: 0;
}
.preloader .loader {
  position: absolute;
  top: 43%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-43%);
  transform: translateY(-43%);
  text-align: center;
  margin: 0 auto;
  width: 50px;
  height: 50px;
}
.preloader .shadow {
  width: 100%;
  height: 5px;
  background: #000;
  opacity: .1;
  position: absolute;
  top: 59px;
  left: 0;
  border-radius: 50%;
  -webkit-animation: shadow .5s linear infinite;
  animation: shadow .5s linear infinite;
}
.shadow {
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}
.preloader .box {
  width: 100%;
  height: 100%;
  background: #fff;
  -webkit-animation: animate .5s linear infinite;
  animation: animate .5s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px;
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
