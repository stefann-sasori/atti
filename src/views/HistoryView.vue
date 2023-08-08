<template>
  <div class="history">
<!--    <div class="half-top">-->
<!--      -->
<!--    </div>-->
    <div class="head">
        <span @click="showHome()" class="icon-container angle-left">
          <img class="ui-icon" src="../assets/images/hamburger.png" alt="">
        </span>
      <!--        <span>Opérations</span>-->
      <span class="absolute-right">
<!--          <span @click="$router.push({name: 'Error',  params: {title: 'Pdf'}})" class="icon-container">-->
        <!--            <img class="ui-icon" src="../assets/ui/pdf.png" alt="">-->
        <!--          </span>-->
          <span  @click="$router.push({name: 'Accueil'})" class="">
            <img class="logo-icon" src="../assets/images/logo.png" alt="">
          </span>
        </span>
    </div>
    <div class="summary box">
      <div style="display: flex; justify-content: center; align-items: center; height: 96px">
        <img style="width: 72px;" src="../assets/images/icon-bank.png" alt="">
      </div>
      <div class="balance">
        {{ $store.state.balance }}
        <div class="badge">Solde total</div>
      </div>
      <hr style="margin-left: -1rem;width: calc(100% + 2rem); background-color: #ddd">
      <div class="columns">
        <div class="column">
          Effectuer un virement
        </div>
        <div class="column last-column">
          Créditer
        </div>
      </div>
    </div>

    <div style="padding: 1rem 1.5rem; margin-top: 1.5rem; color: #555" class="summary box">
      <h2>Votre RIB ibanico</h2>
      <p style="font-weight: 600">
        Bénéficiaire du compte :  {{ $store.state.name }} <br>
        IBAN :  {{ $store.state.iban }} <br>
        BIC :  PRNSFRP1 <br>
        <span class="color-em">Télécharger mon rib</span>
      </p>
      <div style="display: flex; justify-content: center; align-items: center; margin-top: 3rem; margin-bottom: .5rem">
        <button style="width: 100%" class="btn">Commander ma carte IBANICO</button>
      </div>

    </div>

    <div style="padding: 1rem 0; margin-top: 1.5rem; color: #555; margin-bottom: 2rem" class="summary box">
      <h2 style="padding: 0 1.5rem">Opérations récentes</h2>
      <div style="display: flex; font-weight: 600; margin-top: 2rem">
        <div style="border-bottom: solid 3px rgb(39,170,70); padding-bottom: 1rem">Compte principal</div>
      </div>
      <table v-for="group in $store.state.operations" :key="group.key">
        <thead>
        <tr>
          <th>
            Date
          </th>
          <th>
            Description
          </th>
          <th style="text-align: center">
            Montant
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="operation in group.list" :key="operation.key">
          <td>
            <div class="date">
              <span>{{ operation.day }}</span><br><span class="date-month">{{ operation.shortMonth }}</span>
            </div>
          </td>
          <td>
            <div class="title">{{ operation.title }} <span v-if="operation.state">entrant</span><span v-else>sortant</span> </div>
          </td>
          <td style="width:7rem">
            <div class="title">{{ operation.amount }}</div>
          </td>
        </tr>
        </tbody>
      </table>

    </div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import store from "@/store";
import {DateTime} from "luxon";
import router from "@/router";
import MenuComponent from "@/components/MenuComponent.vue";

@Options({
  components: {
    MenuComponent,
  },
})
export default class HistoryView extends Vue {
  hiddenMenuOpen = false;
  yesterday(){
    return DateTime.now().setLocale('en-gb').minus({days: 1}).toLocaleString();
  }
  showHiddenMenu(){
    this.hiddenMenuOpen = true;
  }
  hideHiddenMenu(){
    this.hiddenMenuOpen = false;
  }
  showDetail(monthKey: any, operationKey: any){
    router.push({name: 'Detail', params: {monthKey: monthKey, operationKey: operationKey} });
  }
  showRib(){
    store.commit('showLoader');
    setTimeout(() => {
      this.$router.push('rib');
      store.commit('hideLoader');
    }, 500);
  }
  showHome(){
    store.commit('showLoader');
    setTimeout(() => {
      this.$router.push('accueil');
      store.commit('hideLoader');
    }, 500);
  }
}
</script>
<style scoped>
@import "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap";
@import "https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap";
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
body {
  font-family: roboto,sans-serif;
}
.btn{
  background-color: rgb(39,170,70);
  font-weight: 700;
  border: none;
  padding: 14.5px 30px;
  font-size: 1rem;
  line-height: initial;
  border-radius: 4px;
  -webkit-transition: .5s;
  transition: .5s;
  position: relative;
  z-index: 1;
  color: white;
}
table{
  border-collapse: collapse;
}
thead, th {
  background-color: #f5f7f9;
  font-weight: 600;
}
thead{
  border-top: solid 2px rgba(175, 177, 179, 0.3);
}
th{
  padding: .5rem;
}
@keyframes shadow {
  50% {
    -webkit-transform: scale(1.2,1);
    transform: scale(1.2,1)
  }
}
.box{
  background-color: white;
  background-color: white;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 0.3rem;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}
.history{
  background-color: #f9f9fb;
  display: flex;
  flex-direction: column;
  font-family:  "Open Sans", sans-serif;
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
  width: calc(100% - 2rem);
  position: absolute;
  bottom: 1rem;
  left: 1rem;
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
  font-size: .75rem;
}
.date {
  /* background-color: #eee; */
  text-align: center;
  width: 1.5rem;
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
}
.date span {
  display: block;
  line-height: 1;
  font-size: 1rem;
}
.date span.date-month{
  font-size: .8rem;
}
.title{
  font-size: 1.1rem;
  font-weight: 600;
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
  justify-content: space-between;
  margin-bottom: 0;
}

.columns .column {
  color: rgb(39,170,70);
}
.form-row input {
  border-radius: 1rem;
  padding: .5rem;
  padding-left: 2.5rem;
  width: auto;
  font-size: .9rem;
  flex: 1;
  margin-right: .5rem;
}

.columns .column div {
  font-weight: normal;
  font-size: .7rem;
  color: #777;
}
.balance .badge {
  font-size: .9rem;
  /* background-color: #eee; */
  /* width: 4rem; */
  /* text-align: center; */
  color: #9e9d9d;
  /* border-radius: 2rem; */
  padding: 0.75rem;
  line-height: 1;
}
.head {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
  background-color: white;
}
.angle-left img.ui-icon {
  height: 24px;
  width: 24px;
}
span.icon-container.angle-left {
  justify-content: start;
}
/*.half-top {*/
/*  background-color: white;*/
/*}*/
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
  font-size: 1.8rem;
  margin: 0;
  color: black;
  font-weight: 600;
  text-align: center;
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
  color: rgb(39,170,70);
}
a{
  text-decoration: none;
}
.logo-icon{
  width: 76px;
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
  /*color: #1da35f;*/
  margin: 0;
  /*font-family: "Source Sans Pro Semibold","Source Sans Pro Regular","Source Sans Pro","Arial",sans-serif;*/
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
