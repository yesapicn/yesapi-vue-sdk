<template>
  <div id="app">
    <div @click="clickHandle">
      Hello，小白。点击我测试一下！
    </div>
    <div>
      {{res}}
    </div>
  </div>
</template>

<script>
import yesapi from './components/yesapi';

export default {
  name: 'app',
  data() {
    return {
      res: ''
    }
  },
  methods: {
    clickHandle() {
      var params = {
          s: 'App.Hello.World',
          name: 'hello，小白'
      };
      var that = this;
      this.$axios({
        method: 'get',
        url: yesapi.YESAPI_HOST,
        params : yesapi.encrypt(params)
      }).then(function (response) {
          console.log(response);
          that.res = response.data;
      }).catch(function (error) {
          console.log(error);
      });
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
