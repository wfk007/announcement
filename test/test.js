$.ajax({
  type: "post",
  timeout: 20000,
  url: "xxx/yyy.json",
  dataType: "json",
  data: "",
  success: function(data) {
    announcement.initAnnouncement({
      data: data, //json数据，需要遵循一定的格式，必填
      imgPath: "../images", //图标所在文件目录
      backgroundColor: "", //公告背景色，目前只支持十六进制颜色值
      zIndex: "1000", //底层使用parseInt()进行转换，具体如何转换请参照js api
      fileDownload: function(value) {
        console.log(value);
      },
      beforeLoad: function() {
        console.log("beforeLoad");
      },
      afterLoad: function() {
        console.log("afterLoad");
      }
    });
  },
  error: function(XHR, textStatus, errorThrown) {}
});
