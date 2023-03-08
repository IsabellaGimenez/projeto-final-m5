// // import res from "express/lib/response";
// import { openDb } from "../configdb.js";




// export async function SelectUsuario(req, res){
//     openDb().then(db=>{
//         db.all('SELECT * FROM usuario')
//            .then(usuario=> res.json(usuario))
//        })
//    }

// export async function SelectUsuario(req, res){
//     let id = req.body.id;
//     openDb().then(db=>{
//         db.get('SELECT * FROM usuario WHERE id=?',[id])
//            .then(usuario=> res.json(usuario) );
//        });
//     }   

// export async function insertUsuario(req, res){
//     let usuario = req.body;
//         openDb().then(db=>{
//                db.run ('INSERT INTO usuario (nome, idade) VALUES (?,?)', [usuario.nome, usuario.idade])
//                .then(res=>res)
//            });
//            res.json({
//             "statuscode":200
//         })
//        }

// export async function updateUsuario(req, res){
//     let usuario = req.body;
//     openDb().then(db=>{
//            db.run ('UPDATE usuario SET nome = ?, idade = ? WHERE id = ?', [usuario.nome, usuario.idade, usuario.id])
           
//        });
//        res.json({
//         "statuscode":200
//     })
//    }

// export async function DeleteUsuario(req, res){
//     let usuario = req.body.id;
//      openDb().then(db=>{
//         db.get ('DELETE FROM usuario WHERE id=?',[id])
//            .then(res=>res)
//        });
//        res.json({
//         "statuscode":200
//     })
    
//    }   