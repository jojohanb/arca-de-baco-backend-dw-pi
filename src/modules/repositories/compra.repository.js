import db from "../../infra/connection.js";
import { compras } from "../../infra/db/schema.js";
import { eq } from "drizzle-orm";

export async function criarCompraRepository(data) {
  const [compra] = await db
    .insert(compras)
    .values(data)
    .returning();

  return compra;
}

export async function listarComprasRepository() {
  return db.select().from(compras);
}

export async function atualizarCompraRepository(id, data) {
  const [compra] = await db
    .update(compras)
    .set(data)
    .where(eq(compras.id, Number(id)))
    .returning();

  if (!compra) {
    throw new Error("Compra não encontrada");
  }

  return compra;
}

export async function deletarCompraRepository(id) {
  const [compra] = await db
    .delete(compras)
    .where(eq(compras.id, Number(id)))
    .returning();

  if (!compra) {
    throw new Error("Compra não encontrada");
  }

  return compra;
}