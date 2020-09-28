import SQLite from 'react-native-sqlite-storage'

export const executeQuery = (sql) => {
    let db = SQLite.openDatabase({ name: 'gaussfleet.db', location: "default" })
    db.transaction((tx) => {
        tx.executeSql(sql.query, sql.args)
    })
}

export const executeQueryInterno = (sql) => {

    let db = SQLite.openDatabase({ name: 'gaussfleet.db', location: "default" })
    return new Promise(
        function (resolve, reject) {
            db.transaction((tx) => {
                tx.executeSql(sql.query, sql.args, (tx, results) => {
                    let arraySQL = []
                    var len = results.rows.length
                    for (let i = 0; i < len; i++) {
                        let row = results.rows.item(i)
                        arraySQL.push(row)
                    }
                    resolve(arraySQL)
                })
            })
        });
}
