var data = {
  dataMap: {
    puborgid: "人民邮电出版社",
    title: "JavasCript高级程序设计",
    authorid: "Nicholas C.Zakas",
    pubdate: "2018-02-03",
    content:
      "20 多年的职业生涯，我也长出了白头发。回首往事，曾经对我的职业道路产生过重要影响的技术和人历历在目。如果让我只说一种技术，一种对我产生了最大正面影响的技术，那么就是 JavaScript。说实话，我也并非一直都是 JavaScript 的信徒。跟许多人一样，我以前也把它当作一门玩具语言，认为它只能用来做一些旋转的横幅告，或者在页面中添加一些有意思的交互效果作为装饰。我原来是做服务器端开发的，我们都对这种玩具语言不感冒，该死的！可是，后来 Ajax 出现了。永远也忘不了当时无孔不入的 Ajax，大家都认为它是一种非常酷、非常新，同时极具创造性的技术。我也开始了解它，阅读相关资料。知道这门曾被我嗤之以鼻的玩具语言如今被每一位专业 Web 开发人员津津乐道之后，我感到很震惊。突然，我的看法就转变了。随着探索 Ajax 的继续深入，我认识到JavaScript 的强大威力，急切地想了解它能提供的所有“法宝”。于是，我全身心地投入到学习 JavaScript之中，不仅努力学习这门语言，还加入了 jQuery 项目团队，专门从事客户端开发。我的日子过得很爽。对 JavaScript 了解得越深，接触的开发人员就越多，其中不乏今天在我眼里依然是巨星和导师级的人物。尼古拉斯·泽卡斯（本书作者）就是这样一位开发人员。我一直记得在读本书第 2 版时心中油然而生的喜悦之情，虽然我也有多年的积累，但仍然从中学到了很多新东西。这本书实实在在、深入浅出，读来就好像尼古拉斯对不同层次的读者都了如指掌，所以他的风格才那么贴切自然。对于技术书来说，这是非常突出的一个特色。多数作者都想靠坚深的技术给人留下印象，但这本书不同。所以，它很快就成为了我案头必备的书，我也会向那些有志全面掌握 JavaScript 的开发人员推荐这本书。我希望每个人对这本书都能有跟我一样的体会，认识到它的价值所在。后来，在一次 jQuery大会上，我荣幸地见到了尼古拉斯本人。站在我面前的是一位世界顶级的 JavaScript开发人员，而且正负责世界上最重要的一个 Web 站点（雅虎）。尼古拉斯是我见过的最随和的人之一。真的，见到他的时候我有一种追星族的幻觉。但他就是那么一个活生生的人，一个想帮助开发人员成就梦想的人。不仅他的书改变了我对 JavaScript 的认识，而且尼古拉斯这个人，也让我愿意接近，愿意了解。听说尼古拉斯要请我作序，我激动得不知道说什么才好。在此，我代表大牛来为本书暖场。这个序也是他本人有多么令人景仰的一个明证。不过，更重要的是，这也给了我一个机会，让我能跟大家分享自己为什么觉得这本书如此重要。我看过很多 JavaScript 图书，的确也有很多令人叹服的佳作。但在我看来，这本书为读者成为全方位的 JavaScript 高手提供了“一揽子方案”。这本书从介绍表达式和变量声明开始，平滑地过渡到了闭包、面向对象开发等高级主题。与那些把大量篇幅花在讲解背景知识上的书，以及那些让人感觉好像是要使用 JavaScript 开发导弹制导系统的书相比，这本书让人感觉细致周到、亲切自然。这是一本写给“普通人”的书，它能让你编写出引以为荣的代码，构建出令人叫绝的网站。"
  },
  listDataMap: [
    {
      filename: "18012000000001.docx",
      displayname: "word.docx",
      fileid: 18012000000001,
      filesize: "20kb"
    },
    {
      filename: "18012000000001.xls",
      displayname: "excel.xls",
      fileid: 18012000000002,
      filesize: "21kb"
    },
    {
      filename: "18012000000001.pptx",
      displayname: "ppt.pptx",
      fileid: 18012000000003,
      filesize: "22kb"
    },
    {
      filename: "18012000000001.pdf",
      displayname: "pdf.pdf",
      fileid: 18012000000004,
      filesize: "23kb"
    },
    {
      filename: "18012000000001.txt",
      displayname: "txt.txt",
      fileid: 18012000000005,
      filesize: "24kb"
    },
    {
      filename: "18012000000001.pub",
      displayname: "unknown.pub",
      fileid: 18012000000001,
      filesize: "25kb"
    }
  ]
};
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
