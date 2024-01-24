
import { createServerContext } from 'react';
// @ts-ignore
export const DataContext = createServerContext();
// @ts-ignore

const AuthProvider = ({ children }) => {

  const sharedData = "This is the shared data";

  return (
    <DataContext.Provider value={{ data: sharedData }}>
      { children }
    </DataContext.Provider>
  )
}

export default AuthProvider;