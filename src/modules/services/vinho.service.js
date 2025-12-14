import { criarVinhoRepository, listarVinhosRepository, atualizarVinhoRepository, deletarVinhoRepository } from "../repositories/vinho.repository.js";

export async function criarVinhoService(data) {
  if (!data.nome || !data.tipo || !data.preco) {
    throw new Error("Nome, tipo e preço são obrigatórios");
  }

  return criarVinhoRepository({
    nome: data.nome,
    tipo: data.tipo,
    uva: data.uva,
    safra: data.safra,
    preco: data.preco,
    estoque: data.estoque ?? 0,
  });
}

export async function listarVinhosService() {
  return listarVinhosRepository();
}

export async function atualizarVinhoService(id, data) {
  if (!id) {
    throw new Error("ID do vinho é obrigatório");
  }

  if (Object.keys(data).length === 0) {
    throw new Error("Envie ao menos um campo para atualizar");
  }

  return atualizarVinhoRepository(id, data);
}

export async function deletarVinhoService(id) {
  if (!id) {
    throw new Error("ID do vinho é obrigatório");
  }

  return deletarVinhoRepository(id);
}
