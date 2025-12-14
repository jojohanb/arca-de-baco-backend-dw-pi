import Fastify from 'fastify';
import cors from "@fastify/cors";
import adegaRoutes from './modules/routes/adega.routes.js';
import db from "./infra/connection.js";

const fastify = Fastify({ logger: true });

await fastify.register(cors, { origin: "*" });
try {
  await db.execute`SELECT 1`;
  console.log("✅ Conexão com o banco bem-sucedida!");
} catch (err) {
  console.error("❌ Erro ao conectar ao banco:", err);
}

fastify.register(adegaRoutes, { prefix: '/api' });

// Iniciar o servidor
const start = async () => {
  try {
    await fastify.listen({ port: 3333 });
    console.log(`Servidor rodando em http://localhost:3333`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
