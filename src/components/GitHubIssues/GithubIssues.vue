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
          <span v-if="!loading">
            GO
          </span>
          <FacebookLoader
            :loading="loading"
            :color="'#fff'"
            :size="30"
          />
        </button>

        <button @click.prevent.stop="reset()" type="buttom">
          LIMPAR
        </button>
      </div>
    </form>

    <div class="list-issues " v-if="issues.length > 0 && visible">
      <table>
        <thead>
          <tr>
            <th>Numero</th>
            <th>Titulo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="issue in issues" :key="issue.number">
            <td>
              <a
                @click.prevent.stop="loadIssue(issue.number)"
                href=""
              >
                {{ issue.number }}
              </a>
            </td>
            <td>{{ issue.title }}</td>
          </tr>
          <tr v-if="!!!issues.length">
            <td colspan="2">
              Nenhuma issue
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="!visible" class="detail">
      <div class="header-detail">
        <button @click="back()">
          <font-awesome-icon
            icon="arrow-left"
            :style="{ color: '#48e87b' }"
            size="lg"
          />
        </button>
      </div>
      <img
        :src="`${issue.user.avatar_url}`"
        alt=""
        width="100"
        height="100"
      />

      <h1>
        {{ issue.user.login }}
      </h1>
      <p>
        {{ issue.body }}
      </p>
    </div>
  </div>
</template>

<script>
import api from "../../services/api";
import { FacebookLoader } from "vue-spinners-css";
export default {
  name: "Home",

  components: {
    FacebookLoader,
  },

  data() {
    return {
      msg: "ola mundo",
      username: "",
      repository: "",
      loading: false,
      issues: [],
      issue: null,
      visible: {
        list: true,
      },
    };
  },

  methods: {
    reset() {
      this.username = "";
      this.repository = "";
    },

    loadIssues() {
      this.loading = true;
      api
        // .get(`/repos/${this.username}/${this.repository}/issues`)
        .get(`/repos/rocketseat/unform/issues`)
        .then((res) => {
          this.issues = res.data;
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          if (error.response.status === 404) {
            return this.$vToastify.error("Nada encontrado", "Falha");
          }
          return this.$vToastify.error(
            "verifique sua internet",
            "Falha na requisição",
          );
        });
    },

    loadIssue(id) {
      api
        .get(
          // `/repos/${this.username}/${this.repository}/issues/${id}`,
          `/repos/rocketseat/unform/issues/${id}`,
        )
        .then((res) => {
          this.visible = false;
          this.issue = res.data;
        })
        .catch((error) => {
          this.loading = false;
          if (error.response.status === 404) {
            return this.$vToastify.error(
              "erro ao abrir issue",
              "Falha",
            );
          }
          return this.$vToastify.error(
            "verifique sua internet",
            "Falha na requisição",
          );
        });
    },

    back() {
      this.visible = true;
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
  overflow: hidden;
}

.App h1:first {
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

.list-issues {
  margin-top: 100px;
  padding: 10px 20px;
  width: 100%;

  -webkit-box-shadow: 0px -7px 5px 3px rgba(209, 209, 209, 1);
  -moz-box-shadow: 0px -7px 5px 3px rgba(209, 209, 209, 1);
  box-shadow: 0px -7px 5px 3px rgba(209, 209, 209, 1);

  border-radius: 30px;

  animation-name: slide-in-blurred-bottom;
  animation-duration: 0.5s;
}

.list-issues th {
  text-align: left;
  padding-right: 40px;
  padding-bottom: 20px;
}

.list-issues td {
  padding-bottom: 10px;
  color: #111;
}
.list-issues td + td {
  color: #666;
}

.detail {
  width: 100%;
  animation-name: slide-in-blurred-bottom;
  animation-duration: 0.5s;

  -webkit-box-shadow: 0px -7px 5px 3px rgba(209, 209, 209, 1);
  -moz-box-shadow: 0px -7px 5px 3px rgba(209, 209, 209, 1);
  box-shadow: 0px -7px 5px 3px rgba(209, 209, 209, 1);

  margin-top: 20px;

  padding-left: 20px;
  padding-top: 20px;
}

.detail h1 {
  color: #444;
}

.detail p {
  color: #555;
  margin-top: 10px;
  padding-bottom: 40px;
}
.detail img {
  border: 3px solid #555;
  border-radius: 20px;
}
.header-detail button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0;
  background: transparent;
  transition: background 0.5s;
}
.header-detail button:hover {
  background: #d9ffd2;
}
.header-detail {
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
}

/**
animations
 */
@keyframes slide-in-blurred-bottom {
  0% {
    -webkit-transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
    transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
    overflow: hidden;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
    transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}
</style>
