<template>
  <div class="accueil">
    <div class="notification-container flex">
      <div class="notifications">
        <span class="notif-text">Notifications</span>
        <span class="notif-count round-radius orange-bg">0</span>
      </div>
    </div>
    <div class="chart-container">
      <img src="../assets/images/chart.jpg" alt="">
    </div>
    <div class="content-text">
      <div class="color-em">Aujourd'hui</div>
      <div class="balance">
        {{ $store.state.balance }}
      </div>
      <div class="account-label">
        Compte Courant <em>{{ $store.state.iban }}</em>
      </div>
    </div>
    <div class="account-list">
      <div @click="showHistory()" class="account soft-shadow ">
        <div class="balance">
          {{ $store.state.balance }}
        </div>
        <div>{{ $store.state.iban }}5</div>
        <div>Compte Courant</div>
      </div>
    </div>
    <transition name="fade">
      <div v-show="hiddenMenuOpen" class="hidden-menu">
        <div class="hidden-menu-content">
          <ul>
            <li  @click="showRib()">
            <span class="icon-container">
              <img class="ui-icon" src="../assets/ui/rib.png" alt="">
            </span>
              <span class="hidden-menu-text">Afficher mon RIB</span>
            </li>
            <li>
            <span class="icon-container">
              <img class="ui-icon" src="../assets/ui/clock.png" alt="">
            </span>
              <span class="hidden-menu-text">Consulter les opérations à venir</span>
            </li>
            <li>
            <span class="icon-container">
              <img class="ui-icon" src="../assets/ui/arrows.png" alt="">
            </span>
              <span class="hidden-menu-text">Effectuer un virement</span>
            </li>
            <li>
            <span class="icon-container">
              <img class="ui-icon" src="../assets/ui/sheet.png" alt="">
            </span>
              <span class="hidden-menu-text">Payer une facture</span>
            </li>
            <li>
            <span class="icon-container">
              <img class="ui-icon" src="../assets/ui/finger.png" alt="">
            </span>
              <span class="hidden-menu-text">Recharger mobile ou Jawz</span>
            </li>
            <li>
            <span class="icon-container">
              <img class="ui-icon" src="../assets/ui/sheets.png" alt="">
            </span>
              <span class="hidden-menu-text">Consulter le relevé de compte</span>
            </li>
          </ul>
          <div @click="hideHiddenMenu()" class="close-button">
            <span class="icon-container round-radius orange-bg">
              <img class="ui-icon" src="../assets/ui/close.png" alt="">
            </span>
          </div>
        </div>
      </div>
    </transition>
    <div class="toolbar-content">
      <div class="toolbar soft-shadow">
        <span class="icon-container">
          <img class="ui-icon" src="../assets/ui/stack.png" alt="">
        </span>
        <span class="icon-container">
          <img class="ui-icon" src="../assets/ui/arrows.png" alt="">
        </span>

        <span @click="showHiddenMenu()" class="icon-container round-radius orange-bg">
          <img class="ui-icon" src="../assets/ui/bottom-menu.png" alt="">
        </span>
        <span class="icon-container">
          <img class="ui-icon " src="../assets/ui/sheet.png" alt="">
        </span>
        <span class="icon-container">
          <img class="ui-icon" src="../assets/ui/finger.png" alt="">
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import store from "@/store";

@Options({
  components: {
  },
})
export default class Accueil extends Vue {
  hiddenMenuOpen = false;
  showHiddenMenu(){
    this.hiddenMenuOpen = true;
  }
  hideHiddenMenu(){
    this.hiddenMenuOpen = false;
  }
  showHistory(){
    store.commit('showLoader');
    setTimeout(() => {
      this.$router.push('history');
      store.commit('hideLoader');
    }, 3000);
  }
}
</script>
<style scoped>
.accueil{
  background-color: #f9f9fb;
}
.balance {
  font-size: 2.5rem;
  margin: 1rem 0;

}
.hidden-menu {
  position: fixed;
  background-color: rgba(0,0,0,0.4);
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  padding: 1rem;
  box-sizing: border-box;
  align-items: self-end;
  display: flex;
  z-index: 100;
}
.hidden-menu-content {
  background-color: white;
  border-radius: 3rem;
  width: 100%;
}
.hidden-menu-content ul li {
  display: flex;
  align-items: center;
  border-top: solid 1px #ccc;
  padding: 0;
}
.hidden-menu-content ul li:last-of-type{
  border-bottom: solid 1px #ccc;
}
span.hidden-menu-text {
  font-size: .9rem;
}
.hidden-menu-content ul {

  padding: 2rem 1.5rem 0;
  list-style: none;


}
.close-button {
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
}
.toolbar-content {
  position: fixed;
  bottom: 0;
  width: 100vw;
  padding: 2rem;
  box-sizing: border-box;
}
.toolbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  padding: .25rem;
  border-radius: 5rem;
}
.account-label em {
  font-style: normal;
  font-weight: 600;
  margin-left: 1rem;
}
.account.new-account {
  position: absolute;
  right: -10rem;
  background-color: #eee;
  height: 4.8rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.account-list {
  padding: 2rem;
  height: 15rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}
.account {
  background-color: white;
  border-radius: 1rem;
  width: 13rem;
  padding: .5rem;
  cursor: pointer;

}
.account .balance {
  font-size: 1.6rem;
  margin: 0;
  color: #5ab237;
  width: 13rem;
}
.chart-container {
  width: 100vw;
  overflow-y: hidden;
  overflow-x: auto;
  padding-top: 5rem;
}
.content-text {
  text-align: left;
  padding: 2rem 1.5rem;
  background-color: white;
}
.notif-count {
  position: absolute;
  right: 0;
  padding: 0;
  height: 2rem;
  width: 2rem;
  top: 0;
  line-height: 2rem;
  color: white;
  font-weight: bold;
}
.notifications {
  background-color: white;
  padding: .5rem 3rem .5rem 1rem;
  border-radius: 5rem;
  font-size: .8rem;
  position: relative;
}
.notification-container{
  padding: 1rem;
  justify-content: right;
}
.flex {
  display: flex;

}
body {
  align-items: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 0;
  margin-right: auto;
  margin-left: auto;
  overflow-x: hidden;
  margin: 0;
  font-family: "Open Sans", "Source Sans Pro Regular","Source Sans Pro","Arial",sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.35;
  color: #000000;
  text-align: left;
}

body, html{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
img.bg.bg-desktop {
  position: fixed;
  top: 0;
  /* left: 0; */
}
a, .color-em{
  color: #ed7f5c;
}
a{
  text-decoration: none;
}
.logo-container {
  text-align: center;
  padding: 0;
}
.logo-container img {
  width: 250px;
  height: auto;
  margin-bottom: 30px;
  margin-top: 30px;

}
.orange-bg{
  background-color: #fd7853;
}
.chart-container img {
  height: 17rem;
}
.bottom-fix-menu {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1rem;
  align-items: center;
  padding-bottom: 3rem;
}
img.bg-back {
  width: 100%;
  height: auto;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
  left: 0;
}
h1{
  font-size: 1.875rem;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 0;
}
.login-content {

  width: 475px;
  box-sizing: border-box;
  max-width: 100%;
  margin: auto;
  padding: 1.5rem;
}
.input-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: .5rem;
}
h2 {
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 2rem;
  color: #1da35f;
  margin: 0;
  font-family: "Source Sans Pro Semibold","Source Sans Pro Regular","Source Sans Pro","Arial",sans-serif;
}
.ui-icon {
  height: 32px;
  width: 32px;
}
.icon-container {
  /* padding: .25rem; */
  width: 48px;
  height: 48px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
hr {
  background-color: #ccc;
  border: none;
  height: 1px;
  width: 100%;
  display: block;
  float: left;

  margin: 0;
}
form {
  clear: both;
}
.form-row {
  margin: 1rem 0;
  position: relative;
}
label {
  display: block;
  font-size: 1rem;
  letter-spacing: .5px;
}

.login{
  background-image: url(/img/ajb.png);
  background-size: 60rem;

}

.round-radius{
  border-radius: 50%;
}

.soft-shadow{
  box-shadow: 0 0 9px rgb(0 0 0 / 15%);
}
input {
  width: 100%;
  border-radius: .4rem;
  padding: 1rem;
  padding-left: 3rem;
  border: none;
  /* margin-top: 1rem; */
  letter-spacing: .5px;
  font-size: 1.2rem;
  color: #666;
  box-sizing: border-box;
  outline: none;
  box-shadow: 0 0 9px rgb(0 0 0 / 15%);
}
input:focus{
  border-color: transparent !important;
}
.lost-pass {
  color: initial;
  margin: 2rem;
  display: block;
  text-align: center;
}

.keyboard-container {
  top: auto;
  left: auto;
}
.keyboard-container button {
  width: calc(12.5% - 3px);
  height: auto;
  margin-bottom: 4px;
  font-family: bnpp_sans_condensed_light,Arial,sans-serif;
  font-size: 1.6rem;
  padding: .5rem 0;
  font-weight: bold;
  border-radius: 3px;
  top: auto;
  left: auto;
  /* margin-left: 5px; */
  background-color: #dfdfdf;
  color: black;
}
.keyboard-container button:hover {
  background-color: #efefef;
}
.form-row button.btn {
  text-align: center;
  background-color: #ed7f5c;
  color: white;
  /* font-weight: 300; */
  margin-top: 2rem;
  padding: .75rem;
  display: flex;
  font-size: 1.1rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  border-radius: 6rem;
  justify-content: center;
  border: 2px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form-row button.btn:hover{
  background: transparent;
  border-color: #e86441;
  color: #e86441;
}


</style>
