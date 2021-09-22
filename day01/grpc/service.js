// service.js
// 服务端
const grpc = require("@grpc/grpc-js"); // 引入 gprc 框架
const user_proto = require("./user_proto.js"); // 加载解析后的 proto

// User Service 实现
const userServiceImpl = {
  login: (call, callback) => {
    // call.request 是请求相关信息
    const { request } = call;
    const { username, password } = request;

    // 第一个参数是错误信息，第二个参数是响应相关信息
    callback(null, {
      access_token: `username = ${username}; password = ${password}`,
      expires: "zhang",
    });
  },
};

// 和 http 一样，都需要去监听一个端口，等待别人链接
function main() {
  const server = new grpc.Server(); // 初始化 grpc 框架
  server.addService(user_proto.User.service, userServiceImpl); // 添加 service
 	// 开始监听服务（固定写法）
  server.bindAsync("0.0.0.0:8081", grpc.ServerCredentials.createInsecure(), () => {
      server.start();
      console.log("grpc server started");
    }
  );
}

main();

