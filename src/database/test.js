const Database = require("./db");
const saveOrphanage= require("./saveOrphanage");

Database.then(async db => {
    //inserir dados na tabela
    /*await saveOrphanage(db, {
        lat:"-2.528903",
        lng:"-44.3020831",
        name: "local de amor",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whassap:"0198923922",
        image:["https://images.unsplash.com/photo-1601564267524-75b772c1aa7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1567791124560-c60b7d227623?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"].toString(),
        instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends:"1"
    })*/
    //consultar dados da tabela
    const selectedOrphanages = await db.all('SELECT * FROM orphanages')
    console.log(selectedOrphanages)
    //consultar somente 1 orphanato pelo ID
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "5"')
    //console.log(orphanage)
});


