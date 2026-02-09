import { render, screen, waitFor } from "@testing-library/react";
import { CharacterDetailGuard } from "@/components/CharacterDetailGuard/CharacterDetailGuard";
import { UserProvider } from "@/context/UserContext";
import type { Character } from "@/lib/schemas";

const restrictedCharacter: Character = {
  slug: "elrond",
  name: "Elrond",
  race: "Meio-elfo",
  shortDescription: "Senhor de Valfenda.",
  content: "Conteudo.",
  restricted: true,
};

const publicCharacter: Character = {
  slug: "frodo",
  name: "Frodo",
  race: "Hobbit",
  shortDescription: "Portador do anel.",
  content: "Conteudo.",
  restricted: false,
};

function renderWithProviders(character: Character) {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <UserProvider>{children}</UserProvider>
  );
  return render(
    <CharacterDetailGuard character={character}>
      <div data-testid="children">Conteudo do personagem</div>
    </CharacterDetailGuard>,
    { wrapper }
  );
}

describe("CharacterDetailGuard", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
  });

  it("mostra login block quando personagem restrito e usuario nao logado", () => {
    renderWithProviders(restrictedCharacter);
    expect(screen.getByText("Conteúdo exclusivo")).toBeInTheDocument();
    expect(screen.getByText(/Faça login para ver este personagem/)).toBeInTheDocument();
    expect(screen.queryByTestId("children")).not.toBeInTheDocument();
  });

  it("mostra children quando personagem nao restrito", () => {
    renderWithProviders(publicCharacter);
    expect(screen.getByTestId("children")).toBeInTheDocument();
    expect(screen.getByText("Conteudo do personagem")).toBeInTheDocument();
  });

  it("mostra children quando personagem restrito mas usuario logado", async () => {
    const loggedUser = {
      id: "u1",
      name: "Samir",
      email: "samir@test.com",
    };
    sessionStorage.setItem("user-session", JSON.stringify(loggedUser));
    renderWithProviders(restrictedCharacter);
    await waitFor(() => {
      expect(screen.getByTestId("children")).toBeInTheDocument();
    });
  });
});
