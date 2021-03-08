if (location.pathname.match("tweets/new")){
  document.addEventListener("DOMContentLoaded", () => {
    const inputElement = document.getElementById("tweets_tag_name");
    inputElement.addEventListener("keyup", () => {
      const keyword = document.getElementById("tweets_tag_name").value;
      const XHR = new XMLHttpRequest();
      // openメソッドの第一引数にHTTPメソッド、第二引数にURL、第三引数には非同期通信であることを示すためにtrue
      // keywordは5行目でフォームから取得した文字列
      XHR.open("GET", `search/?keyword=${keyword}`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        const searchResult = document.getElementById("search-result");
        searchResult.innerHTML = "";
        if (XHR.response) {
          const tagName = XHR.response.keyword;
          tagName.forEach((tag) => {
            const childElement = document.createElement("div");
            childElement.setAttribute("class", "child");
            childElement.setAttribute("id", tag.id);
            childElement.innerHTML = tag.name;
            searchResult.appendChild(childElement);
            const clickElement = document.getElementById(tag.id);
            clickElement.addEventListener("click", () => {
              document.getElementById("tweets_tag_name").value = clickElement.textContent;
              clickElement.remove();
            });
          });
        };
      };
    });
  });
};