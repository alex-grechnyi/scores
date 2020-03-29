import React, { useContext } from 'react';

export const ModalContext = React.createContext();

export const useModal = () => useContext(ModalContext);
