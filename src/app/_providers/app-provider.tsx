"use client";

import { ThemeProvider } from "@/features/theme/theme-provider";
import { ComposeChildren } from "@/shared/lib/react";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ComposeChildren>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      />
      {children}
    </ComposeChildren>
  );
};
