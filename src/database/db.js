const Database= require('sqlite-async');//impotar data base
//abrir o banco de dados depois disso executar a funçao
function execute(db){
 return  db.exec(`
    CREATE TABLE IF NOT EXISTS orphanages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lat TEXT,
    lng TEXT,
    name TEXT,
    about TEXT,
    whatssap TEXT,
    images TEXT,
    instructions TEXT,
    opening_hours TEXT,
    open_on_weekends TEXT
    
    );
    `)
}
module.exports= Database.open(__dirname+'/database.sqlite').then(execute)