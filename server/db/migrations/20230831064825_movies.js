/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('movies', (table) => {
    table.string('id')
    table.string('title')
    table.string('director')
    table.string('language')
    table.string('genre')
    table.string('plot')
    table.string('poster_url')
    table.string('actors')
    table.string('released_date')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('movies')
}
