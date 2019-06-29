![](http://cdn7.okayapi.com/CEE4B8A091578B252AC4C92FB4E893C3_20190304213902_63f85e982adc8419feffd862e883581e.jpeg)

# yesapi-vue-sdk
小白接口（YesApi.cn）vue SDK包

## 使用示例
1. 开始： npm install
2. 在yesapi.js配置你的host，app_key, app_secret
3. 在页面axios请求
4. 编译运行： npm run serve
```vue
methods: {
    function() {
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
```

## 示例
![](http://cd7.yesapi.net/89E670FD80BA98E7F7D7E81688123F32_20190630003230_490aae61ee89d8776d602e21baa647c7.png)
