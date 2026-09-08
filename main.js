/* =========================================================================
   MAIN.JS
   Lê o array "produtos" (definido em js/produtos.js) e monta o catálogo
   automaticamente. Você não precisa editar este arquivo.
   ========================================================================= */

(function () {
  const grade = document.getElementById("grade-produtos");
  const filtros = document.getElementById("filtros-categoria");
  const vazio = document.getElementById("catalogo-vazio");
  const contador = document.getElementById("contador-produtos");

  function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  function linkWhatsapp(produto) {
    const mensagem = `Olá! Vi o ${produto.nome} no site e quero comprar.`;
    return `https://wa.me/${loja.whatsapp}?text=${encodeURIComponent(mensagem)}`;
  }

  function svgPlaceholder() {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'>
      <rect width='300' height='300' fill='#F3E4DC'/>
      <g fill='none' stroke='#5C1A2E' stroke-width='4' opacity='0.55'>
        <rect x='118' y='60' width='64' height='34' rx='6'/>
        <path d='M132 94 L132 118 L108 150 L108 236 Q108 246 118 246 L182 246 Q192 246 192 236 L192 150 L168 118 L168 94' />
      </g>
    </svg>`;
    return "data:image/svg+xml;base64," + btoa(svg);
  }

  function criarCard(produto) {
    const card = document.createElement("article");
    card.className = "card-produto";

    const figura = document.createElement("div");
    figura.className = "card-produto__imagem";
    const img = document.createElement("img");
    img.src = produto.imagem;
    img.alt = produto.nome;
    img.loading = "lazy";
    img.onerror = function () {
      this.onerror = null;
      this.src = svgPlaceholder();
      this.classList.add("card-produto__imagem--placeholder");
    };
    figura.appendChild(img);

    if (produto.destaque) {
      const etiqueta = document.createElement("span");
      etiqueta.className = "card-produto__etiqueta";
      etiqueta.textContent = "Mais pedido";
      figura.appendChild(etiqueta);
    }

    const corpo = document.createElement("div");
    corpo.className = "card-produto__corpo";

    const categoria = document.createElement("span");
    categoria.className = "card-produto__categoria";
    categoria.textContent = produto.categoria;

    const nome = document.createElement("h3");
    nome.className = "card-produto__nome";
    nome.textContent = produto.nome;

    const descricao = document.createElement("p");
    descricao.className = "card-produto__descricao";
    descricao.textContent = produto.descricao;

    const rodape = document.createElement("div");
    rodape.className = "card-produto__rodape";

    const preco = document.createElement("span");
    preco.className = "card-produto__preco";
    preco.textContent = formatarPreco(produto.preco);

    const botao = document.createElement("a");
    botao.className = "botao botao--pequeno";
    botao.href = linkWhatsapp(produto);
    botao.target = "_blank";
    botao.rel = "noopener";
    botao.textContent = "Comprar";

    rodape.appendChild(preco);
    rodape.appendChild(botao);

    corpo.appendChild(categoria);
    corpo.appendChild(nome);
    corpo.appendChild(descricao);
    corpo.appendChild(rodape);

    card.appendChild(figura);
    card.appendChild(corpo);
    return card;
  }

  function renderizar(lista) {
    grade.innerHTML = "";
    if (lista.length === 0) {
      vazio.hidden = false;
      return;
    }
    vazio.hidden = true;
    lista.forEach(function (produto) {
      grade.appendChild(criarCard(produto));
    });
  }

  function montarFiltros() {
    const categorias = Array.from(new Set(produtos.map(function (p) { return p.categoria; })));
    if (categorias.length <= 1) {
      filtros.hidden = true;
      return;
    }
    const botaoTodos = document.createElement("button");
    botaoTodos.className = "filtro filtro--ativo";
    botaoTodos.textContent = "Todos";
    botaoTodos.dataset.categoria = "todos";
    filtros.appendChild(botaoTodos);

    categorias.forEach(function (categoria) {
      const botao = document.createElement("button");
      botao.className = "filtro";
      botao.textContent = categoria;
      botao.dataset.categoria = categoria;
      filtros.appendChild(botao);
    });

    filtros.addEventListener("click", function (evento) {
      const alvo = evento.target.closest(".filtro");
      if (!alvo) return;
      filtros.querySelectorAll(".filtro").forEach(function (b) {
        b.classList.remove("filtro--ativo");
      });
      alvo.classList.add("filtro--ativo");
      const categoria = alvo.dataset.categoria;
      const filtrados = categoria === "todos"
        ? produtos
        : produtos.filter(function (p) { return p.categoria === categoria; });
      renderizar(filtrados);
    });
  }

  function preencherDadosLoja() {
    document.querySelectorAll("[data-loja-nome]").forEach(function (el) {
      el.textContent = loja.nome;
    });
    document.querySelectorAll("[data-loja-frase]").forEach(function (el) {
      el.textContent = loja.frase;
    });
    document.querySelectorAll("[data-loja-cidade]").forEach(function (el) {
      el.textContent = loja.cidade;
    });
    document.querySelectorAll("[data-loja-whatsapp-link]").forEach(function (el) {
      el.href = `https://wa.me/${loja.whatsapp}?text=${encodeURIComponent("Olá! Vim pelo site e quero saber mais sobre os perfumes.")}`;
    });
    document.querySelectorAll("[data-loja-instagram-link]").forEach(function (el) {
      el.href = loja.instagram;
    });
    document.title = loja.nome + " — Perfumaria O Boticário";
  }

  preencherDadosLoja();
  montarFiltros();
  renderizar(produtos);
  if (contador) {
    contador.textContent = produtos.length;
  }
})();
