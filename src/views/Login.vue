<template>
  <div class="login">
    <div class="login-content">
      <div class="flex justify-content-between">
        <span class="round-radius white-bg soft-shadow icon-container">
          <img class="ui-icon  left" src="../assets/ui/switch.png" alt="">
        </span>
        <span class="round-radius grey-bg  icon-container">
          <img class="ui-icon  right" src="../assets/ui/call-center.png" alt="">
        </span>

      </div>
      <div class="logo-container">
        <img src="../assets/images/logoati.png" alt="">
      </div>
<!--      <h1>Bienvenue sur votre banque en ligne</h1>-->


        <div class="form-row">
          <img src="../assets/ui/user.png" class="ui-icon input-icon">
          <input v-model.trim="uuid"  placeholder="Nom d'utilisateur" type="text" name="uuid" id="inputUuid" class="form-control" required
                 autofocus>
        </div>
        <div class="form-row">
          <img src="../assets/ui/pass.png" class="ui-icon input-icon">
          <input v-model.trim="password" placeholder="Mot de passe"  type="password" name="password" id="inputPassword" class="form-control" required>
        </div>
        <div class="form-row flex justify-content-left align-items-center">
          <img class="ui-icon" src="../assets/ui/ticker.png" alt="">  <span style="margin-left: 1rem">Se souvenir de moi</span>
        </div>

        <div class="form-row flex justify-content-between align-items-center">
          <a class="color-em" href="#">Mot de passe oublié</a>
          <a class="color-em" href="#">Identifiant oublié</a>
        </div>
        <div class="form-row">
          <hr>
        </div>

        <div class="form-row">
          <button @click="connect()" class="btn" type="submit"> Connexion</button>
        </div>



    </div>
    <div class="bottom-fix-menu">
      <div class="icon-container round-radius orange-bg">
        <img class="ui-icon" src="../assets/ui/bottom-menu.png" alt="">
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Login extends Vue {
  public uuid = '';
  public password = '';
  public connect(){
    store.commit('showLoader');
    setTimeout(() => {
      if(this.uuid === "Uy53128927" && this.password === "Jasper2112"){
        this.$router.push('accueil');
      }
      store.commit('hideLoader');
    }, 3000);

  }
}
</script>
<style scoped>
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
.bottom-fix-menu {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1rem;
  align-items: center;
  padding-bottom: 2rem;
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
  padding: .5rem;
  padding-left: 2.5rem;
  border: none;
  /* margin-top: 1rem; */
  letter-spacing: .5px;
  font-size: 1rem;
  color: #666;
  box-sizing: border-box;
  outline: none;
  -webkit-appearance: none;
  -webkit-box-shadow: 0 0 9px rgba(0, 0, 0, 0.15);
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
  padding: .5rem;
  display: flex;
  font-size: 1rem;
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
.form-row.help svg {
  width: 1.2rem;
  height: 1.2rem;
}
.form-row.help {
  text-align: center;
  /* font-weight: 600; */
  line-height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: #3032C1; */
  font-size: 12px;
  margin-top: 30px;
}
.form-row.help span {
  line-height: 1;
  margin: 0 .125rem;
}
@media only screen and (max-width: 765px){
  .form-row button.btn {
    width: 100%;
  }
  .login-content {

    transform:none;
    width: 100%;
    box-sizing: border-box;
    max-width: 100%;
    box-shadow: none;
    min-height: 100vh;
    padding: 1.5rem;
  }
  .keyboard-container button{
    width: calc(25% - 3px);
  }

}
</style>
