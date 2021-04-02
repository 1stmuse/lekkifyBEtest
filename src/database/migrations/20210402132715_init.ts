import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    try {
        await knex.schema.createTable('products', table =>{
            table.increments('id').notNullable();
            table.string('name').notNullable();
            table.decimal('price').notNullable();
            table.string('image').notNullable();
            table.timestamps(true, true)
        })
    } catch (error) {
        throw error
    }
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('products')
}

