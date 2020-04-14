
exports.up = function(knex) {
    return knex.schema.createTable('fruits', tbl =>{
        tbl.increments('ids');
        tbl.string('name', 255).notNullable().unique().index();
        tbl.decimal('avgWeight');
        tbl.boolean("tasty").defaultTo(false);
    })
};

exports.down = function(knex) {
return knex.schema.dropTableIfExists('fruits');
};  
