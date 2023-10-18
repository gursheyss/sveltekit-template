import { integer, pgTable, uuid, serial, text, boolean } from 'drizzle-orm/pg-core';

export const exampleTable = pgTable('example', {
	id: serial('id').primaryKey(),
	field1: text('field1').unique(),
	field2: uuid('field2').notNull(),
	field3: integer('field3').default(0),
	field4: boolean('field4')
});
