import { Dasboard } from "./pages/Dasboard";
import "./App.css";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function App() {
  const lightTheme = createTheme({
    type: "light",
    theme: {
      colors: {}, // optional
    },
  });

  const darkTheme = createTheme({
    type: "dark",
    theme: {
      colors: {}, // optional
    },
  });

  return (
    <div className="App">
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <Dasboard />
        </NextUIProvider>
      </NextThemesProvider>
    </div>
  );
}

export default App;
