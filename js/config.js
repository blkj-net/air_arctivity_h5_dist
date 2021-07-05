window.g = {
  baseURL: "http://admin.west.bilan.wyz.ltd/mock-server", //api接口地址
  wxOauth: true, //启用微信授权
  appId: "wx6a764f7fa9554e44", //公众号Id
  allUrl: "http://west.bilan.wyz.ltd",
  redirectUrl: "http://west.bilan.wyz.ltd/WxAuth", //oatuh授权回调地址
  // callbackUrl: "http://fuwu.wyz.ltd/oauth_callback", //oatuh授权回调获取信息访问地址
  callbackUrl: "/front/wechat/oauth",
  
};
