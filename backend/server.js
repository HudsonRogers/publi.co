const express = require("express");
const cors = require("cors");
let ejs = require('ejs');
// Importar a conexão com o banco de dados
const connection = require("./database/db");
// importando as rotas de controle
const controlePublicacoes = require("./Publicacoes/ControlePublicacoes");
const Publicacoes = require("./Publicacoes/Publicacoes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const app = express();
app.use(cors());
app.use(express.json());

//para reconhecer arquivos staticos
app.use(express("public"));

// autenticando com o banco de dados
connection
    .authenticate().then(() => {
        console.log("Conexão com o Banco de dados realizada com sucesso!");
    }).catch((error) => {
        console.log("Erro BD: \n" + error);
    });

app.use("/", controlePublicacoes);

app.get("/", (req, res) => {
    res.render("index");
});
app.listen(3000, () => (console.log("✅ API rodando em http://localhost:3000")));

/*
// ===== Dashboard ===== 
app.get("/api/dashboard", async (req, res) => {
  try {
    const [usuarios] = await db.query("SELECT COUNT(*) AS total FROM usuarios");
    const [publicacoes] = await db.query("SELECT COUNT(*) AS total FROM publicacoes");

    res.json({
      usuarios: usuarios[0].total,
      publicacoes: publicacoes[0].total,
      atividades: [
        "Novo usuário cadastrado",
        "Publicação criada",
        "Plano atualizado"
      ]
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ===== Planos ===== 
app.get("/api/planos", async (req, res) => {
  try {
    const [planos] = await db.query("SELECT * FROM planos WHERE ativo = TRUE");
    res.json(planos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ===== Usuários ===== 
app.get("/api/usuarios", async (req, res) => {
  try {
    const [usuarios] = await db.query(`
      SELECT 
        u.id,
        u.nome,
        u.email,
        u.data_criacao,
        p.nome AS plano
      FROM usuarios u
      LEFT JOIN planos p ON u.plano_id = p.id
      ORDER BY u.data_criacao DESC
    `);
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ===== Publicações ===== 
app.get("/api/publicacoes", async (req, res) => {
  try {
    const [publicacoes] = await db.query(`
      SELECT 
        p.id,
        p.titulo,
        LEFT(p.conteudo, 50) AS resumo,
        u.nome AS autor,
        p.data_publicacao
      FROM publicacoes p
      LEFT JOIN usuarios u ON p.usuario_id = u.id
      ORDER BY p.data_publicacao DESC
    `);
    res.json(publicacoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
*/

// comentario de teste
