// DELETAR UM PRODUTO

import { connectApi } from "./connectApi.js";

async function excluirProduto(productId) {
    try {
        await connectApi.excluirProduto(productId);
    } catch (error) {
        console.error("Erro ao excluir produto:", error);
    }

    window.location.reload(true);
}

export { excluirProduto };
