import mysql from 'mysql2/promise';

export const mysqlClient = () => {
  const client = mysql.createPool({
    host: 'localhost',
    port: 3306, 
    database: 'db_napiercapital',
    user: 'root',
    password: 'admin',
    waitForConnections: true, 
    // connectionLimit: 10, 
    // queueLimit: 0 
  });

  return client
};
