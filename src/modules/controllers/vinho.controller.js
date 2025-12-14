import { criarVinhoService, listarVinhosService, atualizarVinhoService, deletarVinhoService } from "../services/vinho.service.js";

export async function criarVinho(request, reply) {
  try {
    const vinho = await criarVinhoService(request.body);
    return reply.code(201).send(vinho);
  } catch (error) {
    return reply.code(400).send({ error: error.message });
  }
}

export async function listarVinhos(request, reply) {
  try {
    const vinhos = await listarVinhosService();
    return reply.send(vinhos);
  } catch (error) {
    return reply.code(500).send({ error: error.message });
  }
}

export async function atualizarVinho(request, reply) {
  try {
    const { id } = request.params;
    const vinho = await atualizarVinhoService(id, request.body);
    return reply.send(vinho);
  } catch (error) {
    return reply.code(400).send({ error: error.message });
  }
}

export async function deletarVinho(request, reply) {
  try {
    const { id } = request.params;
    await deletarVinhoService(id);
    return reply.code(204).send();
  } catch (error) {
    return reply.code(400).send({ error: error.message });
  }
}
