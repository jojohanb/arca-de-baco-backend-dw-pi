import { criarVinho, listarVinhos, atualizarVinho, deletarVinho } from "../controllers/vinho.controller.js";
import { criarCompra, listarCompras, atualizarCompra, deletarCompra } from "../controllers/compra.controller.js";

export default async function adegaRoutes(fastify) {

  fastify.post("/vinhos", criarVinho);
  fastify.get("/vinhos", listarVinhos);
  fastify.put("/vinhos/:id", atualizarVinho);
  fastify.delete("/vinhos/:id", deletarVinho);

  fastify.post("/compras", criarCompra);
  fastify.get("/compras", listarCompras);
  fastify.put("/compras/:id", atualizarCompra);
  fastify.delete("/compras/:id", deletarCompra);
}