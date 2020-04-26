<template>
  <div class="App">
    <h1>Vue.JS + Github</h1>

    <p>
      Página que lista issues de um repositório do Github, usando
      apenas Vue
    </p>

    <form>
      <input
        type="text"
        v-model="username"
        placeholder="github username"
      />
      <input
        type="text"
        v-model="repository"
        placeholder="github repositório"
      />

      <div class="area-buttons">
        <button @click.prevent.stop="loadIssues()" type="submit">
          GO
        </button>
        <button @click.prevent.stop="reset()" type="buttom">
          LIMPAR
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import api from "../../services/api";
export default {
  name: "Home",

  data() {
    return {
      msg: "ola mundo",
      username: "",
      repository: "",
      issues: [],
    };
  },

  methods: {
    reset() {
      this.username = "";
      this.repository = "";
    },

    loadIssues() {
      api
        .get(`/repos/${this.username}/${this.repository}/issues`)
        .then((res) => {
          this.issues = res.data;
          console.log(res.data);
        })
        .catch((error) => {
          if (error.response.status === 404) {
            return this.$vToastify.error("Nada encontrado");
          }
          return this.$vToastify.error("Falha na requisição");
        });
    },
  },
  created() {},
};
</script>

<style scoped>
.App {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
}

.App h1 {
  margin-bottom: 90px;
}

.App form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
}

.App form input {
  width: 100%;
  margin-top: 30px;

  padding: 20px 10px;

  border-radius: 8px;
  border: 0;
  border: 3px solid #ddd;
  transition: border 0.3s, box-shadow 0.3s;
}
.App form input:focus {
  border: 4px solid #777;
  -webkit-box-shadow: -1px 2px 5px 3px rgba(209, 209, 209, 1);
  -moz-box-shadow: -1px 2px 5px 3px rgba(209, 209, 209, 1);
  box-shadow: -1px 2px 5px 3px rgba(209, 209, 209, 1);
}
.App form input::placeholder {
  color: #999;
  opacity: 0.5;
}

.App form .area-buttons {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.area-buttons button[type="submit"] {
  color: #fff;
  font-weight: bold;
  background: #48e87b;

  width: 200px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  transition: background 0.5s, box-shadow 0.5s;
}
.area-buttons button[type="submit"]:hover {
  background: #45bf49;
  -webkit-box-shadow: -10px 10px 5px 0px rgba(224, 208, 224, 0.54);
  -moz-box-shadow: -10px 10px 5px 0px rgba(224, 208, 224, 0.54);
  box-shadow: -10px 10px 5px 0px rgba(224, 208, 224, 0.54);
}
.area-buttons button[type="buttom"] {
  width: 100px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #999;
  background: transparent;
  transition: background 0.5s, box-shadow 0.5s;
}
.area-buttons button[type="buttom"]:hover {
  background: #f5f5f5;
  -webkit-box-shadow: -10px 10px 5px 0px rgba(224, 208, 224, 0.54);
  -moz-box-shadow: -10px 10px 5px 0px rgba(224, 208, 224, 0.54);
  box-shadow: -10px 10px 5px 0px rgba(224, 208, 224, 0.54);
}
</style>
