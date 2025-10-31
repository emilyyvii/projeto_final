import { createContext, useState } from "react";

export const PetContext = createContext();

export function PetProvider({ children }) {
  const [pets, setPets] = useState([]);

  const addPet = (pet) => {
    setPets((old) => [...old, { ...pet, id: Date.now().toString() }]);
  };

  const updatePet = (id, updatedData) => {
    setPets((old) => old.map((p) => (p.id === id ? { ...p, ...updatedData } : p)));
  };

  return (
    <PetContext.Provider value={{ pets, addPet, updatePet }}>
      {children}
    </PetContext.Provider>
  );
}

