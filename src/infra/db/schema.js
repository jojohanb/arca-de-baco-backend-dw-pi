import {
  pgTable,
  serial,
  text,
  integer,
  numeric,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";

export const vinhos = pgTable("vinhos", {
  id: serial("id").primaryKey(),

  nome: text("nome").notNull(),
  tipo: text("tipo").notNull(), 
  uva: text("uva"),
  safra: integer("safra"),

  preco: numeric("preco", { precision: 10, scale: 2 }).notNull(),
  estoque: integer("estoque").default(0),

  createdAt: timestamp("created_at").defaultNow(),
});
