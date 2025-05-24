// const { MongoClient } = require('mongodb');
// require('dotenv').config();

// const client = new MongoClient(process.env.MONGODB_URI);

// let dbConnection;

// module.exports = {
//   connectToServer: async (callback) => {
//     try {
//       await client.connect();
//       dbConnection = client.db('contactsDB');
//       console.log('Connected to MongoDB');
//       callback();
//     } catch (err) {
//       callback(err);
//     }
//   },
//   getDb: () => dbConnection
// };
