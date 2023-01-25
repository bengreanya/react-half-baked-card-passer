import { useContext, useState } from 'react';
import { createContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState();
  return <GameContext.Provider value={{ selectedCard, setSelectedCard }}></GameContext.Provider>;
};

const useGameContext = () => {
  const cardContext = useContext(GameContext);
  return cardContext;
};
export { GameProvider, useGameContext };
