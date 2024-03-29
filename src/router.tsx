import { createBrowserRouter } from "react-router-dom";
import { PokemonLoader, PokemonPage } from "./pages/Pokemon";
import { NartuoLoader, NarutoPage } from "./pages/naruto/Naruto";
import { WebTemplate } from "./pages/WebsiteTemplate";

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
        loader: PokemonLoader,
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
            element: <NarutoPage type="singlecharacter" />,
          },
        ],
      },
    ],
  },
]);
