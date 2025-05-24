const express = require("express");

const mongodb = require("./data/database");
const app = express();

const contactsRoutes = require("./routes/contacts");
app.use("/contacts", contactsRoutes);

const port = process.env.PORT || 3000;
// app.use("/", require("./routes"));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Database is listening and node running on port ${port}`);
    });
  }
});

// const express = require("express");
// const app = express();
// //const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

// const port = 3000;

// app.listen(process.env.port || port);
// console.log("Web Server is listening at port " + (process.env.port || port));

// const { connectToServer } = require('./db/connection');

// connectToServer((err) => {
//   if (!err) {
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   } else {
//     console.error(err);
//   }
// });

// const contactsRouter = require('./routes/contacts');
// app.use('/contacts', contactsRouter);
