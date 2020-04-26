<template>
  <div class="App">
    <h1>Vue.JS + Github</h1>

    <p>
      Página que lista issues de um repositório do Github, usando apenas Vue
    </p>

    <form>
      <input type="text" name="username" placeholder="github username" />
      <input type="text" name="repository" placeholder="github repositório" />

      <div class="area-buttons">
        <button type="submit">GO</button>
        <button type="buttom">LIMPAR</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      msg: "ola mundo",
    };
  },
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
