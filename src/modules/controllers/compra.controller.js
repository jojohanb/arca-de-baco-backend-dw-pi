import {criarCompraService, listarComprasService, atualizarCompraService,deletarCompraService} from "../services/compra.service.js";

export async function criarCompra(request, reply) {
  try {
    const compra = await criarCompraService(request.body);
    return reply.code(201).send(compra);
  } catch (error) {
    return reply.code(400).send({ error: error.message });
  }
}

export async function listarCompras(request, reply) {
  try {
    const compras = await listarComprasService();
    return reply.send(compras);
  } catch (error) {
    return reply.code(500).send({ error: error.message });
  }
}

export async function atualizarCompra(request, reply) {
  try {
    const { id } = request.params;
    const compra = await atualizarCompraService(id, request.body);
    return reply.send(compra);
  } catch (error) {
    return reply.code(400).send({ error: error.message });
  }
}

export async function deletarCompra(request, reply) {
  try {
    const { id } = request.params;
    await deletarCompraService(id);
    return reply.code(204).send();
  } catch (error) {
    return reply.code(400).send({ error: error.message });
  }
}