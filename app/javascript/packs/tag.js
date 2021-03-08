if (location.pathname.match("tweets/new")){
  document.addEventListener("DOMContentLoaded", () => {
    const inputElement = document.getElementById("tweets_tag_name");
    inputElement.addEventListener("keyup", () => {
      const keyword = document.getElementById("tweets_tag_name").value;
      const XHR = new XMLHttpRequest();
      // openメソッドの第一引数にHTTPメソッド、第二引数にURL、第三引数には非同期通信であることを示すためにtrue
      // keywordは5行目でフォームから取得した文字列
      XHR.open("GET", `search/?keyword=${keyword}`, true);
    });
  });
};