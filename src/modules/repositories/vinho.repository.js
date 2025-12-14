import db from "../../infra/connection.js";
import { vinhos } from "../../infra/db/schema.js";
import { eq } from "drizzle-orm";

export async function criarVinhoRepository(data) {
  const [vinho] = await db
    .insert(vinhos)
    .values(data)
    .returning();

  return vinho;
}

export async function listarVinhosRepository() {
  return db.select().from(vinhos);
}

export async function atualizarVinhoRepository(id, data) {
  const [vinho] = await db
    .update(vinhos)
    .set(data)
    .where(eq(vinhos.id, Number(id)))
    .returning();

  if (!vinho) {
    throw new Error("Vinho não encontrado");
  }

  return vinho;
}

export async function deletarVinhoRepository(id) {
  const [vinho] = await db
    .delete(vinhos)
    .where(eq(vinhos.id, Number(id)))
    .returning();

  if (!vinho) {
    throw new Error("Vinho não encontrado");
  }

  return vinho;
}
