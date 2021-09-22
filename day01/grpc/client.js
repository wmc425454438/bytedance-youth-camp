// client.js
const user_proto = require("./user_proto");
const grpc = require("@grpc/grpc-js");

// 使用 `user_proto.User` 创建一个 client，其目标服务器地址是 `localhost:8081`
// 也就是我们刚刚 service.js 监听的地址
const client = new user_proto.User(
  "localhost:8081",
  grpc.credentials.createInsecure()
);

// 发起登录请求
function login() {
  return new Promise((resolve, reject) => {
      // 约定的参数
      client.login(
        { username: 123, password: "abc123" },
        function (err, response) {
          if (err) {
            reject(err);
          } else {
            resolve(response);
          }
        }
      );
  })
}

async function main() {
  const res = await login();
  console.log(res)
}

main();
