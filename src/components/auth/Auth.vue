<template>
  <div class="auth-content">
    <div class="auth-modal">
      <hr />
      <div class="auth-title">Login</div>

      <input v-model="user.name" type="text" placeholder="Nome" />
      <input v-model="user.password" type="password" placeholder="Senha" />

      <button @click="signin">Enviar</button>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, showError, userKey } from "../../global";
import axios from "axios";

export default {
  name: "Auth",
  data: function () {
    return {
      user: {},
    };
  },
  methods: {
    signin() {      
      axios
        .post(`${baseApiUrl}/signin`, this.user)
        .then((res) => {
          this.$store.commit("setUser", res.data);
          localStorage.setItem(userKey, JSON.stringify(res.data))
          this.$router.push({ path: "/" })
        })
        .catch(showError);
    },
  },
};
</script>

<style>
.auth-content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F4F3EF;
}

.auth-modal {
  border: 2px solid #bbb;
  background-color: #F4F3EF;
  width: 350px;
  padding: 35px;
  box-shadow: 0 25px 30px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-title {
  font-size: 1.3rem;
  font-weight: 100;
  margin-top: 10px;
  margin-bottom: 15px;
}

.auth-modal input {
  border: 1px solid #bbb;
  width: 100%;
  margin-bottom: 15px;
  padding: 3px 8px;
}

.auth-modal button {
  align-self: flex-end;
  background-color:#302b63;
  color: #fff;
  padding: 5px 15px;
}

.auth-modal hr {
  border: 0;
  width: 100%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(120, 120, 120, 0),
    rgba(120, 120, 120, 0.75),
    rgba(120, 120, 120, 0)
  );
}
</style>
