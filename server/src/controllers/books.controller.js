const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const gbooks = require("@chewhx/google-books");

const getBooks = catchAsync(async (req, res) => {
  const queryParam = req.query.q;
  let response = {};
  if (!queryParam) {
    response = {
      status: false,
      code: 500,
      msg: "Param Q is required",
    };
    res.send(result).status(500);
  }
  const result = await gbooks.search(queryParam);
  response = {
    status: true,
    code: 200,
    msg: "",
    result: result,
  };
  res.send(response);
});

const getBook = catchAsync(async (req, res) => {
  const bookId = req.params.bookId;
  console.log(req.params)
  let response = {};
  if (!bookId) {
    response = {
      status: false,
      code: 500,
      msg: "Param Q is required",
    };
    res.send(result).status(500);
  }
  const result = await gbooks.id(bookId);
  response = {
    status: true,
    code: 200,
    msg: "",
    result: result,
  };
  res.send(response);
});

module.exports = {
  getBooks,
  getBook,
};
