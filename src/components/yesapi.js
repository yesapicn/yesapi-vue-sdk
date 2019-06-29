var md5 = require("nodejs-md5");

export default {
  encrypt(params) {
    // TODO：这里填写你的app_key，可以在http://open.yesapi.cn/?r=App/Mine查看
    const YESAPI_APP_KEY = '';
    // TODO: 这里填写你的app_secrect
    const YESAPI_APP_SECRECT = '';

    params['app_key'] = YESAPI_APP_KEY;
    params['sign'] = '';
    var sdic = Object.keys(params).sort();
    var paramsStrExceptSign = '';
    for (let ki in sdic) {
      paramsStrExceptSign += params[sdic[ki]]
    }
    var sign = '';
    md5.string.quiet(paramsStrExceptSign + YESAPI_APP_SECRECT, function (err, md5) {
      if (err) {
          console.log("生成签名失败，请刷新重试！");
      }
      else {
          sign = md5.toUpperCase();
      }
  });
    params['sign'] = sign;
    return params;
  },
  // TODO: 这里填写你的小白接口域名，可以在http://open.yesapi.cn/?r=App/Mine查看
  YESAPI_HOST : ''
}

