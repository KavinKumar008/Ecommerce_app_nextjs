import mysql from "mysql2/promise";

const globalForMysql = global as unknown as {
  mysqlPool?: mysql.Pool;
}

export const db = 
  globalForMysql.mysqlPool ??

mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections:true,
  connectionLimit:5,
  queueLimit:0
});

if (process.env.NODE_ENV !== "production") {
  globalForMysql.mysqlPool = db;
}
