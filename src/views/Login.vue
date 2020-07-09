<template>
  <b-col md="4" sm="8" offset-md="4" offset-sm="2" align="left" class="login-form-container">
    <img id="logo" width="350px" class="align-h-center" src="../assets/logo-dark.png" />
    <!-- <h4 class="text-left">Login with</h4> -->
    <b-form @submit="login" v-if="show">
      <div class="login-input-block">
        <b-col class="google-login text-center">
          <img
            class="align-h-center"
            @click="googleLogin"
            width="40px"
            src="../assets/512px-Google__G__Logo.svg.webp"
            alt
          />
        </b-col>
        <div class="division">
          <div class="line l"></div>
          <span>or</span>
          <div class="line r"></div>
        </div>
        <b-form-group id="input-group-1">
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Email"
            class="login-input"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input
            id="input-2"
            type="password"
            v-model="form.password"
            required
            placeholder="Password"
            class="login-input"
          ></b-form-input>
        </b-form-group>
        <b-row align-v="center"></b-row>
        <b-button class="login-input" id="submit" type="submit" variant="warning">Login</b-button>click here to
        <a href="/register">register</a>
      </div>
    </b-form>
  </b-col>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase/app";
import "firebase/auth";
// const aut
const provider = new firebase.auth.GoogleAuthProvider();

export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      show: true
    };
  },
  methods: {
    login(evt) {
      evt.preventDefault();
      try {
        const user = firebase
          .auth()
          .signInWithEmailAndPassword(this.form.email, this.form.password);
        this.$router.replace({ name: "Home" });
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    },
    async googleLogin() {
      try {
        let login = await firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user;
            //TODO remove this line
            console.log(user, token);
          })
          .then(() => this.$router.replace({ name: "Home" }))
          .catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            // ...
            console.log({ errorCode, errorMessage, email, credential });
          });
        console.log(login);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
#app > div > div > img {
  margin: 15px auto;
  display: block;
}
#logo {
  margin: 0 auto;
  display: block;
}
.division {
  float: none;
  margin: 0 auto 18px;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 100%;
}
.division .line {
  height: 1px;
  border-top: 1px solid #dfdfdf;
  position: absolute;
  top: 10px;
  width: 34%;
}
.l {
  left: 0;
}
.r {
  right: 0;
}
.google-login {
  cursor: pointer;
  margin: 4% 0;
}
.login-form-container {
  margin-top: 15vh;
  padding: 10px 10px 60px 10px;
  border-radius: 5px;
}
.login-input-block {
  margin-top: 20px;
}
.login-input {
  height: 46px;
  padding: 13px 12px;
}
#submit {
  width: 100%;
}
</style>