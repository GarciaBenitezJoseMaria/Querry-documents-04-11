/*  El siguiente ejemplo selecciona de la colección inventory todos los documentos donde el estado sea igual "D":

*/
db.inventory.find( { status: "D" } ).pretty()

/*  
El siguiente ejemplo recupera todos los documentos de la inventory colección donde el estado igual a "A"o "D":
*/
db.inventory.find( { status: { $in: [ "A", "D" ] } } )
/*  
El siguiente ejemplo recupera todos los documentos de la colección inventory donde el estado sea igual a "A"o "D":
*/
db.inventory.find( { status: "A", qty: { $lt: 30 } } )
/*  
El siguiente ejemplo recupera todos los documentos de la colección inventory donde el estado es igual "A" y qty menor que ( $lt) 30:



*/
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )
/*  

 Recupera todos los documentos de la colección donde el statusigual "A" o qty menor que ( $lt) 30:


*/
db.inventory.find( {
    status: "A",
    $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ]
} )





