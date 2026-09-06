(function () {
  var toolbar = document.querySelector("[data-zh-toggle]");
  if (!toolbar || !window.OpenCC) {
    return;
  }

  var converter = OpenCC.Converter({ from: "tw", to: "cn" });
  var handler = OpenCC.HTMLConverter(converter, document.documentElement, "zh-Hant", "zh-CN");
  var select = toolbar.querySelector("[data-zh-select]");
  var blogLink = document.querySelector("[data-blog-link]");
  var originalBlogHref = blogLink ? blogLink.href : "";

  function setMode(mode) {
    if (mode === "/blog/" || mode === "../") {
      location.href = mode;
      return;
    }

    if (mode === "simplified") {
      handler.convert();
      if (blogLink && blogLink.getAttribute("data-simplified-href")) {
        blogLink.href = blogLink.getAttribute("data-simplified-href");
      }
    } else {
      handler.restore();
      if (blogLink) {
        blogLink.href = originalBlogHref;
      }
    }

    if (select) {
      select.value = mode;
    }
  }

  if (select) {
    select.addEventListener("change", function () {
      setMode(select.value);
    });
  }

  if (new URLSearchParams(location.search).get("script") === "Hans") {
    setMode("simplified");
  }
}());
