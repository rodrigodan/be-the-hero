
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        // relationship: qual foi a ong que criou esse incidente?
        table.string('ong_id').notNullable();
        // foreign key:
        // toda vez que o ong_id acima tiver preenchido, ele precisa ser um id cadastrado dentro da tabela ong:
        table.foreign('ong_id').references('id').inTable('ongs');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
