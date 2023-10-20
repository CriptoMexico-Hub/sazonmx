// const contratc = "dev-1697764823856-92090162270530";
const contract = "sazonmx.near";
const cssFont = fetch(
  "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800"
).body;

const Main = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 352px minmax(0, 1fr);
  align-items: start;

  @media (max-width: 1200px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;
const footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const LogoImage = styled.img`
 
  margin-right: 12px;
  margin-top: 1px; 
`;

const LogoImage2 = styled.img`
 width: 200px; 
  margin-right: 12px;
  margin-top: 1px; 
`;
const SidebarWrapper = styled.div`
  position: relative;
  z-index: 5;
  margin-top: -55px;

  @media (max-width: 900px) {
    margin-top: -40px;
  }
`;

const Content = styled.div`
  .post {
    padding-left: 0;
    padding-right: 0;
  }
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: ${(p) => p.size || "25px"};
  line-height: 1.2em;
  color: #11181c;
  margin: ${(p) => (p.margin ? "0 0 24px" : "0")};
  overflow-wrap: anywhere;
`;
const center = styled.p`
display: flex;
  align-items: center;
  justify-content: center;

`;

const Tabs = styled.div`
  display: flex;
  height: 48px;
  border-bottom: 1px solid #eceef0;
  margin-bottom: 72px;
  overflow: auto;
  scroll-behavior: smooth;

  @media (max-width: 1200px) {
    background: #f8f9fa;
    border-top: 1px solid #eceef0;
    margin: 0 -12px 48px;

    > * {
      flex: 1;
    }
  }
`;

const TabsButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-weight: 600;
  font-size: 22px;
  padding: 0 12px;
  position: relative;
  color: ${(p) => (p.selected ? "#11181C" : "#ffffff")};
  background: none;
  border: none;
  outline: none;
  text-align: center;
  text-decoration: none !important;

  &:hover {
    color: #5EBDD4;
  }

  &::after {
    content: "";
    display: ${(p) => (p.selected ? "block" : "none")};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: #59e692;
  }
`;

if (!cssFont) return "";

if (!state.theme) {
  State.update({
    theme: styled.div`
    font-family: Manrope, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    ${css}
`,
  });
}
const Theme = state.theme;

// OUTPUT UI

const getSender = () => {
  return !state.sender
    ? ""
    : state.sender.substring(0, 6) +
        "..." +
        state.sender.substring(state.sender.length - 4, state.sender.length);
};
return (
  <Theme>
    <div
      className="container-fluid py-4"
      style={{ backgroundColor: "#9972ad" }}
    >
      <Tabs>
        <LogoImage
          src="https://pbs.twimg.com/profile_images/1714387582786654208/7lKexrWK_400x400.jpg"
          alt="Company Logo"
        />
        <TabsButton
          href={`sazonmx.near/widget/subirreceta`}
          selected={state.selectedTab === "home"}
        >
          Inicio
        </TabsButton>

        <TabsButton href={`#`} selected={state.selectedTab === "how"}>
          ¿Quienes somos?
        </TabsButton>

        <TabsButton href={`#`} selected={state.selectedTab === "tokens"}>
          Desayuno
        </TabsButton>
        <TabsButton
          href={`sazonmx.near/widget/galeriaconimagen`}
          selected={state.selectedTab === "tokens"}
        >
          Comidas
        </TabsButton>

        <TabsButton href={`#`} selected={state.selectedTab === "tokens"}>
          Cenas
        </TabsButton>

        <TabsButton href={`#`} selected={state.selectedTab === "tokens"}>
          Repostería
        </TabsButton>

        <TabsButton href={`#`} selected={state.selectedTab === "benefits"}>
          Sube tu receta
        </TabsButton>

        <TabsButton href={`#`} selected={state.selectedTab === "Supporters"}>
          Suscripción
        </TabsButton>
      </Tabs>
      <TabsButton>
        {!!state.sender ? (
          <button
            className=""
            onClick={() => submitEthers(state.strEther, state.sender)}
          >
            <span></span>
          </button>
        ) : (
          <Web3Connect className="" connectLabel="Connect Wallet" />
        )}
      </TabsButton>
      <div className="container-fluid py-4">
        <div class="center">
          <h1>Cochinita Pibil </h1>
        </div>

        <img
          src="https://i.pinimg.com/originals/35/ac/cd/35accd4a4a48add5941923f36cca6168.jpg"
          alt="Imagen de fondo"
          style={{ width: "80%" }}
        />
      </div>
      <h3>Ingredientes y procedimiento</h3>
      <ul>
        <li>75 Gramos de achiote</li>
        <li>1/4 De taza de manteca de cerdo fundida</li>
        <li>1 Kilogramo de cabeza de lomo de cerdo</li>
        <li>1/4 De taza de jugo de naranja agria</li>
      </ul>
      <ol>
        <li>
          Licúa el achiote con ¾ taza de jugo de naranja, la pimienta, la
          canela, el agua, el comino, los clavos de olor, la sal y la manteca de
          cerdo; vierte sobre la carne de cerdo, cubre con plástico adherente y
          marina en refrigeración por 3 horas.
        </li>
        <li>
          Forra un refractario con las hojas de plátano, coloca la carne con la
          marinada, cubre con más hojas de plátano y papel aluminio. Hornea a
          180 °C de 2 a 2 ½ horas; retira del horno. Deshebra la carne, colócala
          en una sartén con el líquido de cocción y cocina hasta que espese.
        </li>
        <li>
          Para las cebollitas encurtidas, mezcla los chiles habaneros, la
          cebolla morada, el jugo de naranja restante, la sal y el orégano.
          Forma los tacos con las tortillas, la cochinita y las cebollas
          encurtidas. Ofrece.
        </li>
      </ol>
    </div>
  </Theme>
);
