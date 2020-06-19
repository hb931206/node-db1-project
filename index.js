const express = require("express");
const accountRouter = require("./routers/accountRouter");

const server = express();
server.use(express.json());
server.use("/accounts", accountRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
