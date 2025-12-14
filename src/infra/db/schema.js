// Tabela de vinhos 
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
  imagemUrl: text("imagem_url"),

  createdAt: timestamp("created_at").defaultNow(),
});

// Tabela de compras 
export const compras = pgTable("compras", {
  id: serial("id").primaryKey(),

  itens: jsonb("itens").notNull(),
  valorTotal: numeric("valor_total", { precision: 10, scale: 2 }).notNull(),

  createdAt: timestamp("created_at").defaultNow(),
});
