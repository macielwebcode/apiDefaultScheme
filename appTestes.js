/* arquivo com testes para demonstrar manipulação de arquivos, diretórios e modulos
tudo estava na index.js para ser executado */

// RENOMEAR PARA APP.JS E MUDAR O MAIN DO PACKAGE PARA TESTAR

/* const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'arquivo.json');
const escreve = require('./modules/write')
const ler = require('./modules/read') */

/* const pessoas = [
    { nome: 'Fe' },
    { nome: 'Babi' },
    { nome: 'Gaia' },
    { nome: 'Chico' },
    { nome: 'Sacela' },
];

const json = JSON.stringify(pessoas, '', 2) */
// escreve(caminhoArquivo, json);

/* async function lerArquivo(caminho){
    const lendo = await ler(caminho);
   renderizData(lendo);
} */

/* function renderizData(dados){
    console.log(dados)
  /*   dados = JSON.parse(dados);
    dados.forEach(valor => console.log(valor)) */
/* }
 */
// lerArquivo(caminhoArquivo) */



// const fs = require('fs').promises;
// const path = require('path');

// async function readDirectory(rootDir){
//     rootDir = rootDir || path.resolve(__dirname)
//     const files = await fs.readdir()
//     awayDir(files, rootDir);
// }

// async function awayDir(files){
//     for(let file of files){
//         const fileFullPath = path.resolve(rootDir, file)
//         const stats = await fs.stat(fileFullPath)


//         if(/\.git/g.test(fileFullPath)) continue;
//         if(/\.node_modules/g.test(fileFullPath)) continue;
        

//         if(stats.isDirectory()){
//             readDirectory(fileFullPath);
//             continue;
//         }

//         if(!/\.css/g.test(fileFullPath)) continue; // pesquisando somente arquivos css

//         console.log(file, stats.isDirectory())
//     }
// }

// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e))