import { Knex } from "knex";
import faker from "faker";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("products").del();

    // Inserts seed entries
    await knex("products").insert([
        { id: 1, name: "rowValue1", price:400, image:"yyggddeef" },
        { id: 2, name: "rowValue1", price:400, image:"yyggddeef" },
        { id: 3, name: "rowValue1", price:400, image:"yyggddeef" },
        { id: 4, name: "rowValue1", price:400, image:"yyggddeef" },
    ]);
};
