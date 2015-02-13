# socket.io chatroom

參考官網聊天室的範例：

https://github.com/rauchg/chat-example

## 紀錄 users 清單

var users = [];

io.on('connection', function(socket){
  var user = {
    name: ''
  };
  socket.on('chat message', function(msg){
    io.emit('chat message', user.name + ': ' + msg);
  });

  socket.on('register user', function(username) {
    user.name = username;
    users.push(username);
  });

  socket.on('disconnect', function() {
    var index = users.indexOf(user.name);

    if (index > -1) {
        users.splice(index, 1);
    }

    io.emit('chat message', user.name + ': 已經離開了');
  });
});

> 警告：目前沒有處理 username 重複的狀況，用 unique id 會是比較好的做法
