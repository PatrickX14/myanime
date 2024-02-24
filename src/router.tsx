import { createBrowserRouter } from "react-router-dom";
import { PokemonPage } from "./pages/pokemon/Pokemon";
import { NartuoLoader, NarutoPage } from "./pages/naruto/Naruto";
import { WebTemplate } from "./pages/WebTemplate";

export const router = createBrowserRouter([
  {
    path: "",
    element: <WebTemplate />,
    children: [
      {
        path: "/",
        // element: <h1>helloworld</h1>,
      },
      {
        path: "/pokemon",
        // loader: PokemonLoader,
        element: <PokemonPage />,
      },
      {
        path: "/naruto",
        children: [
          {
            path: "singlecharacter",
            loader: NartuoLoader,
            element: <NarutoPage type="singlecharacter" />,
          },
          {
            path: "multiplecharacter",
            loader: NartuoLoader,
            element: <NarutoPage type="multiplecharacter" />,
          },
        ],
      },
    ],
  },
]);
