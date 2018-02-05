//全局配置
var baseUrl = "http://localhost:9090";
var wsServer = "ws://localhost:9090";
var config = new function () {
    this.url = {
        register: baseUrl + "/service/v1/user/register",
        login: baseUrl + "/service/v1/user/login",
        server: wsServer + "/chatServer/",
    }
}

