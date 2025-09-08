alert("animation.js carregado");
async function carregarDashboard() {
      try {
        // Visão Geral
        const resDash = await fetch("http://localhost:3000/api/dashboard");
        const dash = await resDash.json();
        document.getElementById("totalUsuarios").textContent = dash.usuarios;
        document.getElementById("totalPublicacoes").textContent = dash.publicacoes;

        // Planos
        const resPlanos = await fetch("http://localhost:3000/api/planos");
        const planos = await resPlanos.json();
        const listaPlanos = document.getElementById("listaPlanos");
        listaPlanos.innerHTML = "";
        planos.forEach(p => {
          const li = document.createElement("li");
          li.textContent = `${p.nome} - R$${p.preco || "Sob consulta"}`;
          listaPlanos.appendChild(li);
        });

        // Usuários
        const resUsuarios = await fetch("http://localhost:3000/api/usuarios");
        const usuarios = await resUsuarios.json();
        const tabelaUsuarios = document.getElementById("tabelaUsuarios");
        tabelaUsuarios.innerHTML = "";
        usuarios.forEach(u => {
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td>${u.id}</td>
            <td>${u.nome}</td>
            <td>${u.email}</td>
            <td>${u.plano || "Sem plano"}</td>
            <td>${new Date(u.data_criacao).toLocaleDateString("pt-BR")}</td>
          `;
          tabelaUsuarios.appendChild(tr);
        });

        // Publicações
        const resPublicacoes = await fetch("http://localhost:3000/api/publicacoes");
        const publicacoes = await resPublicacoes.json();
        const tabelaPublicacoes = document.getElementById("tabelaPublicacoes");
        tabelaPublicacoes.innerHTML = "";
        publicacoes.forEach(p => {
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td>${p.id}</td>
            <td>${p.titulo}</td>
            <td>${p.resumo}...</td>
            <td>${p.autor || "Desconhecido"}</td>
            <td>${new Date(p.data_publicacao).toLocaleDateString("pt-BR")}</td>
          `;
          tabelaPublicacoes.appendChild(tr);
        });

      } catch (error) {
        console.error("Erro ao carregar dashboard:", error);
      }
    }

    async function carregarGraficos() {
  try {
    // ==== Usuários por plano ====
    const resUsuarios = await fetch("http://localhost:3000/api/usuarios");
    const usuarios = await resUsuarios.json();

    const planoContagem = {};
    usuarios.forEach(u => {
      const plano = u.plano || "Sem plano";
      planoContagem[plano] = (planoContagem[plano] || 0) + 1;
    });

    const ctx1 = document.getElementById("usuariosPlanoChart").getContext("2d");
    new Chart(ctx1, {
      type: 'pie',
      data: {
        labels: Object.keys(planoContagem),
        datasets: [{
          label: 'Usuários por plano',
          data: Object.values(planoContagem),
          backgroundColor: ['#00e5ff','#ff6f61','#ffc107','#4caf50','#9c27b0'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });

    // ==== Publicações por mês ====
    const resPublicacoes = await fetch("http://localhost:3000/api/publicacoes");
    const publicacoes = await resPublicacoes.json();

    // Gerar dados por mês
    const meses = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
    const pubMes = Array(12).fill(0);
    publicacoes.forEach(p => {
      const d = new Date(p.data_publicacao);
      pubMes[d.getMonth()]++;
    });

    const ctx2 = document.getElementById("publicacoesChart").getContext("2d");
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: meses,
        datasets: [{
          label: 'Publicações por mês',
          data: pubMes,
          backgroundColor: '#00e5ff'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });

  } catch (error) {
    console.error("Erro ao carregar gráficos:", error);
  }
}
    carregarGraficos();

    carregarDashboard();