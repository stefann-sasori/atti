<template>
  <transition name="fade">
    <router-view/>
  </transition>
  <transition name="fade">
    <div v-show="$store.state.loading" id="main-green-preloader">
      <div class="preloader-container">
        <div class="preloader">
          <div class="preloader-content"></div>
        </div>
      </div>

    </div>
  </transition>

</template>

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
.preloader-content {
  position: absolute;
  top: -5px;
  left: -5px;
  border: 5px solid #e86441;
  border-radius: 54px;
  height: 35px;
  width: 35px;
  clip: rect(0px, 18px, 18px, 0px);
  animation: rotate 1.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.preloader {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 5px solid #c3cce0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

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
