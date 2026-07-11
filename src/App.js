import styled from "styled-components";
import studentIcon from "./image/icons8-student-50.png";
import growthIcon from "./image/icons8-escalator-up-50.png";
import businessIcon from "./image/icons8-small-business-50.png";
import checkIcon from "./image/icons8-correct-50.png";
import nextPageArrow from "./image/icons8-up-right-50.png";

function App() {
  return (
    <Main className="App">
      <SiteHeader className="App-header">
        <Logo>Swiply</Logo>
      </SiteHeader>

      <MainSection>
        <HeroTitle>
          Swiply helps you find the <br />
          <span>right credit card</span> for your life
        </HeroTitle>

        <HeroDescription>
          Whether you’re a student getting your first card, quietly building
          credit, or running a business — Swiply sorts through the noise and
          matches you with cards that actually earn their keep.
        </HeroDescription>

        <ButtonGroup>
          <PrimaryButton>Join the Waitlist</PrimaryButton>
          <SecondaryButton>See the Cards</SecondaryButton>
        </ButtonGroup>

        <SocialProofText>
          Building your card matcher · 2,400+ on the list
        </SocialProofText>
      </MainSection>

      <FeaturesSection>
        <BenefitCards>
          <CardForStudent>
            <CardLabel>
              <img src={studentIcon} alt="student" />
              <span>for students</span>
            </CardLabel>
            <CardText>No Annual Fee</CardText>
            <CardDescription>Earn while you build history.</CardDescription>
          </CardForStudent>

          <CardForCreditBuilder>
            <CardLabel>
              <img src={growthIcon} alt="growth" />
              <span>Building Credit</span>
            </CardLabel>
            <CardText>0% Intro APR</CardText>
            <CardDescription>
              Graduate to unsecured in 6 months.
            </CardDescription>
          </CardForCreditBuilder>

          <BusinessCard>
            <CardLabel>
              <img src={businessIcon} alt="business" />
              <span>For Business</span>
            </CardLabel>
            <CardText>Up to 5% back</CardText>
            <CardDescription>On ads, SaaS, and shipping.</CardDescription>
          </BusinessCard>
        </BenefitCards>

        <ValuePropsBanner>
          <ValueItem>
            <img src={checkIcon} alt="check" />
            No credit hit to browse
          </ValueItem>{" "}
          ·{" "}
          <ValueItem>
            <img src={checkIcon} alt="check" /> Personalized in 60s
          </ValueItem>{" "}
          ·{" "}
          <ValueItem>
            <img src={checkIcon} alt="check" /> Free forever
          </ValueItem>
        </ValuePropsBanner>
      </FeaturesSection>

      <CollectionSection>
        <SectionHeader>
          <CategoryTag>The Swiply Collection</CategoryTag>
          <SectionTitle>
            Every category, one <span>honest</span> comparison.
          </SectionTitle>
          <SectionDescription>
            Click any card to see the details that matter: annual fee, APR, cash
            back categories, and who it’s actually right for.
          </SectionDescription>
        </SectionHeader>

        <ExampleCards>
          <Card>
            <CardHeader>
              <ExampleCardLabelSection>
                <ExampleCardLabel>
                  <img src={studentIcon} alt="student" />
                  <span>for students</span>
                </ExampleCardLabel>

                <CardMoreDetails>
                  <img src={nextPageArrow} alt="Next page arrow" />
                </CardMoreDetails>
              </ExampleCardLabelSection>
              <ExampleCardTitle>
                Discover it® Student Cash Back
              </ExampleCardTitle>
              <ExampleCardDescription>
                Rotating 5% categories, built for students.
              </ExampleCardDescription>
            </CardHeader>

            <CardImage>
              <img
                src="https://www.nerdwallet.com/cdn-cgi/image/format=auto,width=338,quality=80,sharpen=1/cdn/images/marketplace/credit_cards/a4a36a73-0294-4ca1-b36b-3eef5cee53ca/a1de1f5a52d4ab48b729c2ea25588d40b1b0382c84ddac318b584f1d62aa37bd.jpg"
                alt="Discover it® Student Cash Back"
              />
            </CardImage>

            <CardQualification>
              <li>Be at least 18 years old.</li>
              <li>Be actively enrolled in a college, university.</li>
              <li>
                Have an independent source of income (part-time job, financial
                aid/scholarships)
              </li>
            </CardQualification>
          </Card>

          <Card>
            <CardHeader>
              <ExampleCardLabelSection>
                <ExampleCardLabel>
                  <img src={growthIcon} alt="student" />
                  <span>for growth</span>
                </ExampleCardLabel>

                <CardMoreDetails>
                  <img src={nextPageArrow} alt="Next page arrow" />
                </CardMoreDetails>
              </ExampleCardLabelSection>

              <ExampleCardTitle>Capital One Platinum Secured</ExampleCardTitle>
              <ExampleCardDescription>
                A refundable deposit that grows your line.
              </ExampleCardDescription>
            </CardHeader>

            <CardImage>
              <img
                src="https://ecm.capitalone.com/WCM/card/products/plat_cardart_prim_323x203.png"
                alt="Capital One Platinum Secured"
              />
            </CardImage>

            <CardQualification>
              <li>Be at least 18 years old.</li>
              <li>A valid Social Security number.</li>
              <li>A physical U.S. street address.</li>
              <li>A valid checking or savings account.</li>
            </CardQualification>
          </Card>

          <Card>
            <CardHeader>
              <ExampleCardLabelSection>
                <ExampleCardLabel>
                  <img src={businessIcon} alt="business" />
                  <span>for businesses</span>
                </ExampleCardLabel>

                <CardMoreDetails>
                  <img src={nextPageArrow} alt="Next page arrow" />
                </CardMoreDetails>
              </ExampleCardLabelSection>

              <ExampleCardTitle>Ink Business Preferred® Card</ExampleCardTitle>
              <ExampleCardDescription>
                Big welcome bonus for growing teams.
              </ExampleCardDescription>
            </CardHeader>

            <CardImage>
              <img
                src="https://sites.chase.com//content/services/rendition/image.large.png/unified-assets/digital-cards/chase-ink/41473467055.png"
                alt="Ink Business Preferred® Card"
              />
            </CardImage>

            <CardQualification>
              <li>A minimum credit score of 670 is required.</li>
              <li>
                Have not opened more than 5 credit cards in the last 24 months.
              </li>
              <li>LLCs, Corporations, Partnerships is required.</li>
            </CardQualification>
          </Card>
        </ExampleCards>
      </CollectionSection>

      <SignupSection>
        <SignupComponent>
          <TagContainer>
            <TagTitle>NO. 0042 · LUMEN CARD MATCHER</TagTitle>
            <BarcodeContainer>
              <span style={{ opacity: 1 }}></span>
              <span style={{ opacity: 0 }}></span>
              <span style={{ opacity: 1 }}></span>
              <span style={{ opacity: 1 }}></span>
              <span style={{ opacity: 0 }}></span>
              <span style={{ opacity: 1 }}></span>
              <span style={{ opacity: 1 }}></span>
              <span style={{ opacity: 1 }}></span>
              <span style={{ opacity: 0 }}></span>
              <span style={{ opacity: 0 }}></span>
              <span style={{ opacity: 1 }}></span>
              <span style={{ opacity: 0 }}></span>
              <span style={{ opacity: 1 }}></span>
              <span style={{ opacity: 1 }}></span>
              <span style={{ opacity: 0 }}></span>
              <span style={{ opacity: 1 }}></span>
              <span style={{ opacity: 1 }}></span>
              <span style={{ opacity: 0 }}></span>
              <span style={{ opacity: 1 }}></span>
              <span style={{ opacity: 0 }}></span>
              <span style={{ opacity: 1 }}></span>
              <span style={{ opacity: 1 }}></span>
              <span style={{ opacity: 0 }}></span>
              <span style={{ opacity: 1 }}></span>
              <span style={{ opacity: 1 }}></span>
              <span style={{ opacity: 1 }}></span>
              <span style={{ opacity: 0 }}></span>
              <span style={{ opacity: 0 }}></span>
              <span style={{ opacity: 1 }}></span>
              <span style={{ opacity: 0 }}></span>
            </BarcodeContainer>
          </TagContainer>
        </SignupComponent>
      </SignupSection>
    </Main>
  );
}

export default App;

const Main = styled.main`
  position: relative;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 6rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const SiteHeader = styled.header`
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

const Logo = styled.h1`
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  font-size: 1.5rem;
  font-weight: 570;
  line-height: 2rem;
  font-style: italic;
  letter-spacing: -0.025em;
  margin: 0 auto;
  width: 100%;
  text-align: center;
`;

const MainSection = styled.section`
  position: relative;
  z-index: 10;
  max-width: 60rem;
  text-align: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding-top: 1.8rem;
  }
`;

const HeroTitle = styled.h1`
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
  font-weight: 400;
  font-size: 3rem;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: #111111;
  text-wrap: pretty;
  font-size: 2.3rem;
  margin-left: 16px;
  margin-right: 16px;
  padding-top: 1.5rem;

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

const HeroDescription = styled.p`
  margin: 2rem 1rem 0 1rem;
  max-width: 36rem;
  font-size: 1rem;
  line-height: 1.625;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 2.5rem;
  flex-direction: row;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled.a`
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

const SecondaryButton = styled.a`
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

const SocialProofText = styled.p`
  margin-top: 1.5rem;
  font-family:
    Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const FeaturesSection = styled.section`
  position: relative;
  margin-top: 4rem;

  @media (min-width: 768px) {
    margin-top: 4rem;
  }
`;

const BenefitCards = styled.div`
  display: flex;
  flex-direction: row; /* Keep items in a horizontal row when space allows */
  flex-wrap: wrap; /* Allows cards to wrap to a new line when squeezed */
  justify-content: center; /* Centers wrapped items on the new line */
  align-items: stretch; /* Stretches side-by-side cards to match heights */
  gap: 1rem; /* Maintains your required 1rem spacing on all sides */
  padding: 0 1rem; /* Prevents cards from hitting the absolute edge of mobile screens */
`;

const CardForStudent = styled.div`
  padding: 1.25rem;
  border-radius: 1rem;
  border-width: 1px;
  background-color: #bdf0cd;
  width: 15rem;
`;

const CardForCreditBuilder = styled.div`
  padding: 1.25rem;
  border-radius: 1rem;
  border-width: 1px;
  background-color: #ffbd9a;
  width: 15rem;
`;

const BusinessCard = styled.div`
  padding: 1.25rem;
  border-radius: 1rem;
  border-width: 1px;
  background-color: #e0d9fd;
  width: 15rem;
`;

const CardLabel = styled.div`
  display: inline-flex;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  gap: 0.5rem;
  align-items: center;
  border-radius: 9999px;
  border-width: 1px;
  background-color: white;

  img {
    width: 24px;
    height: 24px;
  }

  span {
    font-family:
      Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-size: 10px;
  }
`;

const CardText = styled.p`
  margin-top: 0.75rem;
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
  font-size: 1.125rem;
  line-height: 1.75rem;
  line-height: 1.25;
`;

const CardDescription = styled.p`
  margin-top: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const ValuePropsBanner = styled.div`
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  font-family:
    Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  img {
    width: 16px;
    height: 16px;
  }
`;

const ValueItem = styled.span`
  display: inline-flex;
  gap: 0.375rem;
  align-items: center;
`;

const CollectionSection = styled.section`
  margin-top: 4rem;
  margin-left: 20px;
  margin-right: 20px;
  scroll-margin-top: 6rem;
  width: 1184px;
  max-width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 6rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }
`;

const SectionHeader = styled.div`
  width: 768px;
  max-width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryTag = styled.div`
  display: inline-flex;
  padding: 0.25rem 0.75rem;
  margin-bottom: 1rem;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  font-family:
    Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background-color: white;
  font-size: 10px;
  border: 1px solid #d7d0c7;
  color: #5b534f;
  height: 15px;
`;

const SectionTitle = styled.h2`
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
  line-height: 1.25;
  font-weight: 400;
  margin: 0;
  font-size: 2.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  span {
    font-style: italic;
    font-weight: 300;
    display: inline-block;
    white-space: nowrap;

    background: linear-gradient(
      180deg,
      transparent 18%,
      var(--color-highlight, #e2ff44) 18%,
      var(--color-highlight, #e2ff44) 88%,
      transparent 88%
    );

    padding: 0 0.15em;
  }
`;

const SectionDescription = styled.p`
  margin-top: 1.25rem;
  max-width: 36rem;
  margin-bottom: 1rem;
`;

const ExampleCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 1rem;
  margin-top: 2rem;
  padding: 0 1rem;
  box-sizing: border-box;
  width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

const Card = styled.article`
  overflow: hidden;
  position: relative;
  padding: 2rem;
  border-radius: 1.5rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  background-color: white;
  border: 1px solid #d7d0c7;
  width: 100%;
  max-width: 350px;
`;

const CardHeader = styled.div``;

const ExampleCardLabelSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ExampleCardLabel = styled.div`
  display: inline-flex;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  gap: 0.5rem;
  align-items: center;
  border-radius: 9999px;
  border-width: 1px;
  background-color: white;
  height: 15px;
  border: 1px solid #d7d0c7;

  img {
    width: 18px;
    height: 18px;
  }

  span {
    font-family:
      Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-size: 9px;
  }
`;

const CardMoreDetails = styled.div`
  img {
    height: 16px;
    width: 16px;
  }
`;

const ExampleCardTitle = styled.h3`
  margin-top: 0.75rem;
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
  font-size: 1.5rem;
  line-height: 2rem;
  line-height: 1.25;
  margin-bottom: 0;
  font-weight: 450;
`;

const ExampleCardDescription = styled.p`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const CardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;

  img {
    height: 200px;
    width: 300px;
  }
`;

const CardQualification = styled.ul`
  padding-top: 1rem;
  margin-top: 0.375rem;
  border-top: 1px solid #ccc;
  padding-left: 15px;
  list-style-type: disc;

  li {
    font-size: 0.8rem;
    line-height: 1rem;
  }
`;

const SignupSection = styled.section`
  margin-top: 8rem;
  scroll-margin-top: 6rem;
`;

const SignupComponent = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 1.5rem;
  border-width: 1px;
  border: 1px solid #d7d0c7;

  position: relative;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 4rem;
  padding-bottom: 4rem;

  @media (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`;
const TagContainer = styled.div`
  font-family:
    Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #71717a; /* Tailwind text-muted-foreground */
`;

const TagTitle = styled.div`
  font-weight: 500;
`;

const BarcodeContainer = styled.div`
  display: flex;
  gap: 2px; /* Tailwind gap-0.5 */
  margin-top: 4px; /* Tailwind mt-1 */

  span {
    display: block;
    height: 16px; /* Tailwind h-4 */
    width: 2px; /* Tailwind w-[2px] */
    background-color: #09090b; /* Tailwind bg-foreground */
  }
`;
