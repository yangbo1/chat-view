//全局配置
var baseUrl = "http://120.77.148.33:9090";
var wsServer = "ws://120.77.148.33:9090";
var config = new function () {
    this.url = {
        register: baseUrl + "/service/v1/user/register",
        login: baseUrl + "/service/v1/user/login",
        server: wsServer + "/chatServer/",
        frineds: baseUrl + "/service/v1/user/findFriendsById/",
    }
}

