import { Pokemon } from "./bases/Pokemon";
import "./style.css";
import typescriptLogo from "./typescript.svg";

const picachu = new Pokemon(1, "Pikachu", 12.2, 25.1);
const mew = new Pokemon(1, "Mew", 20.80, 20.1);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript - Nest - App</h1>
    <div class="card">
      <h3>${picachu.name}</h3>
      <p><b>attack:</b> ${picachu.attack}</p>
      <p><b>defense:</b> ${picachu.defense}</p>
    </div>
    <hr/>
    <div class="card">
      <h3>${mew.name}</h3>
      <p><b>attack:</b> ${mew.attack}</p>
      <p><b>defense:</b> ${mew.defense}</p>
    </div>
    <p class="read-the-docs">
    </p>
  </div>
`;
