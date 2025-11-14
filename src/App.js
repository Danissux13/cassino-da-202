import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [abaAtiva, setAbaAtiva] = useState("biografia");
  const [selecionado, setSelecionado] = useState(null);
  const hoverSound = useRef(new Audio("/sounds/card-flip.mp3"));
  const openSound = useRef(new Audio("/sounds/chip.mp3"));
  const closeSound = useRef(new Audio("/sounds/close.mp3"));

  const playSound = (audioRef) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  // Dados de suspeitos
  const suspeitos = [
    {
      nome: "Juliane",
      nomeCompleto: "Juliane – Operadora VIP",
      bio: "Gerente do cassino, ambiciosa e envolvida em esquema de fichas e ilícitos. Controla os pedidos e possui grande influência. Mantinha relação afetiva com uma das vítimas e tinha acesso irrestrito à área VIP e ao bar.",
      bioCurta: "Gerente ambiciosa envolvida em esquemas ilícitos. Controlava tudo no cassino e tinha relação com uma vítima.",
      img: "/imagens/juliane.jpg",
    },
    {
      nome: "Yasmim",
      nomeCompleto: "Yasmim – Membro VIP",
      bio: "Membro VIP do cassino há anos. Envolvida em rivalidades internas e disputas de cargo, observadora e afiada. Conhece todos os segredos do Império 202.",
      bioCurta: "Membro VIP há anos, envolveu-se em rivalidades e disputas internas. Conhece todos os segredos.",
      img: "/imagens/yasmim.jpg",
    },
    {
      nome: "Pisca",
      nomeCompleto: "Pisca – A Bartender",
      bio: "Bartender conhecido por sua astúcia e contatos importantes. Querido por todos os clientes, ouve cada conversa e confidência nas madrugadas do cassino.",
      bioCurta: "Bartender astuto com contatos importantes. Ouvia todas as conversas e confidências do cassino.",
      img: "/imagens/pisca.jpg",
    },
    {
      nome: "Emanuel",
      nomeCompleto: "Emanuel – Segurança",
      bio: "Segurança e técnico de manutenção. Conhece toda a rotina noturna do cassino. Endividado e suspeito de forjar fichas falsas. Move-se como sombra pelos corredores.",
      bioCurta: "Segurança endividado, conhece cada centímetro do cassino. Suspeito de forjar fichas falsas.",
      img: "/imagens/emanuel .jpg",
    }
  ];

  // Dados de vítimas
  const vitimas = [
    {
      nome: "Vitor",
      nomeCompleto: "Vitor — Jogador VIP",
      bio: "Causa da morte: Intoxicação por sedativo. Corpo encontrado nos bastidores. Última pessoa que o viu: Duda (bartender). Ocorrência: Após uma intensa partida de pôquer, Vítor passou mal e pediu ajuda a Duda para ir ao banheiro, mas desmaiou no caminho e morreu antes de receber socorro. Tinha uma rixa com Emanuel e era próximo de Duda e Juliane. Suspeitas pairam sobre seus próprios aliados.",
      bioCurta: "Jogador VIP com dívidas perigosas. Gostava de riscos e atraía atenções. Tinha muitos inimigos.",
      img: "/imagens/vitor.jpg",
    },
    {
      nome: "Samuel",
      nomeCompleto: "Samuel — Funcionário do Bar",
      bio: "Causa da morte: Envenenamento por bebida adulterada. Última pessoa que o viu: Yasmin. Ocorrência: Samuel foi encontrado morto na cozinha do cassino. Recém-contratado por Juliane, vinha se destacando no bar e conquistando clientes, o que despertou inveja entre colegas. Na noite do crime, Yasmin o encontrou tossindo sangue. A autópsia revelou que ele havia ingerido álcool, algo proibido para funcionários, o que agravou o envenenamento. Restam os sussurros: quem quis impedir sua ascensão no cassino?",
      bioCurta: "Funcionário promissor que conquistava clientes rapidamente. Seu sucesso despertava ciúmes perigosos.",
      img: "/imagens/samuel.jpg",
    },
    {
      nome: "Isabelly",
      nomeCompleto: "Isabelly — Contadora",
      bio: "Causa da morte: Traumatismo por agressão. Última pessoa que a viu: Não identificada. Ocorrência: Isabelly, contadora do Cassino Império, descobriu um desvio de dinheiro e fichas e iniciou uma investigação por conta própria. Funcionária de confiança de Juliane, mas temida pelos colegas, foi encontrada morta perto dos cofres, com sinais de violência. O cassino seguiu brilhando, mas o crime deixou claro: todos jogam, e ninguém está realmente limpo.",
      bioCurta: "Contadora temida por encontrar erros financeiros. Séria e detalhista, sabia demais sobre o cassino.",
      img: "/imagens/isabelly.jpg",
    },
  ];

  const experimentos = [
    {
      nome: "Teste com luminol e análise de digitais",
      nomeCurto: "Luminol e digitais",
      bio: "O luminol é um reagente químico que reage com o ferro presente na hemoglobina do sangue, produzindo uma luminescência azul, mesmo em superfícies lavadas. Já a análise de digitais identifica e compara impressões digitais únicas deixadas no local, um dos métodos de identificação mais confiáveis.",
      bioCurta: "Reagente que detecta sangue mesmo lavado. Análise de impressões digitais únicas para identificação.",
      img: "/imagens/luminol.png",
      detalhes: "Demonstração do uso de luminol e comparação de impressões digitais coletadas.",
    },
    {
      nome: "Teste de pH",
      nomeCurto: "Teste de pH",
      bio: "O teste de pH determina se uma substância é ácida, básica ou neutra. Na cena de um crime, isso pode ajudar a identificar resíduos desconhecidos, como líquidos corrosivos ou produtos químicos específicos deixados pelo autor.",
      bioCurta: "Identifica se substâncias são ácidas, básicas ou neutras. Crucial para análise de resíduos.",
      img: "/imagens/ph.jpg",
      detalhes: "Mostramos tiras de pH e interpretação dos resultados para identificação de substâncias.",
    },
    {
      nome: "Análise de vestígios (microscópio)",
      nomeCurto: "Vestígios no microscópio",
      bio: "O microscópio é usado para examinar vestígios invisíveis a olho nu, como fibras de tecido, fios de cabelo, fragmentos de vidro ou pólen. Essa análise pode criar conexões cruciais entre um suspeito e o local do crime.",
      bioCurta: "Examina fibras, cabelos e partículas invisíveis a olho nu. Conecta suspeitos à cena do crime.",
      img: "/imagens/microscopio.jpg",
      detalhes: "Comparação de fibras e partículas para conectar cenas e suspeitos.",
    },
    {
      nome: "Análise de vestígios na luz UV",
      nomeCurto: "Vestígios na luz UV",
      bio: "A luz ultravioleta (UV) faz com que alguns materiais brilhem no escorro (fluorescem), como manchas de fluidos biológicos (sangue, saliva), fibras, resíduos de explosivos ou produtos de limpeza, revelando evidências que seriam facilmente ignoradas.",
      bioCurta: "Revela evidências ocultas como sangue, saliva e fibras através da fluorescência na luz UV.",
      img: "/imagens/uv.jpg",
      detalhes: "Demonstração de materiais que fluorescem e técnicas de documentação forense.",
    },
    {
      nome: "Simulação de cromatografia e análise de solventes",
      nomeCurto: "Cromatografia e solventes",
      bio: "A cromatografia é uma técnica para separar os componentes de uma mistura, como tinta, drogas ou corantes. Ao analisar como as substâncias se separam com diferentes solventes, é possível comparar e identificar materiais encontrados em cenas de crime.",
      bioCurta: "Separa componentes de misturas como tintas e drogas. Identifica materiais através de solventes.",
      img: "/imagens/Cromatografia.jpg",
      detalhes: "Simulação prática de cromatografia em papel e análise qualitativa de solventes.",
    },
  ];

  const biografiaCasino = {
    titulo: "Cassino Império 202 — Cena do Crime",
    conteudo: [
      "O Império 202 não nasceu do acaso. Começou como um salão discreto, escondido num antigo armazém, onde poucos tinham acesso. Com o tempo, tornou-se um símbolo de poder e respeito.",
      "No Império 202 não há pressa. O tempo anda devagar, como se o relógio também tivesse sido conquistado. Cada pessoa que entra carrega esperança nos olhos.",
      "Dizem que o Império 202 não é apenas um cassino: é um símbolo. Um lugar onde quem tem estilo sabe se comportar, onde o silêncio vale mais que a palavra.",
      "Hoje, o Império 202 permanece grandioso. Suas portas continuam pesadas, seus corredores cheios de mistério. E ali dentro, cada jogador é protagonista de sua própria história."
    ],
    curiosidades: [
      "💔 Juliane e Vitor eram próximos demais - negociavam fichas 'por fora'",
      "⚔️ Vitor e Emanuel tinham rixa antiga - viviam trocando indiretas",
      "🤝 Duda e Samuel trabalhavam juntos - mas clima variava entre parceria e competição",
      "🚀 Juliane contratou Samuel rápido demais - Duda e Emanuel desconfiados",
      "👑 Yasmin disputava influência com Juliane - odiava perder espaço para novatos",
      "📋 Isabelly descobria falhas nas fichas - irritava Juliane e deixava Emanuel nervoso",
      "👁️ Yasmin foi última a ver Samuel vivo - mas alega 'não viu nada demais'",
      "🗣️ Duda era confidente de Vitor - sabia mais da vida dele do que deveria",
      "⭐ Samuel virando queridinho do bar - motivo perfeito para ciúmes de Duda e Pisca",
      "🔧 Emanuel visto perto do cofre - alega que era 'rotina de manutenção'"
    ],
  };

  const renderConteudo = () => {
    switch (abaAtiva) {
      case "biografia":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-red-900/20 via-purple-900/20 to-yellow-900/10 border-2 border-yellow-500/40 rounded-3xl p-8 backdrop-blur-sm shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent animate-pulse"></div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
              <h2 className="text-4xl font-bold text-yellow-200 mb-6 text-center font-serif drop-shadow-lg">
                {biografiaCasino.titulo}
              </h2>
              <div className="space-y-6 mb-8 relative z-10">
                {biografiaCasino.conteudo.map((p, i) => (
                  <p key={i} className="text-yellow-100 text-lg leading-relaxed font-medium">
                    {p}
                  </p>
                ))}
              </div>
              <div className="bg-gradient-to-r from-red-900/30 to-yellow-900/30 border-2 border-yellow-500/30 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full opacity-60"></div>
                <h3 className="text-2xl font-bold text-yellow-200 mb-4 font-serif">
                  Dicas da Investigação
                </h3>
                <ul className="grid md:grid-cols-2 gap-3 text-yellow-100">
                  {biografiaCasino.curiosidades.map((c, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        );

      case "suspeitos":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-4xl font-bold text-yellow-200 text-center mb-8 font-serif drop-shadow-lg">
              Investigar Suspeitos
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {suspeitos.map((p) => (
                <motion.div
                  key={p.nome}
                  whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
                  onHoverStart={() => playSound(hoverSound)}
                  onClick={() => {
                    setSelecionado(p);
                    playSound(openSound);
                  }}
                  className="cursor-pointer bg-gradient-to-br from-red-900/20 via-purple-900/20 to-yellow-900/10 border-2 border-yellow-500/30 rounded-2xl shadow-2xl overflow-hidden group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                  <div className="relative overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.nome}
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/imagens/luminol.png'; }}
                      className="h-64 w-full object-cover object-top group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-16"></div>
                  </div>
                  <div className="p-6 relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="text-2xl font-bold text-yellow-100 font-serif">
                        {p.nome}
                      </h2>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-300 border border-red-500/30">
                        SUSPEITO
                      </span>
                    </div>
                    <p className="text-yellow-200/80 text-sm">{p.bioCurta}</p>
                    <div className="mt-4 text-yellow-400 text-xs font-semibold flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
                      CLIQUE PARA INVESTIGAR
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case "vitimas":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-4xl font-bold text-yellow-200 text-center mb-8 font-serif drop-shadow-lg">
              Investigar Vítimas
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {vitimas.map((p) => (
                <motion.div
                  key={p.nome}
                  whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
                  onHoverStart={() => playSound(hoverSound)}
                  onClick={() => {
                    setSelecionado(p);
                    playSound(openSound);
                  }}
                  className="cursor-pointer bg-gradient-to-br from-red-900/20 via-purple-900/20 to-yellow-900/10 border-2 border-yellow-500/30 rounded-2xl shadow-2xl overflow-hidden group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                  <div className="relative overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.nome}
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/imagens/luminol.png'; }}
                      className="h-64 w-full object-cover object-top group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-16"></div>
                  </div>
                  <div className="p-6 relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="text-2xl font-bold text-yellow-100 font-serif">
                        {p.nome}
                      </h2>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        VÍTIMA
                      </span>
                    </div>
                    <p className="text-yellow-200/80 text-sm">{p.bioCurta}</p>
                    <div className="mt-4 text-yellow-400 text-xs font-semibold flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
                      CLIQUE PARA INVESTIGAR
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case "experimentos":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-4xl font-bold text-yellow-200 text-center mb-8 font-serif drop-shadow-lg">
              Laboratório do Cassino
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {experimentos.map((exp) => (
                <motion.div
                  key={exp.nome}
                  whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                  onHoverStart={() => playSound(hoverSound)}
                  onClick={() => {
                    setSelecionado(exp);
                    playSound(openSound);
                  }}
                  className="cursor-pointer bg-gradient-to-br from-red-900/20 to-yellow-900/20 border-2 border-yellow-500/30 rounded-2xl shadow-2xl overflow-hidden group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <img
                    src={exp.img}
                    alt={exp.nome}
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/imagens/luminol.png'; }}
                    className="h-64 w-full object-cover object-top group-hover:scale-110 transition duration-500"
                  />
                  <div className="p-6 relative z-10">
                    <h3 className="text-2xl font-bold mb-3 text-yellow-100 font-serif">
                      {exp.nomeCurto}
                    </h3>
                    <p className="text-yellow-200/80 text-sm">{exp.bioCurta}</p>
                    <div className="mt-4 text-yellow-400 text-xs font-semibold flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
                      CLIQUE PARA ANALISAR
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-red-900 text-white font-serif relative overflow-hidden">
      {/* Fundo de cassino com elementos */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(220,20,60,0.1),transparent_50%)]"></div>

      {/* Padrão de cassino */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-8 h-8 bg-yellow-500 rounded-full"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-red-500 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-green-500 rounded-full"></div>
        <div className="absolute bottom-40 right-32 w-10 h-10 bg-yellow-500 rounded-full"></div>
      </div>

      {/* Efeito de luzes piscando */}
      <div className="absolute top-0 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
      <div className="absolute top-10 right-1/3 w-2 h-2 bg-red-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>

      {/* Cabeçalho */}
      <header className="text-center pt-8 pb-6 relative z-10">
        <motion.div
          className="inline-block bg-gradient-to-r from-red-900/50 via-purple-900/50 to-yellow-900/30 backdrop-blur-lg border-2 border-yellow-500/40 rounded-3xl px-10 py-6 mb-6 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-500 rounded-full opacity-60"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-red-500 rounded-full opacity-60"></div>
          <h1 className="text-5xl md:text-6xl font-bold mb-3 tracking-tight bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg font-serif">
            Cassino Império 202
          </h1>
          <p className="text-yellow-200 text-lg italic font-light">
            Investigação Forense — A Ciência Revela a Verdade
          </p>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-500 rounded-full"></div>
        </motion.div>

        {/* Menu estilo fichas de cassino */}
        <nav className="max-w-3xl mx-auto mt-8 grid grid-cols-4 gap-4">
          {[
            { id: "biografia", label: "Cena do Crime", emoji: "🎭" },
            { id: "suspeitos", label: "Suspeitos", emoji: "🕵️" },
            { id: "vitimas", label: "Vítimas", emoji: "💔" },
            { id: "experimentos", label: "Laboratório", emoji: "🔬" },
          ].map((aba) => (
            <motion.button
              key={aba.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setAbaAtiva(aba.id)}
              className={`px-6 py-4 rounded-2xl font-bold transition-all duration-300 border-2 text-center relative overflow-hidden ${
                abaAtiva === aba.id
                  ? "bg-gradient-to-r from-yellow-600 to-yellow-800 text-yellow-100 shadow-2xl border-yellow-400"
                  : "bg-gradient-to-r from-red-800/50 to-purple-800/50 text-yellow-200 border-yellow-600/50 hover:border-yellow-400 hover:bg-yellow-500/10"
              }`}
            >
              <span className="relative z-10 flex flex-col items-center">
                <span className="text-xl mb-1">{aba.emoji}</span>
                <span className="text-sm">{aba.label}</span>
              </span>
              {abaAtiva === aba.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent animate-pulse"></div>
              )}
            </motion.button>
          ))}
        </nav>
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-7xl mx-auto px-4 pb-20 relative z-10 mt-8">
        {renderConteudo()}

        {/* Modal estilo carta de cassino - SEM BOTÃO */}
        <AnimatePresence>
          {selecionado && (
            <motion.div 
              className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelecionado(null);
                playSound(closeSound);
              }}
            >
              <motion.div 
                className="bg-gradient-to-br from-red-900/20 via-purple-900/20 to-yellow-900/10 border-2 border-yellow-500/50 rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden"
                initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                
                <div className="relative overflow-hidden rounded-2xl mb-6 border-2 border-yellow-500/30">
                  <img src={selecionado.img} alt={selecionado.nomeCompleto || selecionado.nome} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/imagens/luminol.png'; }} className="w-full h-72 object-contain" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-16"></div>
                </div>
                
                <h2 className="text-3xl font-bold mb-4 text-yellow-100 font-serif text-center">
                  {selecionado.nomeCompleto || selecionado.nome}
                </h2>
                
                <p className="text-yellow-200/90 mb-4 text-center leading-relaxed">{selecionado.bio}</p>
                
                {selecionado.detalhes && (
                  <div className="bg-gradient-to-r from-red-900/20 to-yellow-900/20 border border-yellow-500/30 rounded-2xl p-4 mb-6">
                    <p className="text-yellow-300 text-sm italic text-center">
                      {selecionado.detalhes}
                    </p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Rodapé (esconde quando houver um item selecionado/modal aberto) */}
      {!selecionado && (
        <footer className="text-center text-yellow-200/80 text-sm pb-8 relative z-10">
          <motion.div
            className="inline-block bg-black/40 backdrop-blur-sm border border-yellow-500/20 rounded-2xl px-8 py-4 space-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-yellow-300 font-semibold">
              Cassino Império 202 — Investigação Forense
            </p>
            <p>
              Feira de Ciências • <span className="text-yellow-400 font-bold">2º Ano 2025</span>
            </p>
            <p className="text-yellow-200/70 font-medium">
              Escola Estadual São João Batista • Turma 202
            </p>
          </motion.div>
        </footer>
      )}
    </div>
  );
}