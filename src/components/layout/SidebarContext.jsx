import { createContext, useState } from "react";

export const SidebarContext = createContext(null);

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <SidebarContext value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext>
  );
}
