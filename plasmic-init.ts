import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import FilteredCards from './components/FilteredCards.js';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "q6JnS7oo9C2AuH3szGocK2",
      token: "rNi6xeGD9sgYpFnbc0c3gNZIogIRV3a4SffbbRQ6SzgLe9zkRcaIvkcuonV3wBf2TTXhtM00h6rfHZ3hg",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

PLASMIC.registerComponent(FilteredCards, {
  name: "FilteredCards",
  props: {
    cards: {
      type: "array", // Définit le type de données
      defaultValue: [],
      description: "Données des cartes pour affichage",
    },
  },
});
