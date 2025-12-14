import { criarVinho, listarVinhos, atualizarVinho, deletarVinho } from "../controllers/vinho.controller.js";

export default async function adegaRoutes(fastify) {

  fastify.post("/vinhos", criarVinho);
  fastify.get("/vinhos", listarVinhos);
  fastify.put("/vinhos/:id", atualizarVinho);
  fastify.delete("/vinhos/:id", deletarVinho);

}
