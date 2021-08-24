var sql = require("mssql");
var express = require('express');
var app = express();
// config for your database
var config = {
    user: 'downloader',
    password: '!seliFehTteG410',
    server: 'mercator.trentu.ca\\SQLEXPRESS2014,45000', 
    database: 'Airphoto' 
};

const pullTable = async () => {
    try {
        const pool = await sql.connect(config);
        const sqlQuery = 'SELECT GFID, RASTERID, DownloadURL FROM airphotoPoints';
        const result = await pool.request().query(sqlQuery);
        return result.recordset;
    } catch (err) {
        throw err;
    }
};

exports.pullTable = pullTable;