"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({
  children,
  themes,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props} themes={themes}>
      {children}
    </NextThemesProvider>
  );
}
