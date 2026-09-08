/* =========================================================================
   PRODUTOS.JS
   -------------------------------------------------------------------------
   É AQUI que você cadastra, edita ou remove os perfumes da loja.
   Você não precisa mexer em nenhum outro arquivo para manter o site.

   PASSO A PASSO PARA ADICIONAR UM PRODUTO NOVO:
   1. Salve a foto do perfume dentro da pasta "imagens".
      Dica: dê um nome simples e sem espaço/acento, ex: egeo-blue.jpg
   2. Copie um dos blocos { ... } abaixo (de "const produtos = [") e cole
      antes do "];" no final.
   3. Preencha os campos entre aspas.
   4. Salve o arquivo e atualize a página. O produto já aparece no site,
      com o visual pronto.

   PARA REMOVER UM PRODUTO: apague o bloco { ... } inteiro dele.
   PARA EDITAR PREÇO/DESCRIÇÃO: só troque o texto entre aspas.
   ========================================================================= */

/* -------------------------------------------------------------------------
   DADOS DA LOJA
   Troque para o nome da sua tia, o WhatsApp e o Instagram dela.
   O número do WhatsApp deve ser só números, com DDI 55 + DDD + número.
   Exemplo: (88) 99999-8888  ->  5588999998888
   ------------------------------------------------------------------------- */
const loja = {
  nome: "Boticário da Tia",
  frase: "Perfumaria e cuidados O Boticário, direto de quem entende do assunto.",
  whatsapp: "5588999998888",
  instagram: "https://instagram.com/",
  cidade: "Acopiara, CE"
};

/* -------------------------------------------------------------------------
   LISTA DE PRODUTOS
   categoria: use sempre o mesmo texto para agrupar (ex.: "Perfumaria",
   "Corpo e banho", "Presentes"). O filtro do site é montado sozinho a
   partir das categorias que você usar aqui.
   destaque: true mostra uma etiqueta "Mais pedido" no card (opcional).
   ------------------------------------------------------------------------- */
const produtos = [
  {
    nome: "Egeo Blue",
    categoria: "Perfumaria",
    preco: 89.90,
    descricao: "Desodorante colônia masculino, amadeirado e marcante. 90ml.",
    imagem: "imagens/egeo-blue.jpg",
    destaque: true
  },
  {
    nome: "Lily Essence",
    categoria: "Perfumaria",
    preco: 129.90,
    descricao: "Eau de parfum feminino floral, com toque adocicado e sofisticado. 75ml.",
    imagem: "imagens/lily-essence.jpg",
    destaque: false
  },
  {
    nome: "Nativa SPA Óleo Vegetal Karité",
    categoria: "Corpo e banho",
    preco: 54.90,
    descricao: "Óleo hidratante corporal com karité, deixa a pele macia e perfumada. 200ml.",
    imagem: "imagens/nativa-spa-karite.jpg",
    destaque: false
  }
];
