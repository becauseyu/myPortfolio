// 以 Express 建立 Web 伺服器
var express = require("express");
var index = express();

// Web 伺服器的靜態檔案置同層資料夾
index.use(express.static("./"));

// 一切就緒，開始接受用戶端連線
index.listen(3000);  //瀏覽器的位置:localhost:3000

console.log('ok')//執行完成跑一下console.log('ok')



    


