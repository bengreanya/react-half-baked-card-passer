import { useContext, useState, createContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState();
  const [from, setFrom] = useState('deck');
  return (
    <GameContext.Provider value={{ selectedCard, setSelectedCard, from, setFrom }}>
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const cardContext = useContext(GameContext);
  return cardContext;
};
export { GameProvider, useGameContext };
