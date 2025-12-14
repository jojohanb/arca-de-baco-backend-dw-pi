CREATE TABLE "compras" (
	"id" serial PRIMARY KEY NOT NULL,
	"itens" jsonb NOT NULL,
	"valor_total" numeric(10, 2) NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "vinhos" (
	"id" serial PRIMARY KEY NOT NULL,
	"nome" text NOT NULL,
	"tipo" text NOT NULL,
	"uva" text,
	"safra" integer,
	"preco" numeric(10, 2) NOT NULL,
	"estoque" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now()
);
