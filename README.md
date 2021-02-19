# SearchMusic

このアプリケーションはあなたのお気に入りの曲を分析し、
分析結果を元に、おすすめの曲を提案します。

## DEMO
https://search-music-f43a5.web.app/

![Screen1](https://user-images.githubusercontent.com/57585657/108437400-970cfd00-7290-11eb-9b60-6101b82272ea.png)

## Artist Search
アーティスト名からアルバムを検索し、トラックから分析したい曲を選べます。
![Screen1](https://user-images.githubusercontent.com/57585657/108437324-7349b700-7290-11eb-98d1-efd9535e2094.png)

## Track ID Search
SpotifyからTrack Idをコピーし、検索できます。
![Screen1](https://user-images.githubusercontent.com/57585657/108437364-82c90000-7290-11eb-9fac-f15a08f83792.png)

## 使用技術

- React
- Scss
- Firebase

### Run locally

clone.

```
git clone git@github.com:shinp09/search-music.git
```

Add Credencial.js.

```
SPOTIFY_CLIENT_ID=<your client id of spotify web api>
SPOTIFY_CLIENT_SECRET=<your client secret of spotify web api>
```

run.

```
npm install
npm start
```
