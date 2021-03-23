'use strict';
let mariadb = require('mariadb');
let logger = require('./logger');


let pool = mariadb.createPool({
    // host:'192.168.0.73',
    connectionLimit: 10,
    host: 'mysql',
    // host: '192.168.0.73',
    user:'root',
    port : '3306',
    password:'vetec',
    database :'myapp',
    idleTimeout :250,
});

pool.on('connection', function (connection) {
    console.log('bom-peak-connection 발생');
});

pool.on('acquire', function (connection) {
    logger.info(`bom-peak-Connection ${connection.threadId} acquired`);
});

pool.on('enqueue', function () {
    logger.info('bom-peak-Waiting for available connection slot');
});

pool.on('release', function (connection) {
    logger.info(`bom-peak-Connection ${connection.threadId} released`);
});


// pool.getConnection(function(err,connection){
//     // if(!err)
//     //     {
//     //         connection.on('error', function(err) {
//     //         console.error(err); // 'ER_BAD_DB_ERROR'
//     //     });
//     //         command(conn);
//     //     }
//      if (err) {
//         if(err.code === 'PROTOCOL_CONNECTION_LOST') {
//              console.error('Database connection was closed.');
//          }
//         if(err.code === 'ER_CON_COUNT_ERROR') {
//             console.error('Database has toomany connections.');
//         }
//         if(err.code === 'ECONNREFUSED') {
//             console.error('Database connection was refused.');
//         }
//      }
//      console.log("connection :" +connection )
//      if (connection)  connection.release();
//      return 
//     //connection.release();  
// });

module.exports = pool;
