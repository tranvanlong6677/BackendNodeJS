const getHomePage = (req, res) => {
  res.send("Hello World! long tran111");
};

const getEjs = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getEjs,
};
