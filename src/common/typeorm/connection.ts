const { Connection, createConnection, getConnection } = require('typeorm');
const ConOpt = require('./ormconfig');
require('reflect-metadata');

// const DBConnect = async () => {
//   let connection: typeof Connection | undefined;
//   try {
//     connection = getConnection();
//   } catch (e) {
//     console.error('ERROR: no connection!', e);
//   }

//   try {
//     if (connection) {
//       if (!connection.isConnected) {
//         await connection.connect();
//       }
//     } else {
//       await createConnection(ConOpt);
//     }
//     console.log("🌴 Database connection was successful!");
//   } catch (e) {
//     console.error('ERROR: Database connection failed!!', e);
//     throw e;
//   }
// };

const DBConnect = async () => {
  try {
    await createConnection(ConOpt);
    const connection = getConnection();
    if (!connection.isConnected) await connection.connect();
    console.log('well done');
  } catch (error) {
    console.error('getConnection failed', error);
  }
};

const TryDBConnect = async (cb: () => void) => {
  try {
    await DBConnect();
    cb();
  } catch (e) {
    console.error('ERROR: Database connection failed!!', e);
  }
};

module.exports = {
  TryDBConnect
}