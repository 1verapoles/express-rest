const { Connection, createConnection, getConnection } = require('typeorm');
const ConOpt = require('./ormconfig');

const DBConnect = async () => {
  let connection: typeof Connection | undefined;
  try {
    connection = getConnection();
  } catch (e) {
    console.error('ERROR: no connection!', e);
  }

  try {
    if (connection) {
      if (!connection.isConnected) {
        await connection.connect();
      }
    } else {
      await createConnection(ConOpt);
    }
    console.log("🌴 Database connection was successful!");
  } catch (e) {
    console.error('ERROR: Database connection failed!!', e);
    throw e;
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