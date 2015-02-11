# Learning express-generator

##### 安裝 express-generator scaffolding 工具

```bash
npm install -g express-generator
```

##### 建立專案

```bash
express <專案名稱>
```

##### 切換到專案資料夾安裝 npm 套件

```bash
cd <專案名稱> && npm install
```

##### 開啟伺服器，當你登入 `http://localhost:3000/` 會出現 log

```bash
./bin/www
```

##### 開啟 debug log，filter 吃正規表達式
	
	DEBUG=<filter>
	
例如

`*`什麼都印

    express:router:route new / +0ms
    express:router:layer new / +2ms
    express:router:route get / +1ms
    express:router:layer new / +0ms
    express:router:route new / +1ms
    express:router:layer new / +0ms
    express:router:route get / +0ms
    express:router:layer new / +0ms
    express:application compile etag weak +2ms
    express:application compile query parser extended +0ms
    express:application compile trust proxy false +0ms
    express:application booting in development mode +0ms
    express:router use / query +2ms
    express:router:layer new / +0ms
    express:router use / expressInit +0ms
    express:router:layer new / +0ms
    express:router use / logger +0ms
    express:router:layer new / +1ms
    express:router use / jsonParser +18ms
    express:router:layer new / +0ms
    express:router use / urlencodedParser +3ms
    express:router:layer new / +0ms
    express:router use / cookieParser +0ms
    express:router:layer new / +0ms
    express:router use / serveStatic +1ms
    express:router:layer new / +0ms
    express:router use / router +0ms
    express:router:layer new / +0ms
    express:router use /users router +0ms
    express:router:layer new /users +0ms
    express:router use / <anonymous> +0ms
    express:router:layer new / +0ms
    express:router use / <anonymous> +0ms
    express:router:layer new / +0ms
    express:router use / <anonymous> +0ms
    express:router:layer new / +1ms
    <專案名稱>:server Listening on port 3000 +4ms

`<專案名稱>:*`  就會只印出專案 log

<專案名稱>:server Listening on port 3000 +0ms
