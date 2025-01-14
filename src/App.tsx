import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-24 hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-24 hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-spin-slow"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">
        Vite + React
      </h1>
      <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Edit{" "}
          <code className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
            src/App.tsx
          </code>{" "}
          and save to test HMR
        </p>
      </div>
      <p className="mt-8 text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
