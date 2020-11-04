/*Utilizamos arraid e insert many.
esto se carga en la colección inventory de mi base de datos"Deberes"
*/

db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "book", qty: 40, size: {h: 30, w: 56, uom: "cm" }, status: "B"},
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
    { item: "journal", qty: 30, size: {h: 15, w: 25, uom: "cm" }, status: "B"},
    { item: "schedule", qty: 56, size: {h: 20, w: 16, uom: "in" }, status: "B"},
    { item: "paper", qty: 80, size: {h: 10, w: 15, uom: "in" }, status: "D"},
    { item: "notebook", qty: 56, size: {h: 20, w: 30, uom: "cm" }, status: "D"},
    { item: "ruler", qty: 70, size: {h: 25, w: 30, uom: "cm" }, status: "A"}
])

