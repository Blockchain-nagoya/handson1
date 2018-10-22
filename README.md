# Blockchain-Nagoya Hands-on #1

## base
truffle react-box
URL: https://truffleframework.com/boxes/react

## 使うもの
・node v10.12.0

・truffle URL: https://truffleframework.com/

・openzeppelin-solidity URL: https://openzeppelin.org/

・metamask URL: https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=ja

・infura URL: https://infura.io/

・ipfs URL: https://ipfs.io/


### ContractAddress

実際の成果物

https://gateway.ipfs.io/ipfs/QmWKuefCsTXo5oLQ27NU86j5u8x2qXTFxeUE6gARznrowf/

ropsten: 0x02bcd02769d114c585c31cd3ca174902fa927200
kovan: 0xc0c73815100ac22b86fab1117dbef932ceed4ae8

ropsten,kovanで公開してます。

## 流れ

### 1 truffle インストール

```
npm install -g truffle
```

or

```
yarn add truffle
```

### 2 githubからインストール

https://github.com/Blockchain-nagoya/handson1.git

```
git clone https://github.com/Blockchain-nagoya/handson1.git
```


### 3 パッケージインストール

・openzeppelin-solidity v2.0.0

・truffle-hdwallet-provider v0.0.6

```
npm install
```

or

```
yarn
```

### 4 コントラクト作成

コントラクトはcontracts内にあります。

### 5 コントラクトコンパイル

```
truffle compile
```

buildというレポジトリにjsonファイルで生成されます。

### 6 ethereumネットワークにデプロイ

truffle.jsにMnemonicコードとインフラAPIKeyを追加する

```
truffle migrate --network ropsten
```

ropstenネットワークにデプロイ
再デプロイは

```
truffle migrate --network ropsten --reset
```

### 7 client部分作成

```
npm install
```

or

```
yarn
```

フロントエンド部分のパッケージインストール

### 8 web3でコントラクトを操作

client/src内にあります。

### 9 local環境で表示

```
npm run start
```

or

```
yarn run start
```

### 10 build

```
npm run build
```

or

```
yarn run build
```

### 11 ipfsで公開

ipfsのインストール

https://dist.ipfs.io/#go-ipfs

```
// ダウンロードしたファイルと同じディレクトリ内に移動
tar xvfz go-ipfs.tar.gz
cd go-ipfs
./install.sh
ipfs init
```

デーモンを起動

```
ipfs daemon
 // or
ipfs daemon&
```

go-ipfs内のディレクトリにbuildしたファイルを移動させる

```
ipfs add -r build            //ipfs add -r 移動させたリポジトリ名
```

```
added QmdvPvsYswdF23iq3mNcCdQU8N71z1KQ8jsuRceN7nBgMr build/asset-manifest.json
added QmNb8rUZ86zv59AUgmtoNzBJ7zcBxnoRgLSREWS6Y1Z4CW build/index.html
added QmPKPhRf2FaxEPeYPa1PebmoLLENgHyq7Sd8UJSSVpnti4 build/manifest.json
added QmWMQR9WKKVjqDYMReijExcuk7bbgNGupAyLAgA4DVy4yt build/precache-manifest.554d3a9dfaa1330ed2bb053a3f17f2b6.js
added QmXSPG7WaSz9q321x8Hw6zgDXCdU3kz4PcrdRhnQvbZacp build/service-worker.js
added QmPgMT54VNVFnCPa33y2nKtVUhgiSspU5zvKpLHqNMkBBQ build/static/css/1.9398c005.chunk.css
added QmaMkFR941CQF5HEAWpVmSgc4UvFjdAEUhLPdfpqh5HHfA build/static/css/1.9398c005.chunk.css.map
added QmTXLNNzMEheimDVsvQMLBZ4YhnsFQJF49ommHqdtcHHvL build/static/css/main.181d2f1d.chunk.css
added QmVbLkQG3Lm3pJB8ag5fGcGvz2nGfT66Bg5ZhGnuhuyKTz build/static/css/main.181d2f1d.chunk.css.map
added QmUvRsNJ6MUdsm53jCyvLLWwVAEyF3iAVfbu1beSSSo6m4 build/static/js/1.5f10ce04.chunk.js
added QmQWq3qwk2jwA3jrJbKDipXeh4E9jnunhDvndc2QmLpqBQ build/static/js/1.5f10ce04.chunk.js.map
added QmRVgMeb5yEoempJU3npVs1SjEvwaxWQG4pWp619P2o39m build/static/js/main.17b56208.chunk.js
added QmbASUoD3F1WSde8s8peAFotet2DHjfJuKXu3CCRWCsf3L build/static/js/main.17b56208.chunk.js.map
added QmVfzdU72f7TuF196YVC629gf2GT18Z9dRhua9oahKFFAR build/static/js/runtime~main.4a686d48.js
added QmSYyfTZ5yeX113i31TiTr3cov8jzGA54JRxKiFzPrqEMp build/static/js/runtime~main.4a686d48.js.map
added QmecaiT4FXhAyp74iauFEkKsUvGGkUfHBVCtupV64xAjz3 build/static/css
added QmZCjt9kCEkWrhxwf2pimudaXzxbZNLEJJHa75ubX9pRyq build/static/js
added QmWe1YB6ehaPZU49SLgwaKWojpLN2dgoSkvByUoycMfaWB build/static
added QmWKuefCsTXo5oLQ27NU86j5u8x2qXTFxeUE6gARznrowf build
 11.10 MiB / 11.10 MiB [===============================================]  99.99%
```

最後の　addedの後のQmWKuefCsTXo5oLQ27NU86j5u8x2qXTFxeUE6gARznrowfがipfs内のリポジトリが保存されているアドレスでピン止める


```
ipfs pin add QmWKuefCsTXo5oLQ27NU86j5u8x2qXTFxeUE6gARznrowf
/// ipfs pin add 先程のハッシュ値
```

これでipfsに公開したサイトが確認できる

https://gateway.ipfs.io/ipfs/先程のハッシュ

### 12 ipfsで自分のpeerアドレスに紐づける

```
ipfs name publish 先程のハッシュ値

```

https://gateway.ipfs.io/ipns/先程のハッシュ値

で確認できる

スマホから確認


・token poket(IOSのみ)　https://itunes.apple.com/app/token-pocket/id1288636393

・coin base　https://wallet.coinbase.com/

・cipher https://www.cipherbrowser.com/
