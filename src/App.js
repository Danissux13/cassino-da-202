import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [abaAtiva, setAbaAtiva] = useState("inicio");
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

  // Dados existentes
  const suspeitos = [
    {
      nome: "♠ Suspeito 1",
      bio: "Ex-crupiê do cassino, conhecido por manipular cartas com maestria. Dizem que ele nunca perde — mas ninguém sabe por quê.",
      img: "https://images.unsplash.com/photo-1608889175123-34e5d8a6bcb8?q=80&w=500",
    },
    {
      nome: "♥ Suspeito 2",
      bio: "Jogadora profissional e mestre em blefes. Sempre elegante, mas carrega um olhar misterioso que ninguém decifra.",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=500",
    },
    {
      nome: "♦ Suspeito 3",
      bio: "Funcionário do cassino, responsável pelo cofre principal. Nervoso desde o dia do 'incidente'. O que ele esconde?",
      img: "https://images.unsplash.com/photo-1541534401786-2077eed87a76?q=80&w=500",
    },
  ];

  const vitimas = [
    {
      nome: "💀 Vítima 1",
      bio: "O dono do cassino, encontrado desacordado na sala VIP. Ninguém sabe quem estava com ele na hora do ataque.",
      img: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=500",
    },
    {
      nome: "🎤 Vítima 2",
      bio: "A cantora principal da noite. Sua apresentação foi interrompida por um apagão misterioso.",
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=500",
    },
    {
      nome: "🎲 Vítima 3",
      bio: "Um apostador de alto nível, visto discutindo pouco antes do ocorrido. Suas fichas sumiram misteriosamente.",
      img: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=500",
    },
  ];

  // Novos dados para experimentos
  const experimentos = [
    {
      nome: "🧪 Experimento 1 - Reação Química",
      bio: "Demonstração de reações redox usando elementos comuns do cassino. Observamos como metais reagem com diferentes soluções.",
      img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=500",
      detalhes: "Este experimento mostra como reações de oxidação-redução podem criar efeitos visuais impressionantes, similares aos das luzes do cassino."
    },
    {
      nome: "🔬 Experimento 2 - Análise Forense",
      bio: "Técnicas modernas de análise de impressões digitais e fibras encontradas na cena do crime.",
      img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=500",
      detalhes: "Utilizamos pó magnético e luz UV para revelar impressões em superfícies porosas e não porosas."
    },
    {
      nome: "⚗️ Experimento 3 - Cromatografia",
      bio: "Separação de pigmentos de marcadores usados nas fichas do cassino para identificar padrões específicos.",
      img: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=500",
      detalhes: "Através da cromatografia em papel, identificamos a composição química exclusiva das tintas usadas pelo criminoso."
    },
    {
      nome: "🔍 Experimento 4 - Microscopia",
      bio: "Análise de fibras e resíduos encontrados nas cartas de poker com microscópio digital.",
      img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=500",
      detalhes: "Identificamos fibras de roupas e resíduos químicos que conectam os suspeitos à cena do crime."
    }
  ];

  // Conteúdo da biografia do cassino
  const biografiaCasino = {
    titulo: "🎰 A História do Casino da 202",
    conteudo: [
      "Fundado em 1985, o Casino da 202 sempre foi conhecido por sua atmosfera luxuosa e clientela exclusiva. Localizado em um distrito discreto da cidade, o cassino tornou-se famoso pelos seus jogos de alta aposta e pela misteriosa Sala VIP, onde apenas os mais ricos e influentes tinham acesso.",
      "Durante anos, o casino operou sem incidentes, até a fatídica noite de 15 de novembro de 2024. Durante um torneio de pôquer de alto escalão, as luzes se apagaram por exatos 3 minutos. Quando a energia voltou, o dono do estabelecimento estava inconsciente e o cofre principal havia sido violado.",
      "O mistério permanece: quem poderia ter planejado o crime perfeito? As investigações apontam para vários suspeitos, cada um com seus próprios motivos e oportunidades. Nossa missão científica é desvendar este enigma usando os mais modernos métodos de análise forense."
    ],
    curiosidades: [
      "⚡ O cassino tinha um sistema de segurança de última geração",
      "🎭 Muitos clientes famosos frequentavam o estabelecimento",
      "💎 A Sala VIP continha artefatos raros e valiosos",
      "🔐 Apenas 3 pessoas tinham acesso ao cofre principal"
    ]
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
            <div className="bg-gradient-to-br from-gray-800/90 to-black/90 border border-amber-400/20 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
              <h2 className="text-4xl font-bold text-amber-100 mb-6 text-center">
                {biografiaCasino.titulo}
              </h2>
              
              <div className="space-y-6 mb-8">
                {biografiaCasino.conteudo.map((paragrafo, index) => (
                  <p key={index} className="text-gray-200 text-lg leading-relaxed">
                    {paragrafo}
                  </p>
                ))}
              </div>

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-amber-200 mb-4">🎯 Curiosidades do Casino</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {biografiaCasino.curiosidades.map((curiosidade, index) => (
                    <div key={index} className="flex items-center space-x-3 text-amber-100">
                      <span className="text-amber-400">•</span>
                      <span>{curiosidade}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "experimentos":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold text-amber-100 text-center mb-8">
              🔬 Nossos Experimentos Científicos
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {experimentos.map((experimento) => (
                <motion.div
                  key={experimento.nome}
                  whileHover={{ scale: 1.03, y: -5 }}
                  onHoverStart={() => playSound(hoverSound)}
                  onClick={() => {
                    setSelecionado(experimento);
                    playSound(openSound);
                  }}
                  className="cursor-pointer group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-300"></div>
                  
                  <div className="relative bg-gradient-to-b from-gray-800/90 to-black/90 border border-green-400/20 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm h-full">
                    <img
                      src={experimento.img}
                      alt={experimento.nome}
                      className="h-48 w-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-green-100">
                        {experimento.nome}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {experimento.bio}
                      </p>
                      <div className="mt-4 text-green-400 text-xs font-semibold tracking-wider">
                        CLIQUE PARA DETALHES
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      default: // inicio
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...suspeitos, ...vitimas].map((pessoa) => (
                <motion.div
                  key={pessoa.nome}
                  whileHover={{ scale: 1.03, y: -8 }}
                  onHoverStart={() => playSound(hoverSound)}
                  onClick={() => {
                    setSelecionado(pessoa);
                    playSound(openSound);
                  }}
                  className="cursor-pointer group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-300"></div>
                  
                  <div className="relative bg-gradient-to-b from-gray-800/90 to-black/90 border border-amber-400/20 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm h-full">
                    <img
                      src={pessoa.img}
                      alt={pessoa.nome}
                      className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-3 text-amber-100">
                        {pessoa.nome}
                      </h2>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {pessoa.bio.slice(0, 70)}...
                      </p>
                      <div className="mt-4 text-amber-400 text-xs font-semibold tracking-wider">
                        CLIQUE PARA INVESTIGAR
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white font-serif relative overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,40,200,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(200,40,120,0.2),transparent_50%)]"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div>

      {/* Cabeçalho com navegação */}
      <header className="text-center pt-8 pb-6 relative z-10">
        <motion.div
          className="inline-block bg-gradient-to-r from-purple-900/50 to-fuchsia-700/50 backdrop-blur-sm border border-fuchsia-500/30 rounded-2xl px-8 py-4 mb-4 shadow-2xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-2 tracking-tight bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Casino da 202 🎰
          </motion.h1>
          <p className="text-gray-300 text-lg italic font-light tracking-wide">
            Mistérios, intrigas e sorte... até onde você jogaria para vencer?
          </p>
        </motion.div>

        {/* Navegação por abas */}
        <nav className="max-w-2xl mx-auto mt-6">
          <div className="bg-black/30 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-2 inline-flex">
            {[
              { id: "inicio", label: "🏠 Início", icone: "🎭" },
              { id: "biografia", label: "📖 Biografia", icone: "🎰" },
              { id: "experimentos", label: "🔬 Experimentos", icone: "🧪" }
            ].map((aba) => (
              <button
                key={aba.id}
                onClick={() => setAbaAtiva(aba.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  abaAtiva === aba.id
                    ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg"
                    : "text-gray-300 hover:text-amber-200 hover:bg-amber-500/10"
                }`}
              >
                <span className="mr-2">{aba.icone}</span>
                {aba.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-7xl mx-auto px-4 pb-20 relative z-10 mt-8">
        {renderConteudo()}

        {/* Modal para todos os tipos de conteúdo */}
        <AnimatePresence>
          {selecionado && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 border border-amber-500/30 rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden backdrop-blur-sm"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, type: "spring" }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 to-fuchsia-600/20 blur rounded-3xl"></div>
                <div className="relative z-10">
                  <img
                    src={selecionado.img}
                    alt={selecionado.nome}
                    className="rounded-2xl mb-6 w-full h-72 object-cover shadow-lg border border-amber-400/20"
                  />
                  <h2 className="text-3xl font-bold mb-4 text-amber-100">
                    {selecionado.nome}
                  </h2>
                  <p className="text-gray-200 mb-4 leading-relaxed font-light">
                    {selecionado.bio}
                  </p>
                  {selecionado.detalhes && (
                    <p className="text-gray-300 mb-6 text-sm italic border-l-4 border-amber-500 pl-4">
                      {selecionado.detalhes}
                    </p>
                  )}
                  <button
                    onClick={() => {
                      setSelecionado(null);
                      playSound(closeSound);
                    }}
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 px-6 py-3 rounded-xl transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-amber-500/20 border border-amber-400/30"
                  >
                    Fechar
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Rodapé */}
      <footer className="text-center text-gray-400 text-sm pb-8 relative z-10">
        <div className="inline-block bg-black/30 backdrop-blur-sm border border-amber-500/10 rounded-full px-6 py-3">
          Feira de Ciências — <span className="text-amber-300 font-semibold">2º Ano 2025</span>
        </div>
      </footer>
    </div>
  );
}