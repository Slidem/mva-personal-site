import React, { createContext, useContext, useState } from "react";

interface ModalContextType {
  isModalOpen: boolean;
  modalContent: React.ReactNode | null;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({
  isModalOpen: false,
  modalContent: null,
  openModal: (content: React.ReactNode | null) => {},
  closeModal: () => {},
});

export const useModalContext = () => useContext(ModalContext);

interface Props {
  children: React.ReactNode;
}

export const ModalContextProvider: React.FC<Props> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        modalContent,
        closeModal: () => setIsModalOpen(false),
        openModal: (content) => {
          setModalContent(content);
          setIsModalOpen(true);
        },
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
