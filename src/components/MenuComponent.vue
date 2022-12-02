<template>
  <div class="hidden-menu menu-component">
      <div class="hidden-menu-content">
        <div class="menu-head">
          <div class="action-icons">
            <span @click="logout()" class="icon-container">
              <img src="../assets/ui/logout.png" class="ui-icon" alt="">
            </span>
            <img src="../assets/images/logo-white.png" alt="">
            <span class="icon-container">
            <img src="../assets/ui/params.png " class="ui-icon" alt="">
          </span>
          </div>
          <div class="menu-title">
            <span>... {{ $store.state.name }}</span>
          </div>
        </div>
        <div class="operation-options">
          <div class="form-row">
            <img src="../assets/ui/search.png" alt="" class="ui-icon input-icon">
            <input type="text" class="soft-shadow" placeholder="Chercher...">
          </div>
        </div>

        <div class="menu-item-list">
          <h5 class="orange">
            Consultation
          </h5>
          <ul>
            <li  @click="$router.push({name: 'Comptes'})" >
            <span class="icon-container">
              <img class="ui-icon" src="../assets/ui/stack.png" alt="">
            </span>
              <span class="hidden-menu-text">Comptes</span>
            </li>
            <li  @click="$router.push({name: 'Error', params: {title: 'Impayés'}})" >
            <span class="icon-container">
              <img class="ui-icon" src="../assets/ui/sheet-chart.png" alt="">
            </span>
              <span class="hidden-menu-text">Impayés</span>
            </li>
            <li  @click="$router.push({name: 'Error', params: {title: 'Cartes'}})" >
            <span class="icon-container">
              <img class="ui-icon" src="../assets/ui/card.png" alt="">
            </span>
              <span class="hidden-menu-text">Cartes</span>
            </li>
            <li  @click="$router.push({name: 'Error', params: {title: 'Cartes conventionnées'}})" >
            <span class="icon-container">
              <img class="ui-icon" src="../assets/ui/card.png" alt="">
            </span>
              <span class="hidden-menu-text">Cartes conventionnées</span>
            </li>
            <li  @click="$router.push({name: 'Error', params: {title: 'Tombées et échéances'}})" >
            <span class="icon-container">
              <img class="ui-icon" src="../assets/ui/calendar.png" alt="">
            </span>
              <span class="hidden-menu-text">Tombées et échéances</span>
            </li>
          </ul>
          <h5 class="orange">
            Opérations
          </h5>
          <ul>
            <li  @click="$router.push({name: 'History'})" >
              <span  class="icon-container">
                <img class="ui-icon" src="../assets/ui/arrows.png" alt="">
              </span>
              <span class="hidden-menu-text">Virements</span>
            </li>
            <li  @click="$router.push({name: 'Error', params: {title: 'Mes bénéficiaires'}})" >
              <span class="icon-container">
                <img class="ui-icon" src="../assets/ui/user-check.png" alt="">
              </span>
              <span class="hidden-menu-text">Mes bénéficiaires</span>
            </li>
            <li  @click="$router.push({name: 'Error', params: {title: 'Cartes'}})" >
              <span class="icon-container">
                <img class="ui-icon" src="../assets/ui/card.png" alt="">
              </span>
              <span class="hidden-menu-text">Cartes</span>
            </li>
            <li  @click="$router.push({name: 'Error', params: {title: 'Paiement de facture'}})" >
              <span class="icon-container">
                <img class="ui-icon" src="../assets/ui/sheet.png" alt="">
              </span>
              <span class="hidden-menu-text">Paiement de factures</span>
            </li>
            <li  @click="$router.push({name: 'Error', params: {title: 'Recharges prépayés'}})" >
              <span class="icon-container">
                <img class="ui-icon" src="../assets/ui/finger.png" alt="">
              </span>
              <span class="hidden-menu-text">Recharges prépayés</span>
            </li>
          </ul>
        </div>


        <div @click="$store.commit('hideMenu')" class="close-button">
            <span class="icon-container round-radius orange-bg">
              <img class="ui-icon" src="../assets/ui/close.png" alt="">
            </span>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import store from "@/store";
import {Options, Vue} from "vue-class-component";

@Options({
  components: {
  },
})
export default class MenuComponent extends Vue {

  logout(){
    store.commit('hideMenu');
    this.$router.push('Login')
  }
}
</script>

<style scoped>
.history{
  background-color: #f9f9fb;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  max-height: 100vh;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.operation-options {
  padding: 2rem 0;
  padding-bottom: 1rem;
}
.month {
  text-transform: uppercase;
  margin-left: 1rem;
  font-size: .8rem;
  margin-top: .5rem;
}
.operation-list {
  text-align: left;
  flex: 1;
  height: auto;
  overflow: auto;
  padding-bottom: 10rem;
}
h5 {
  margin: 0;
  text-align: left;
  padding: 0 1rem;
  text-transform: uppercase;
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

}
.menu-item-list {
  flex: 1;
  overflow: auto;
}
.hidden-menu-content {
  background-color: white;
  border-radius: 1.5rem;
  width: calc(100% - 1rem);
  position: absolute;
  top: 1rem;
  left: .5rem;
  height: calc(100% - 2rem);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.hidden-menu-content ul li {
  display: flex;
  align-items: center;
  padding: 0;
}
.operation-options {
  padding: 1rem !important;
}
.menu-head .action-icons img.ui-icon {
  width: 32px;
  height: 32px;
}
.menu-head{
  background-color: #212223;
}
span.hidden-menu-text {
  font-size: .8rem;
  margin-left: 1rem;
}
.hidden-menu-content ul {

  padding: 0 1.5rem;
  list-style: none;
  margin-top: 0;
  border-bottom: solid 1px #eee;
  padding-bottom: 1rem;
}
.action-icons > img {
  width: 7rem;
}
.menu-title {
  color: white;
  font-weight: bold;
  padding: .5rem;
}
.action-icons {
  display: flex;
  padding: 1rem 0;
  justify-content: space-between;
  margin: 0 1rem;
  border-bottom: solid 1px #333;
}

.close-button {
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
}
.operations {
  margin-top: .5rem;
  border-bottom: solid 1px #ccc;
}
.operation {
  display: flex;
  align-items: center;
  border-top: solid 1px #ccc;
  font-size: .95rem;
}


.i-want {
  position: absolute;
  top: -1.5rem;
  color: white;
  padding: .5rem 2rem;
  border-radius: 3rem;
  left: 50%;
  transform: translateX(-50%);
}
.operation .title {
  padding: .37rem;
  border-left: solid 1px #ed7f5c;
  flex: 1;
  font-size: .75rem;
}
.date {
  background-color: #eee;
  padding: .5rem .5rem;
  text-align: center;
  width: 1.5rem;
}
.date span {
  display: block;
  line-height: 1;
  font-size: .8rem;
}
.amount {
  font-weight: 600;
  color: #b5362d;
  padding-right: 1.75rem;
  position: relative;
  font-size: .75rem;
}
.amount.green{
  color: #5ab237;
}

.amount img.ui-icon {
  position: absolute;
  width: 9px;
  height: 16px;
  top: 50%;
  transform: translateY(-50%);
  right: .85rem;
}
.operation-options .form-row {
  display: flex;
  padding: 0 1rem;
  box-sizing: border-box;
  justify-content: space-between;
  margin-top: 0;
}
.balance .absolute-right {
  position: absolute;
  right: 0;
  bottom: 0;
}
.summary .balance {
  position: relative;
}
.summary {
  text-align: left;
  padding: 1rem;
  margin-top: 1rem;
}
.columns {
  display: flex;
  margin: 1rem 0;
  font-weight: 600;
}
.column.last-column {
  border-left: solid 1px #ccc;
  padding-left: 2rem;
}
.columns .column {
  /*width: 50%;*/
}
.form-row input {
  padding: .5rem;
  padding-left: 2.5rem;
  width: auto;
  font-size: .9rem;
  flex: 1;
  margin-right: .5rem;
  border-radius: .5rem;
}
.column:not(.last-column){
  padding-right: 2rem;
}
.columns .column div {
  font-weight: normal;
  font-size: .7rem;
  color: #777;
}
.balance .badge {
  font-size: .7rem;
  background-color: #eee;
  width: 4rem;
  text-align: center;
  color: #555;
  border-radius: 2rem;
  padding: .25rem;
  line-height: 1;
}
.head {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
}
.angle-left img.ui-icon {
  height: 24px;
  width: 16px;
}
span.icon-container.angle-left {
  justify-content: start;
}
.half-top {
  background-color: white;
}
span.absolute-right {
  display: flex;
}
.balance {
  font-size: 2.5rem;
  margin: 1rem 0;

}
.toolbar-content {
  position: fixed;
  bottom: 0;
  width: 100vw;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #f9f9fb;
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

}
.account .balance, .summary .balance {
  font-size: 1.6rem;
  margin: 0;
  color: #5ab237;
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
.orange{
  color: #fd7853;
}
.chart-container img {
  height: 17rem;
}
.hidden-menu-content h5 + ul li .icon-container {
  width: 32px;
  height: 32px;
  padding: .25rem 0;
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
.form-row .input-icon {
  left: 1.75rem;
  /* border-radius: 3rem; */
  width: 19px;
  height: 19px;
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
  height: 24px;
  width: 24px;
}
.icon-container {
  /* padding: .25rem; */
  width: 40px;
  height: 40px;
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
  -webkit-box-shadow: 0 0 9px rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.15);

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
  -webkit-box-shadow: 0 0 9px rgba(0, 0, 0, 0.15);
  -webkit-appearance: none;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.15);
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
