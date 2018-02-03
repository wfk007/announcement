"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var announcement = function (window) {

  //includes Polyfill
  if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
      "use strict";

      if (typeof start !== "number") {
        start = 0;
      }

      if (start + search.length > this.length) {
        return false;
      } else {
        return this.indexOf(search, start) !== -1;
      }
    };
  }
  return function () {
    var opts = null;

    /**
     * @description 初始化并填充公告内容和附件
     * @param {Map} options
     * @return {Undefined}
     * @author 王富康
     */
    function init(options) {
      //dom 不存在
      if (domNotExist($(".announcement-panel")) || domNotExist($(".announcement-content"))) {
        reportError("dom结构不符合要求！");
        return;
      }

      //初始化时面板已经打开
      if (!domNotExist($(".announcement-panel-expanded"))) {
        reportError("面板未正常关闭！");
        return;
      }

      //options传递的不是对象
      if (options === null || (typeof options === "undefined" ? "undefined" : _typeof(options)) !== "object") {
        reportError("options：请传递非 null 对象！");
        return;
      }

      //判断必填项data以及其json数据类型
      if (!options.hasOwnProperty("data") || options.data === null || _typeof(options.data) !== "object") {
        reportError("options.data：请传递非 null 对象！");
        return;
      }

      //未对json格式的细节字段进行判断

      //保存参数用于点击事件处理
      opts = options;

      //beforeLoad
      typeof options.beforeLoad === "function" ? options.beforeLoad() : undefined;

      //清空dom
      $(".announcement-panel .announcement-content").html("");

      //对关闭按钮、一级标题、二级标题、文本内容进行设置
      //对关闭按钮、一级标题、二级标题、文本内容进行设置
      var content = "<a href=\"#\"><img src=\"" + options.imgPath + "/close.png\"></a><div class=\"title-wrapper\"><h1 class=\"headTitle\">" + options.data.dataMap.title + "</h1><div class=\"subTitle\">\u4F5C\u8005\uFF1A<span>" + options.data.dataMap.authorid + "</span>\u53D1\u5E03\u65F6\u95F4\uFF1A<span>" + options.data.dataMap.pubdate + "</span>\u53D1\u5E03\u5355\u4F4D\uFF1A<span>" + options.data.dataMap.puborgid + "</span></div></div><pre>" + options.data.dataMap.content + "</pre>";

      //附件 wrapper
      var appendix = "<div class=\"appendix-wrapper\">";

      //对附件进行设置
      if (options.data.listDataMap.length > 0) {
        options.data.listDataMap.forEach(function (item) {
          //后期可以封装正则的判断方法，进行复杂文件类型判断
          var fileType = item.filename.includes("doc") ? "word" : item.filename.includes("xls") ? "excel" : item.filename.includes("ppt") ? "ppt" : item.filename.includes("pdf") ? "pdf" : item.filename.includes("txt") ? "txt" : "unknown";

          //附件模板
          var appendixTemplate = "<div class=\"appendix\"><div class=\"appendix-icon\"><a href=\"#\" value=\"" + item.fileid + "\"><img src=\"" + options.imgPath + "/" + fileType + ".png\"></a></div><div class=\"appendix-name\"><span>" + item.displayname + "</span></div><div class=\"appendix-size\"><span>" + item.filesize + "</span></div></div>";
          appendix += appendixTemplate;
        });
        appendix += "</div>";
      }

      //设置dom
      $(".announcement-panel .announcement-content").html(content + appendix);

      //设置位置和font-size
      setPosition();

      //传入颜色，则对公告背景色进行设置
      options.backgroundColor ? colorValid(options.backgroundColor) === null ? reportError("颜色格式不正确，仅仅支持十六进制格式！") : $(".announcement-panel").css({
        "background-color": options.backgroundColor
      }) : undefined;

      //设置z-index
      options.zIndex ? myIsNaN(parseInt(options.zIndex, 10)) ? reportError("z-index不合法！") : $(".announcement-panel").css({
        "z-index": parseInt(options.zIndex, 10)
      }) : undefined;

      //显示面板
      $(".announcement-panel").addClass("announcement-panel-expanded");

      initEvents();

      //afterLoad
      typeof options.afterLoad === "function" ? options.afterLoad() : undefined;
    }

    //初始化内部点击事件
    function initEvents() {
      //面板关闭
      $(".announcement-panel .announcement-content >a >img").on("click", function (e) {
        $(".announcement-panel").removeClass("announcement-panel-expanded");
      });

      //附件下载
      $(".appendix").on("click", function (e) {
        //判断方法是否undefined
        typeof opts.fileDownload === "function" ? opts.fileDownload($(this).find(".appendix-icon>a").attr("value")) : undefined;
      });

      //自适应屏幕变化
      $(window).resize(function () {
        setPosition();
      });
    }

    return { initAnnouncement: init };
  }();

  /**
     * @description 自适应
     * @author 王富康
     */
  function setPosition() {
    var top = $(window).height() * 0.05;
    var bottom = $(window).height() * 0.05;
    var height = $(window).height() * 0.9;

    var width = height * 0.83;
    var left = ($(window).width() - width) / 2;
    var right = ($(window).width() - width) / 2;

    var wh = $(window).width() / 110;

    wh = wh > 20 ? 20 : wh > 11 ? wh : 11;
    //设置宽高比为0.83
    $(".announcement-panel").css({
      top: top,
      right: right,
      bottom: bottom,
      left: left,
      "font-size": wh
    });
  }

  /**
     * @description 判断 jquerydom 是否存在
     * @param {JqueryDOM} jqueryDom
     * @return {Boolean}
     * @author 王富康
     */
  function domNotExist(jqueryDom) {
    return jqueryDom.length === 0;
  }

  /**
     * @description 判断颜色是否合法
     * @param {String} color
     * @return {Boolean}
     * @author 王富康
     */
  function colorValid(color) {
    return color.match(/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/);
  }
  /**
     * @description 抛出异常
     * @param {String} msg
     * @author 王富康
     */
  function reportError(msg) {
    throw new Error(msg);
  }
  /**
     * @description IE不支持Number.isNaN()
     * @param {Number} o
     * @author 王富康
     */
  function myIsNaN(o) {
    return o !== o;
  }
}(window);
