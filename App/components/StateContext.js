import { useState, createContext } from 'react';

export const StateContext = createContext();

export const StateProvider = (props) => {
  const [hardwareIp, setHardwareIp] = useState('');

  return <StateContext.Provider value={[hardwareIp, setHardwareIp]}>{props.children}</StateContext.Provider>;
};
