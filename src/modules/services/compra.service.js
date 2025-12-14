import { criarCompraRepository,  listarComprasRepository,  atualizarCompraRepository, 
  deletarCompraRepository 
} from "../repositories/compra.repository.js";

 
 
  
export async function criarCompraService(data) {
  if (!data.itens || !data.valorTotal === undefined) {
    throw new Error("Itens e valor total são obrigatórios");
  }

  return criarCompraRepository({
    itens: data.itens,
    valorTotal: data.valorTotal,
  });
}

export async function listarComprasService() {
  return listarComprasRepository();
}

export async function atualizarCompraService(id, data) {
  if (!id) {
    throw new Error("ID da compra é obrigatório");
  }

  if (Object.keys(data).length === 0) {
    throw new Error("Envie ao menos um campo para atualizar");
  }

  return atualizarCompraRepository(id, data);
}

export async function deletarCompraService(id) {
  if (!id) {
    throw new Error("ID da compra é obrigatório");
  }

  return deletarCompraRepository(id);
}