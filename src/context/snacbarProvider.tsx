"use client";
import React, { ReactNode } from "react";

import { SnackbarProvider } from "notistack";

interface ReduxProviderProps {
  children: ReactNode;
}

const SnackBarProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  // You can add any additional logic or configuration here
  // For example, you can initialize some global state or perform setup

  return <SnackbarProvider>{children}</SnackbarProvider>;
};

export default SnackBarProvider;
