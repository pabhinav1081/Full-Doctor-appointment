import { createContext, useState } from "react";
import { doctors } from "../assets/assets";  // ✅ Fix import name

export const AppContext = createContext();  // ✅ PascalCase convention

const AppContextProvider = ({ children }) => {  // ✅ Destructure props
  const [doctors] = useState(doctors);  // ✅ Define doctors variable
  
  return (
    <AppContext.Provider value={{ doctors }}>  // ✅ Wrap in return
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
