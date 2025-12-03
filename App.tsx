import React, { useState, useEffect, useCallback } from 'react';
import { Banner } from './components/Banner';
import { StickyNote } from './components/StickyNote';
import { VERBS, EXPRESSIONS } from './constants';
import { Shuffle } from 'lucide-react';

enum GameState {
  START,
  PLAYING
}

export default function App() {
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [currentVerb, setCurrentVerb] = useState<string>("");
  const [exprA, setExprA] = useState<string>("");
  const [exprB, setExprB] = useState<string>("");
  // Random rotation for sticky notes to look natural
  const [rotA, setRotA] = useState<number>(0);
  const [rotB, setRotB] = useState<number>(0);

  const randomizeContent = useCallback(() => {
    // Pick a random verb
    const randomVerb = VERBS[Math.floor(Math.random() * VERBS.length)];
    setCurrentVerb(randomVerb);

    // Pick two distinct expressions
    const shuffledExpressions = [...EXPRESSIONS].sort(() => 0.5 - Math.random());
    setExprA(shuffledExpressions[0]);
    setExprB(shuffledExpressions[1]);

    // Randomize rotations slightly (-3 to 3 degrees)
    setRotA(Math.random() * 6 - 3);
    setRotB(Math.random() * 6 - 3);
  }, []);

  const startGame = () => {
    randomizeContent();
    setGameState(GameState.PLAYING);
  };

  useEffect(() => {
    if (gameState === GameState.START) {
      // Pre-load logic if needed, currently empty
    }
  }, [gameState]);

  return (
    <div className="min-h-screen bg-cream-100 flex flex-col font-sans text-teal-900 overflow-x-hidden">
      
      {/* Header / Banner */}
      <header className="pt-8 pb-4 w-full max-w-4xl mx-auto">
        <Banner title="Quiero saber de tu vida" />
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 w-full max-w-6xl mx-auto">
        
        {gameState === GameState.START ? (
          /* Start Screen */
          <div className="flex flex-col items-center justify-center space-y-12 animate-fade-in">
            <div className="text-center max-w-lg space-y-4">
              <p className="text-xl md:text-2xl opacity-80 font-medium">
                ¿Estás listo para descubrir qué hacen tus compañeros?
              </p>
            </div>
            
            <button
              onClick={startGame}
              className="group relative inline-flex items-center justify-center px-12 py-6 text-2xl font-bold text-white bg-coral-400 rounded-full shadow-lg transform transition hover:scale-105 hover:bg-coral-500 hover:shadow-xl active:translate-y-1 focus:outline-none focus:ring-4 focus:ring-coral-400/50"
            >
              <span className="relative z-10 font-hand text-3xl">Crear Juego</span>
            </button>
          </div>
        ) : (
          /* Game Screen */
          <div className="w-full flex flex-col items-center space-y-8 md:space-y-12 animate-fade-in">
            
            {/* Central Verb Card */}
            <div className="bg-white border-4 border-teal-900 rounded-2xl p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(27,79,77,1)] max-w-2xl w-full text-center transform transition-all hover:-translate-y-1">
              <span className="block text-sm font-bold tracking-widest uppercase text-coral-500 mb-2">
                Tema de conversación
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-teal-900 break-words">
                {currentVerb}
              </h2>
            </div>

            {/* Students Section */}
            <div className="flex flex-col md:flex-row w-full justify-around items-center gap-12 md:gap-8">
              
              {/* Alumno A */}
              <div className="flex flex-col items-center space-y-4">
                <h3 className="text-2xl font-hand font-bold text-teal-900 bg-white/50 px-6 py-2 rounded-full border-2 border-teal-900 border-dashed">
                  Alumno A
                </h3>
                <StickyNote text={exprA} rotation={rotA} />
              </div>

              {/* VS Divider (Visual only) */}
              <div className="hidden md:block w-1 h-32 bg-teal-900/10 rounded-full"></div>

              {/* Alumno B */}
              <div className="flex flex-col items-center space-y-4">
                <h3 className="text-2xl font-hand font-bold text-teal-900 bg-white/50 px-6 py-2 rounded-full border-2 border-teal-900 border-dashed">
                  Alumno B
                </h3>
                <StickyNote text={exprB} rotation={rotB} />
              </div>
            </div>

            {/* Controls */}
            <div className="pt-8 pb-12">
              <button
                onClick={randomizeContent}
                className="flex items-center space-x-3 px-8 py-4 bg-teal-900 text-cream-100 rounded-xl font-bold text-xl shadow-lg transition-all hover:bg-teal-800 hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <Shuffle size={24} />
                <span>Más</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Simple Footer */}
      <footer className="w-full text-center py-4 text-teal-900/40 text-sm font-medium">
        Juego para clase de español
      </footer>
    </div>
  );
}