import { characterArraySchema, type Character } from "@/lib/schemas";

const rawCharacters: Character[] = [
  {
    id: "frodo",
    name: "Frodo Bolseiro",
    race: "Hobbit",
    restricted: false,
    shortDescription: "O que carrega o anel ate Mordor. Pra mim o personagem mais transformado pela jornada.",
    content:
      "Frodo e o hobbit que herdou o anel do Bilbo e teve que ir ate as Fendas da Perdição. A responsabilidade de carregar aquilo foi gigante — muita gente discute se ele ou o Sam e o verdadeiro heroi. Ele acaba partindo pra Valinor no fim, nao aguenta mais a Terra-media depois de tudo.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/Elijah_Wood_at_the_2025_Sundance_Film_Festival.jpg",
    createdAt: "2025-01-15T10:00:00.000Z",
  },
  {
    id: "sam",
    name: 'Samwise "Sam" Gamgi',
    race: "Hobbit",
    restricted: false,
    shortDescription: "Jardineiro do Frodo. Pra muita gente o verdadeiro heroi da historia.",
    content:
      "Sam e o amigo que todo mundo queria. Lealdade tipo anjo da guarda. Ele que segura as pontas quando o Frodo nao aguenta, carrega o anel quando precisa, e no fim volta pro Condado e casa com a Rosie. Tem uns que preferem o Frodo mas a força do Sam e inabalavel.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/Sean_Astin_1.jpg",
    createdAt: "2025-02-01T08:00:00.000Z",
  },
  {
    id: "merry",
    name: 'Meriadoc "Merry" Brandebuque',
    race: "Hobbit",
    restricted: false,
    shortDescription: "Hobbit, amigo do Pippin. Fica do lado do Rei Theoden em Rohan.",
    content:
      "Merry faz dupla com o Pippin. Os dois sao mais jovens e meio atrapalhados no comeco mas amadurecem. Ele ajuda a Eowyn a derrubar o Rei Bruxo — a profecia dizia que nao seria morto por mão de homem, e ela e mulher. Coragem de sobra.",
    image:
      "https://64.media.tumblr.com/45d4b08f60ab2a02bec31fab971b9df3/tumblr_obbj0dqhCo1v8heu6o1_1280.jpg",
    createdAt: "2025-02-02T10:00:00.000Z",
  },
  {
    id: "pippin",
    name: 'Peregrin "Pippin" Tûk',
    race: "Hobbit",
    restricted: false,
    shortDescription: "O mais novo dos quatro hobbits. Meio atrapalhado mas cumpre o papel.",
    content:
      "Pippin comete uns erros (olha a palantir) mas no fim ajuda demais. Serviu ao Denethor em Gondor e viu a loucura do regente. Jovem e irreverente no inicio, amadurece na guerra. Dupla classica com o Merry.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Billy_Boyd.jpg",
    createdAt: "2025-02-02T10:00:00.000Z",
  },
  {
    id: "gandalf",
    name: "Gandalf, o Cinzento",
    race: "Mago",
    restricted: false,
    shortDescription: "O mago. Lidera a galera. Cai na ponte de Khazad-dum e volta branco.",
    content:
      "Gandalf pra mim e um dos mais fodas. Istari, veio dos Valar pra combater o Sauron. Morre lutando com o Balrog em Moria e volta como Gandalf o Branco, mais forte. Guia todo mundo na guerra. O Ian McKellen mandou bem demais no filme.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e4/Ian_McKellen_by_Gage_Skidmore.jpg",
    createdAt: "2025-01-20T14:30:00.000Z",
  },
  {
    id: "aragorn",
    name: "Aragorn",
    race: "Humano",
    restricted: false,
    shortDescription: "Passolongo. Herdeiro de Isildur, vira rei de Gondor no final.",
    content:
      "Aragorn andava disfarçado de ranger antes de assumir. Guia os hobbits, lidera os exercitos. No retorno do rei ele e coroado Elessar e casa com a Arwen. Viggo Mortensen ficou lendario no papel.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Viggo_Mortensen_2025.jpg",
    createdAt: "2025-01-25T09:00:00.000Z",
  },
  {
    id: "boromir",
    name: "Boromir",
    race: "Humano",
    restricted: false,
    shortDescription: "Guerreiro de Gondor. Quer o anel pra defender a cidade, cai em tentacao.",
    content:
      "Boromir e filho do Denethor. Quer pegar o anel e usar em Gondor — a tentacao pega ele. Se arrepende e morre defendendo o Merry e o Pippin dos orcs. Cena triste. O irmao Faramir e diferente, resiste quando encontra o Frodo.",
    image:
      "https://movies948.wordpress.com/wp-content/uploads/2016/07/wp-1467939296257.jpeg",
    createdAt: "2025-02-03T09:00:00.000Z",
  },
  {
    id: "legolas",
    name: "Legolas",
    race: "Elfo",
    restricted: false,
    shortDescription: "Elfo da Floresta Negra. Pontaria absurda, amigo do Gimli.",
    content:
      "Legolas e príncipe elfico, filho do Thranduil. Mata orc pra caramba, sentidos agucados. No comeco o Gimli nao confiava nos elfos mas viram melhores amigos — no fim os dois vao pro Oeste juntos. Orlando Bloom estourou na epoca.",
    image:
      "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/04/legolas-orlando-bloom-lord-of-the-rings-lotr-featured.jpg",
    createdAt: "2025-01-28T11:00:00.000Z",
  },
  {
    id: "gimli",
    name: "Gimli, filho de Glóin",
    race: "Anão",
    restricted: false,
    shortDescription: "Anao, desconfiava de elfo. Vira amigao do Legolas.",
    content:
      "Gimli comeca desconfiando dos elfos (rivalidade classica) mas no meio da jornada e o Legolas viram irmaos. Ele pede um fio de cabelo da Galadriel. Unico anao que vai pro Oeste no barco no final.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/16/John_Rhys-Davies_%287982317637%29.jpg",
    createdAt: "2025-02-03T11:00:00.000Z",
  },
  {
    id: "elrond",
    name: "Elrond",
    race: "Meio-elfo",
    shortDescription: "Senhor de Valfenda. Foi la que decidiram destruir o anel.",
    content:
      "Elrond recebe a sociedade em Valfenda (Imladris). O conselho dele e que define a missao. Cura o Frodo da lâmina de Morgul. Meio-elfo, sabio pra caramba. No filme o Hugo Weaving faz o papel.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/Hugo_Weaving_2011.jpg",
    createdAt: "2025-02-10T10:00:00.000Z",
    restricted: true,
  },
  {
    id: "galadriel",
    name: "Galadriel",
    race: "Elfa",
    shortDescription: "Senhora de Lorien. Poderosa, da os presentes pro grupo.",
    content:
      "Galadriel reina em Lorien. Quando o Frodo oferece o anel ela recusa — cena tensa. Ela da os presentes que salvam a missao (a luz, etc). Uma das mais poderosas da Terra-media. A Cate Blanchett no filme e perfeita.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTixFm4iJya_aQLWFb257fIYyU2f0jbVxz-3g&s",
    createdAt: "2025-02-10T10:00:00.000Z",
    restricted: true,
  },
  {
    id: "gollum",
    name: "Gollum (Sméagol)",
    race: "Criatura (ex-hobbit)",
    shortDescription: "Ex-hobbit corrompido pelo anel. Guia e trai o Frodo e o Sam.",
    content:
      "Gollum era o Sméagol, hobbit dos Campos de Lis. Achou o anel e foi corrompido. Depois que o Bilbo leva ele fica obcecado. Guia o Frodo e o Sam ate Mordor mas no final a obsessao vence e ele acaba caindo nas Fendas com o anel. Tragico.",
    image:
      "https://variety.com/wp-content/uploads/2021/12/Lord-of-the-Rings-Return-of-the-King.jpg?w=1000&h=565&crop=1",
    createdAt: "2025-02-10T10:00:00.000Z",
    restricted: true,
  },
  {
    id: "faramir",
    name: "Faramir",
    race: "Humano",
    shortDescription: "Irmao do Boromir. Capitão em Gondor, resiste ao anel.",
    content:
      "Faramir e o outro filho do Denethor. Diferente do Boromir — quando encontra o Frodo e o Sam em Ithilien nao leva o anel. Reconhece a missao e deixa eles irem. No fim casa com a Eowyn. Personagem subestimado.",
    image:
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/10/Lord-Of-The-Rings-Faramir.jpg?w=1200&h=675&fit=crop",
    createdAt: "2025-02-10T10:00:00.000Z",
    restricted: true,
  },
  {
    id: "eowyn",
    name: "Éowyn",
    race: "Humana",
    shortDescription: "Sobrinha do Theoden. Mata o Rei Bruxo com ajuda do Merry.",
    content:
      "Eowyn queria lutar em vez de ficar em casa. Se disfarça e vai pros Campos de Pelennor. A profecia dizia que o Rei Bruxo nao morreria por mão de homem — ela e mulher, e com o Merry derruba ele. Cena epica. Depois casa com o Faramir.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMGNhMGZjYzEtNGZiMy00NjUyLTgyNzYtOGVjMDk1ZDI5MjFjXkEyXkFqcGc@._V1_QL75_UX328_.jpg",
    createdAt: "2025-02-10T10:00:00.000Z",
    restricted: true,
  },
];

export const characters: Character[] =
  characterArraySchema.parse(rawCharacters);

export function getCharacterById(id: string): Character | undefined {
  console.log("get char by id", id);
  return characters.find((character) => character.id === id);
}
