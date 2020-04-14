
exports.up = function(knex) {
  return knex.schema.createTable('veggies', tbl =>{
      tbl.increments('ids');
      tbl.string('name', 255).notNullable().unique().index();
      tbl.boolean("tasty").defaultTo(false);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableifExists('veggies');
};
