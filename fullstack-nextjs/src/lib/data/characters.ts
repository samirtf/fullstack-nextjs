import { characterArraySchema, type Character } from "@/lib/schemas";

const rawCharacters: Character[] = [
  {
    id: "frodo",
    name: "Frodo Bolseiro",
    race: "Hobbit",
    excerpt:
      "Portador do Um Anel, encarregado de levá-lo até Mordor para ser destruído.",
    content:
      "Frodo Bolseiro é um hobbit da Terra-média, sobrinho de Bilbo. Recebeu o Um Anel e partiu de Condado em uma jornada até Mordor para destruí-lo na Montanha da Perdição. Apesar da carga terrível do Anel, manteve a coragem e a lealdade aos companheiros da Sociedade do Anel.",
    image: "https://placehold.co/600x400?text=Frodo+Bolseiro",
    createdAt: "2025-01-15T10:00:00.000Z",
  },
  {
    id: "gandalf",
    name: "Gandalf",
    race: "Mago",
    excerpt: "Um dos cinco Istari enviados à Terra-média para combater Sauron.",
    content:
      "Gandalf, o Cinzento, é um dos Magos (Istari) enviados pelos Valar à Terra-média. Lidera a Sociedade do Anel e enfrenta o Balrog nas minas de Moria, retornando como Gandalf, o Branco. Guia os povos livres na Guerra do Anel.",
    image: "https://placehold.co/600x400?text=Gandalf",
    createdAt: "2025-01-20T14:30:00.000Z",
  },
  {
    id: "aragorn",
    name: "Aragorn",
    race: "Humano",
    excerpt: "Herdeiro de Isildur, Rei de Gondor e líder dos Dúnedain.",
    content:
      "Aragorn, também conhecido como Passolongo, é o herdeiro da linhagem de Isildur e rei de Gondor. Guia os hobbits e, após a Guerra do Anel, é coroado Rei Elessar. Casou-se com Arwen Undómiel.",
    image: "https://placehold.co/600x400?text=Aragorn",
    createdAt: "2025-01-25T09:00:00.000Z",
  },
  {
    id: "legolas",
    name: "Legolas",
    race: "Elfo",
    excerpt: "Príncipe élfico de Floresta Negra e membro da Sociedade do Anel.",
    content:
      "Legolas é um elfo de Floresta Negra, filho do rei Thranduil. Junta-se à Sociedade do Anel e destaca-se pela pontaria e pelos sentidos aguçados. Após a queda de Sauron, parte para o Oeste com Gimli.",
    image: "https://placehold.co/600x400?text=Legolas",
    createdAt: "2025-01-28T11:00:00.000Z",
  },
  {
    id: "sam",
    name: "Samwise Gamgi",
    race: "Hobbit",
    excerpt: "Jardineiro e fiel companheiro de Frodo na jornada até Mordor.",
    content:
      "Samwise Gamgi, ou Sam, é o jardineiro de Frodo e seu companheiro mais leal. Acompanha Frodo até o Monte da Perdição e, quando Frodo é capturado, assume temporariamente o Anel. É considerado o verdadeiro herói da missão.",
    image: "https://placehold.co/600x400?text=Samwise+Gamgi",
    createdAt: "2025-02-01T08:00:00.000Z",
  },
];

export const characters: Character[] =
  characterArraySchema.parse(rawCharacters);

export function getCharacterById(id: string): Character | undefined {
  return characters.find((character) => character.id === id);
}
