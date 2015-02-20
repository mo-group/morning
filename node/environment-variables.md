# Environment variables

## 在接下來的執行環境設定環境變數

#### OSX, *nix

```sh
export NODE_ENV=production
```

> 你可以放到 `~/.bashrc` 或是 `~/.bash_profile` 裡面

#### Windows

## 在該次執行的環境設定環境變數

#### OSX, *nix

```sh
$ NODE_ENV=production node ./bin/www
```

#### Windows

```cmd
$ set NODE_ENV=production && node ./bin/www
```

## 取得環境變數

設定過的環境變數會被丟進 `process.env` 屬性中，所以可以使用 `process.env.NODE_ENV` 取得 `NODE_ENV` 環境變數：

```js
if (NODE_ENV === 'production') {
  //...
} else {
  //...
}
```
