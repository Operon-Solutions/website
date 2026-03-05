"use client";

import { createContext, useContext, useState, useCallback } from "react";
import ContactModal from "./ContactModal";

const ContactContext = createContext<{ open: () => void }>({
  open: () => {},
});

export function useContact() {
  return useContext(ContactContext);
}

export default function ContactProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <ContactContext.Provider value={{ open }}>
      {children}
      <ContactModal open={isOpen} onClose={close} />
    </ContactContext.Provider>
  );
}
