import { GlobalContext, GlobalContextType } from "@/lib/global-provider";
import { useContext } from "react";

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);

  if (!context)
    throw new Error("useGlobalContext must be used within GlobalContext");
  return context;
};

