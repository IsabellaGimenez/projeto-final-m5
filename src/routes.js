import { Router } from "express";
// import { DeleteEstoque, inserteEstoque, SelectEstoque, updateEstoque } from "./controller/estoque.js";
// // import { DeleteFornecedor, insertFornecedor, SelectFornecedor, updateFornecedor } from "./controller/Fornecedor.js";
// import { DeleteFuncionarios, insertFuncionarios, SelectFuncionarios, updateFuncionarios } from "./controller/funcionarios.js";
import  { insertProduto, updateProduto, SelectProduto, SelectProdutos, DeleteProduto}  from './controller/produtos.js';
// import { DeleteUsuario, insertUsuario, SelectUsuario, updateUsuario } from "./controller/usuario.js";

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statuscode":200,
        "msg":"API RODANDO"
    })
})
// rota produtos 
router.get('/produtos', SelectProdutos);
router.get('/produto', SelectProduto);
router.post('/produto', insertProduto);
router.put('/produto', updateProduto);
router.delete('/produto', DeleteProduto);


// //rota fornecedor
// router.get('/fornecedor', SelectFornecedor);
// router.get('/fornecedor', SelectFornecedor);
// router.post('/fornecedor', insertFornecedor);
// router.put('/fornecedor', updateFornecedor);
// router.delete('/fornecedor', DeleteFornecedor);



// //rota Funcionários
// router.get('/funcionarios', SelectFuncionarios);
// router.get('/funcionarios', SelectFuncionarios);
// router.post('/funcionarios', insertFuncionarios);
// router.put('/funcionarios', updateFuncionarios);
// router.delete('/funcionarios', DeleteFuncionarios);


// //rota Usuario
// router.get('/usuario', SelectUsuario);
// router.get('/usuario', SelectUsuario);
// router.post('/usuario', insertUsuario);
// router.put('/usuario', updateUsuario);
// router.delete('/usuario', DeleteUsuario);


// //rota Estoque
// router.get('/estoque', SelectEstoque);
// router.get('/estoque', SelectEstoque);
// router.post('/estoque', inserteEstoque);
// router.put('/estoque', updateEstoque);
// router.delete('/estoque', DeleteEstoque);

export default router;