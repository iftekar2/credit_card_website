import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Header className="App-header">
        <ComingSoon>coming soon</ComingSoon>
        <Logo>Lumen</Logo>
        <Nav>
          <Cards>cards</Cards>
          <WaitList>Join Waitlist</WaitList>
        </Nav>
      </Header>
      <Section>
        <Title>
          Lumen helps you find the <br />
          <span>right credit card</span> for your life
        </Title>

        <Description>
          Whether you’re a student getting your first card, quietly building
          credit, or running a business — Lumen sorts through the noise and
          matches you with cards that actually earn their keep.
        </Description>

        <ActionItems>
          <JoinWaitListButton>Join the Waitlist</JoinWaitListButton>
          <SeeCards>See the Cards</SeeCards>
        </ActionItems>
      </Section>
      <Main></Main>
    </div>
  );
}

export default App;

const Header = styled.header`
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.5rem;

  @media (min-width: 768px) {
    .my-container {
      padding-left: 3rem; /* 48px */
      padding-right: 3rem; /* 48px */
    }
  }
`;

const ComingSoon = styled.span`
  font-size: 0.75rem;
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--muted-foreground);
`;

const Logo = styled.a`
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  font-size: 1.5rem;
  font-weight: 570;
  line-height: 2rem;
  font-style: italic;
  letter-spacing: -0.025em;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  font-family:
    Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.75rem;
  line-height: 1rem;
  text-transform: uppercase;
`;

const Cards = styled.a``;

const WaitList = styled.a``;

const Main = styled.main`
  position: relative;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 6rem;
  max-width: 80rem;

  @media (min-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const Section = styled.section`
  position: relative;
  z-index: 10;
  max-width: 60rem;
  text-align: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding-top: 8rem;
  }
`;

const Title = styled.h1`
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
  font-weight: 400;
  font-size: 3rem;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: #111111;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }

  span {
    display: inline-block;
    white-space: nowrap;

    font-style: italic;
    font-weight: 400;

    background: linear-gradient(
      180deg,
      transparent 18%,
      var(--color-highlight, #e2ff44) 18%,
      var(--color-highlight, #e2ff44) 88%,
      transparent 88%
    );

    padding: 0 0.1em;
  }
`;

const Description = styled.p`
  margin: 2rem auto 0 auto;
  max-width: 36rem;
  font-size: 1rem;
  line-height: 1.625;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

const ActionItems = styled.div`
  display: flex;
  margin-top: 2.5rem;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const JoinWaitListButton = styled.a`
  display: inline-flex;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  gap: 0.5rem;
  align-items: center;
  border-radius: 9999px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  transition-property:
    background-color, border-color, color, fill, stroke, opacity, box-shadow,
    transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  background-color: black;
  color: white;
`;

const SeeCards = styled.a`
  display: inline-flex;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  gap: 0.5rem;
  align-items: center;
  border-radius: 9999px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  transition-property:
    background-color, border-color, color, fill, stroke, opacity, box-shadow,
    transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  background-color: white;
  color: black;
  border: 1px solid #bebebe;
`;
