import { characterArraySchema, type Character } from "@/lib/schemas";

/**
 * Os nove membros da Sociedade do Anel, formada no Conselho de Elrond
 * para destruir o Um Anel, representando os Povos Livres da Terra-média.
 */
const rawCharacters: Character[] = [
  {
    id: "frodo",
    name: "Frodo Bolseiro",
    race: "Hobbit",
    restricted: false,
    excerpt:
      "Portador do Um Anel. Encargado de levá-lo até Mordor para ser destruído nas Fendas da Perdição.",
    content:
      "Frodo Bolseiro é um hobbit da Terra-média, sobrinho de Bilbo. Recebeu o Um Anel e partiu do Condado em uma jornada até Mordor para destruí-lo na Montanha da Perdição. Apesar da carga terrível do Anel, manteve a coragem e a lealdade aos companheiros da Sociedade do Anel.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/Elijah_Wood_at_the_2025_Sundance_Film_Festival.jpg",
    createdAt: "2025-01-15T10:00:00.000Z",
  },
  {
    id: "sam",
    name: 'Samwise "Sam" Gamgi',
    race: "Hobbit",
    restricted: false,
    excerpt: "Jardineiro e fiel companheiro de Frodo na jornada até Mordor.",
    content:
      "Samwise Gamgi, ou Sam, é o jardineiro de Frodo e seu companheiro mais leal. Acompanha Frodo até o Monte da Perdição e, quando Frodo é capturado, assume temporariamente o Anel. É considerado o verdadeiro herói da missão.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/Sean_Astin_1.jpg",
    createdAt: "2025-02-01T08:00:00.000Z",
  },
  {
    id: "merry",
    name: 'Meriadoc "Merry" Brandebuque',
    race: "Hobbit",
    restricted: false,
    excerpt:
      "Hobbit do Condado, membro da Sociedade do Anel. Amigo de Pippin e dos demais.",
    content:
      "Meriadoc Brandebuque, conhecido como Merry, é um hobbit que se junta à Sociedade do Anel. Junto com Pippin, parte na missão de escoltar Frodo. Destaca-se pela lealdade e pela coragem nos eventos da Guerra do Anel.",
    image:
      "https://64.media.tumblr.com/45d4b08f60ab2a02bec31fab971b9df3/tumblr_obbj0dqhCo1v8heu6o1_1280.jpg",
    createdAt: "2025-02-02T10:00:00.000Z",
  },
  {
    id: "pippin",
    name: 'Peregrin "Pippin" Tûk',
    race: "Hobbit",
    restricted: false,
    excerpt:
      "Hobbit do Condado, o mais jovem dos quatro companheiros da Sociedade.",
    content:
      "Peregrin Tûk, ou Pippin, é um hobbit que integra a Sociedade do Anel ao lado de Merry, Sam e Frodo. Apesar da juventude e da irreverência, amadurece ao longo da jornada e cumpre um papel decisivo no desfecho da guerra.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Billy_Boyd.jpg",
    createdAt: "2025-02-02T10:00:00.000Z",
  },
  {
    id: "gandalf",
    name: "Gandalf, o Cinzento",
    race: "Mago",
    restricted: false,
    excerpt:
      "Um dos cinco Istari enviados à Terra-média para combater Sauron. Lidera a Sociedade.",
    content:
      "Gandalf, o Cinzento, é um dos Magos (Istari) enviados pelos Valar à Terra-média. Lidera a Sociedade do Anel e enfrenta o Balrog nas minas de Moria, retornando como Gandalf, o Branco. Guia os povos livres na Guerra do Anel.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e4/Ian_McKellen_by_Gage_Skidmore.jpg",
    createdAt: "2025-01-20T14:30:00.000Z",
  },
  {
    id: "aragorn",
    name: "Aragorn",
    race: "Humano",
    restricted: false,
    excerpt: "Herdeiro de Isildur, Rei de Gondor e líder dos Dúnedain.",
    content:
      "Aragorn, também conhecido como Passolongo, é o herdeiro da linhagem de Isildur e rei de Gondor. Guia os hobbits e, após a Guerra do Anel, é coroado Rei Elessar. Casou-se com Arwen Undómiel.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Viggo_Mortensen_2025.jpg",
    createdAt: "2025-01-25T09:00:00.000Z",
  },
  {
    id: "boromir",
    name: "Boromir",
    race: "Humano",
    restricted: false,
    excerpt:
      "Guerreiro de Gondor, filho do Regente Denethor. Membro da Sociedade do Anel.",
    content:
      "Boromir é um homem de Gondor, filho do Regente Denethor. Junta-se à Sociedade do Anel para defender os Povos Livres. Sua luta interna com a tentação do Anel e seu sacrifício em defesa de Merry e Pippin marcam a história da comitiva.",
    image:
      "https://movies948.wordpress.com/wp-content/uploads/2016/07/wp-1467939296257.jpeg",
    createdAt: "2025-02-03T09:00:00.000Z",
  },
  {
    id: "legolas",
    name: "Legolas",
    race: "Elfo",
    restricted: false,
    excerpt:
      "Príncipe élfico do Reino da Floresta (Floresta Negra). Membro da Sociedade do Anel.",
    content:
      "Legolas é um elfo do Reino da Floresta, filho do rei Thranduil. Junta-se à Sociedade do Anel e destaca-se pela pontaria e pelos sentidos aguçados. Após a queda de Sauron, parte para o Oeste com Gimli.",
    image:
      "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/04/legolas-orlando-bloom-lord-of-the-rings-lotr-featured.jpg",
    createdAt: "2025-01-28T11:00:00.000Z",
  },
  {
    id: "gimli",
    name: "Gimli, filho de Glóin",
    race: "Anão",
    restricted: false,
    excerpt:
      "Anão, filho de Glóin. Membro da Sociedade do Anel; grande amigo de Legolas.",
    content:
      "Gimli é um anão, filho de Glóin, que integra a Sociedade do Anel. Inicialmente desconfiado dos elfos, torna-se grande amigo de Legolas. Representa os anões entre os Povos Livres e, após a guerra, parte para o Oeste com Legolas.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/16/John_Rhys-Davies_%287982317637%29.jpg",
    createdAt: "2025-02-03T11:00:00.000Z",
  },
  {
    id: "elrond",
    name: "Elrond",
    race: "Meio-elfo",
    excerpt:
      "Senhor de Valfenda. Convocou o Conselho de Elrond e abrigou a Sociedade do Anel.",
    content:
      "Elrond é um meio-elfo, senhor de Valfenda (Imladris). Convocou o Conselho de Elrond, no qual se decidiu a destruição do Um Anel. Abrigou Frodo após a ferida da lâmina de Morgul e ofereceu refúgio à Sociedade antes da partida para o Sul.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/Hugo_Weaving_2011.jpg",
    createdAt: "2025-02-10T10:00:00.000Z",
    restricted: true,
  },
  {
    id: "galadriel",
    name: "Galadriel",
    race: "Elfa",
    excerpt:
      "Senhora de Lórien. Uma dos mais poderosos elfos da Terra-média; dá os presentes à comitiva.",
    content:
      "Galadriel é a senhora do reino élfico de Lórien. Uma dos mais poderosos elfos da Terra-média, recebe a Sociedade do Anel e oferece presentes que serão decisivos na jornada. Recusa o Anel quando Frodo lho oferece, demonstrando sabedoria e renúncia.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTixFm4iJya_aQLWFb257fIYyU2f0jbVxz-3g&s",
    createdAt: "2025-02-10T10:00:00.000Z",
    restricted: true,
  },
  {
    id: "gollum",
    name: "Gollum (Sméagol)",
    race: "Criatura (ex-hobbit)",
    excerpt:
      "Ex-portador do Um Anel. Guia Frodo e Sam até Mordor, mas a obsessão pelo Anel o leva à traição.",
    content:
      "Gollum, outrora Sméagol, era um hobbit da região dos Campos de Lis. Encontrou o Um Anel e foi por ele corrompido. Após perder o Anel para Bilbo, passa a perseguir Frodo. Guia Frodo e Sam até Mordor, mas sua dualidade e obsessão pelo Anel levam à traição nas Fendas da Perdição.",
    image:
      "https://variety.com/wp-content/uploads/2021/12/Lord-of-the-Rings-Return-of-the-King.jpg?w=1000&h=565&crop=1",
    createdAt: "2025-02-10T10:00:00.000Z",
    restricted: true,
  },
  {
    id: "faramir",
    name: "Faramir",
    race: "Humano",
    excerpt:
      "Capitão de Gondor, irmão de Boromir. Encontra Frodo e Sam em Ithilien e resiste à tentação do Anel.",
    content:
      "Faramir é o segundo filho do Regente Denethor e irmão de Boromir. Capitão de Gondor, comanda os rangers de Ithilien. Ao encontrar Frodo e Sam, reconhece a missão e resiste à tentação do Anel, diferentemente de seu irmão. Casa-se com Éowyn após a Guerra do Anel.",
    image:
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/10/Lord-Of-The-Rings-Faramir.jpg?w=1200&h=675&fit=crop",
    createdAt: "2025-02-10T10:00:00.000Z",
    restricted: true,
  },
  {
    id: "eowyn",
    name: "Éowyn",
    race: "Humana",
    excerpt:
      "Sobrinha do rei Théoden de Rohan. Derrota o Rei Bruxo de Angmar com a ajuda de Merry.",
    content:
      "Éowyn é sobrinha de Théoden, rei de Rohan. Deseja lutar na guerra em vez de permanecer nas sombras. Disfarçada, parte para a Batalha dos Campos de Pelennor e, com a ajuda de Merry, derrota o Rei Bruxo de Angmar, cumprindo a profecia de que não seria morto por mão de homem.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMGNhMGZjYzEtNGZiMy00NjUyLTgyNzYtOGVjMDk1ZDI5MjFjXkEyXkFqcGc@._V1_QL75_UX328_.jpg",
    createdAt: "2025-02-10T10:00:00.000Z",
    restricted: true,
  },
];

export const characters: Character[] =
  characterArraySchema.parse(rawCharacters);

export function getCharacterById(id: string): Character | undefined {
  return characters.find((character) => character.id === id);
}
