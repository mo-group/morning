# Learning express-generator

## 安裝 express-generator scaffolding 工具

```bash
npm install -g express-generator
```

## 建立專案

```bash
express <專案名稱>
```

## 切換到專案資料夾安裝 npm 套件

```bash
cd <專案名稱> && npm install
```

## 開啟伺服器

```bash
./bin/www
```

> 當你登入 `http://localhost:3000/` 會出現 log

## 開啟 debug log

```bash
DEBUG=<filter> ./bin/www
```

> filter 的格式可以有 wildcard (*)

例如：

```
DEBUG=* ./bin/www
```

什麼 debug log 都會印

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

```
DEBUG=<專案名稱>:* ./bin/www
```

就會只印出專案 debug log

    <專案名稱>:server Listening on port 3000 +0ms
