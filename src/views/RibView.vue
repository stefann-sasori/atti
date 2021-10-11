<template>
  <div  class="rib">
    <div class="half-top">
      <div class="head">
        <span @click="showHome()" class="icon-container angle-left">
          <img class="ui-icon" src="../assets/ui/angleleft.png" alt="">
        </span>
        <span>RIB</span>
        <span class="absolute-right">
          <span class="icon-container">
            <img class="ui-icon" src="../assets/ui/rib.png" alt="">
          </span>
          <span class="icon-container">
            <img class="ui-icon" src="../assets/ui/home.png" alt="">
          </span>
        </span>

      </div>
    </div>
    <div class="rib-summary">
      <div class="logo-container">
        <img src="../assets/images/logoati.png" alt="">
      </div>
      <div class="name">{{ $store.state.name }}</div>
      <div class="qrcode-container soft-shadow">
        <img src="../assets/ui/qrcode.png" alt="">
      </div>
    </div>
    <div class="rib-info">
      <div>
        <span class="icon-container">
            <img class="ui-icon" src="../assets/ui/stack.png" alt="">
          </span>
      </div>
      <div>Compte Courant</div>
      <div class="strong">Agence : CASA RUE NASSIH EDDINE</div>
      <div class="rib-iban">
        <div class="rib-iban-component">
          <div class="iban-title">Code Banque</div>
          <div class="iban-value">007</div>
        </div>
        <div class="rib-iban-component">
          <div class="iban-title">Code Ville</div>
          <div class="iban-value">780</div>
        </div>
        <div class="rib-iban-component">
          <div class="iban-title">N° Compte</div>
          <div class="iban-value">0003557000000415</div>
        </div>
        <div class="rib-iban-component">
          <div class="iban-title">Clé RIB</div>
          <div class="iban-value">45</div>
        </div>
      </div>
      <div class="swift">Code swift : <span>BCMAMAMC</span></div>
    </div>
    <div class="rib-sharing">
      <span class="icon-container round-radius dark-orange-bg">
            <img class="ui-icon" src="../assets/ui/share.png" alt="">
          </span>

      <div class="strong">Que voulez-vous partager?</div>
      <div class="share-options">
        <div class="share-option">
          <img src="../assets/ui/qr-icon.png" class="ui-icon" alt=""> <span>QR Code</span>
        </div>
        <div class="share-option">
          <img src="../assets/ui/text-select.png" class="ui-icon" alt=""> <span>Texte</span>
        </div>
      </div>
    </div>
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
    <transition name="fade">
      <div v-show="hiddenMenuOpen" class="hidden-menu">
        <div class="hidden-menu-content">
          <ul>
            <li>
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

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import store from "@/store";

@Options({
  components: {
  },
})
export default class RibView extends Vue {
  hiddenMenuOpen = false;
  showHiddenMenu(){
    this.hiddenMenuOpen = true;
  }
  hideHiddenMenu(){
    this.hiddenMenuOpen = false;
  }
  showHome(){
    store.commit('showLoader');
    setTimeout(() => {
      this.$router.push('accueil');
      store.commit('hideLoader');
    }, 3000);
  }
}
</script>
<style scoped>
.rib{
  background-color: #f9f9fb;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  max-height: 100vh;
}
.rib-info {
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
}
.rib-info > div {
  display: flex;
  justify-content: center;
}
.strong {
  font-weight: 600;
}
.rib-iban-component {
  text-align: left;
}
.rib-iban {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between !important;
  padding: 0 1rem;
}
.iban-value {
  text-align: center;
  font-size: .9rem;
  background-color: #f9f9f9;
  padding: .5rem 1rem;
  border-radius: 3rem;
}
iban-title {
  font-size: .7rem;
  color: #aaa;
}
.swift {
  margin: 1rem;
  font-size: .8rem;
}
.swift span {
  font-size: 1rem;
  line-height: 1.1rem;
  margin-left: .5rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.name {
  font-weight: 600;
  font-size: 1.1rem;
}
.qrcode-container img {
  width: 124px;
  height: 124px;
}
.qrcode-container {
  width: 140px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: .5rem;
  border-radius: .75rem;
  position: relative;
  margin: 1.5rem auto -2rem;
}
.rib-summary .logo-container img {
  width: 150px;
  margin: 1rem;
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
  font-size: .9rem;
}
.operation-list {
  text-align: left;
  flex: 1;
  height: auto;
  overflow: auto;
  padding-bottom: 10rem;
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
}
.date {
  background-color: #eee;
  padding: .5rem;
}
.date span {
  display: block;
  line-height: 1;
  font-size: .9rem;
}
.amount {
  font-weight: 600;
  color: #b5362d;
  padding-right: 2.25rem;
  position: relative;
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
  right: 1rem;
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
  border-radius: 1rem;
  padding: .75rem;
  padding-left: 3rem;
  width: auto;
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
.dark-orange-bg{
background-color: #e9643f;
}
.chart-container img {
  height: 17rem;
}
.rib-sharing {
  background-color: white;
  margin-top: 3rem;
  padding: 1rem;
  padding-top: 0;
}
.share-options {
  display: flex;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
}
.share-option {
  display: flex;
  align-items: center;
  margin: 0 1rem;
  background-color: #f0f0f0;
  padding: .5rem 1rem;
  width: 7rem;
  border-radius: 3rem;
  justify-content: center;
}
.share-option .ui-icon {
  margin: 0 .5rem;
  width: 24px;
  height: 24px;
}
.rib-sharing .icon-container {
  margin-top: -1.5rem;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: .5rem;
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
  left: 1.5rem;
  /* border-radius: 3rem; */
  width: 24px;
  height: 24px;
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
