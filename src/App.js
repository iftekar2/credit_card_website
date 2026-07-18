import styled from "styled-components";
import studentIcon from "./image/icons8-student-50.png";
import growthIcon from "./image/icons8-escalator-up-50.png";
import businessIcon from "./image/icons8-small-business-50.png";
import checkIcon from "./image/icons8-correct-50.png";
import nextPageArrow from "./image/icons8-up-right-50.png";
import starIcon from "./image/icons8-star-30.png";
import React, { useState } from "react";
import { supabase } from "./supabaseClient";
import {
  MAX_WAITLIST_EMAIL_LENGTH,
  validateWaitlistEmail,
} from "./waitlistValidation";

function App() {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [submissionState, setSubmissionState] = useState("idle");
  const [userPosition, setUserPosition] = useState(null);

  const fetchCurrentPosition = async () => {
    const { count, error } = await supabase
      .from("waitlist")
      .select("id", { count: "exact" });

    if (error) {
      throw error;
    }

    return count;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validateWaitlistEmail(email);

    setStatusMessage("");
    setSubmissionState("idle");

    if (!validation.isValid) {
      setSubmissionState("error");
      setStatusMessage(validation.message);
      return;
    }

    const normalizedEmail = validation.normalizedValue;

    if (!supabase) {
      setSubmissionState("error");
      setStatusMessage(
        "Looks like something went wrong. Please try again later.",
      );
      return;
    }

    try {
      const { data: existingUsers, error: selectError } = await supabase
        .from("waitlist")
        .select("email")
        .ilike("email", normalizedEmail)
        .limit(1);

      if (selectError) {
        throw selectError;
      }

      if (existingUsers && existingUsers.length > 0) {
        const position = await fetchCurrentPosition();
        setUserPosition(position);
        setSubmissionState("success");
        setStatusMessage("You’re already on the waitlist!");
        setEmail("");
        return;
      }

      const { error: insertError } = await supabase
        .from("waitlist")
        .insert([{ email: normalizedEmail }]);

      if (insertError) {
        throw insertError;
      }

      const position = await fetchCurrentPosition();
      setUserPosition(position);
      setSubmissionState("success");
      setStatusMessage("You’re on the waitlist!");
      setEmail("");
    } catch (error) {
      if (error?.code === "23505") {
        try {
          const position = await fetchCurrentPosition();
          setUserPosition(position);
        } catch (positionError) {
          console.error("Error fetching waitlist position:", positionError);
        }

        setSubmissionState("success");
        setStatusMessage("You’re already on the waitlist!");
        setEmail("");
        return;
      }

      console.error("Error saving email:", error);
      setSubmissionState("error");
      setStatusMessage("Something went wrong. Please try again.");
    }
  };

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
          <PrimaryButton href="#waitlist">Join the Waitlist</PrimaryButton>
          <SecondaryButton href="#cards">See the Cards</SecondaryButton>
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
          {/* <CategoryTag id="cards">The Swiply Collection</CategoryTag> */}
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

      {submissionState === "success" ? (
        <FormSubmittedSection>
          <FormSubmittedComponent>
            <CheckMark>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check-icon lucide-check"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </CheckMark>

            {/* <HeaderBadge>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
              You're in
            </HeaderBadge> */}

            <WelcomeMessage>
              Welcome to <span>Swiply</span>
            </WelcomeMessage>

            <WelcomeMessageDetails>
              We saved your spot. You are on top of the list to get access to
              the <span>Swiply</span> as soon as it comes out.
            </WelcomeMessageDetails>

            <StatsGridContainer>
              <StatCard>
                <StatLabel>Position</StatLabel>
                <StatValue>
                  #{userPosition != null ? userPosition : "Loading..."}
                </StatValue>
              </StatCard>

              <StatCard>
                <StatLabel>Perk Tier</StatLabel>
                <StatValue>Founding</StatValue>
              </StatCard>

              <StatCard>
                <StatLabel>Launch</StatLabel>
                <StatValue>Spring '26</StatValue>
              </StatCard>
            </StatsGridContainer>
          </FormSubmittedComponent>
        </FormSubmittedSection>
      ) : (
        <SignupSection id="waitlist">
          <SignupComponent>
            <SignupHeader>
              <TagContainer>
                <TagTitle>NO. 0042 · Swiply CARD MATCHER</TagTitle>
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

              <EarlyAccessBadge>
                <SmallLabel>Early access</SmallLabel>
                <SubtitleText>Founding member</SubtitleText>

                <StarContainer>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i}>
                      <img src={starIcon} alt="Star" />
                    </Star>
                  ))}
                </StarContainer>

                <SmallLabel style={{ marginTop: "4px" }}>
                  No annual fee · Est. 2026
                </SmallLabel>
              </EarlyAccessBadge>
            </SignupHeader>

            <SignupBody>
              <SectionSeparator>✦</SectionSeparator>
              <SignupBodyTitle>
                Join our <em>waitlist</em>
              </SignupBodyTitle>
              <SignupBodyDescription>
                Get early access to the credit card matcher built for students,
                credit builders, and business owners. First 500 members get a
                founding perk.
              </SignupBodyDescription>
            </SignupBody>

            <FormContainer onSubmit={handleSubmit}>
              <FormLabel htmlFor="waitlist-email">Email address</FormLabel>
              <InputWrapper>
                <StyledInput
                  id="waitlist-email"
                  type="email"
                  required
                  maxLength={MAX_WAITLIST_EMAIL_LENGTH}
                  autoCapitalize="none"
                  autoComplete="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <SubmitButton type="submit">
                  Get early access
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </SubmitButton>
              </InputWrapper>

              {statusMessage && submissionState === "error" && (
                <StatusMessage role="alert">{statusMessage}</StatusMessage>
              )}

              <SignupFormFooterContainer>
                <FooterBadge>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  No spam
                </FooterBadge>
                <span>·</span>
                <FooterBadge>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Unsubscribe anytime
                </FooterBadge>
                <span>·</span>
                <span>2,400+ on the list</span>
              </SignupFormFooterContainer>
            </FormContainer>
          </SignupComponent>
        </SignupSection>
      )}

      <FooterSection>
        <FooterTitleContainer>
          <FooterTitle>© 2026 all rights reserved.</FooterTitle>
        </FooterTitleContainer>
      </FooterSection>
    </Main>
  );
}

export default App;

const Main = styled.main`
  position: relative;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
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
      padding-left: 3rem;
      padding-right: 3rem;
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
  text-decoration: none;
  cursor: pointer;
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
  text-decoration: none;
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 1rem;
  padding: 0 1rem;
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

// const CategoryTag = styled.div`
//   display: inline-flex;
//   padding: 0.25rem 0.75rem;
//   margin-bottom: 1rem;
//   gap: 0.5rem;
//   align-items: center;
//   justify-content: center;
//   border-radius: 9999px;
//   font-family:
//     Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   background-color: white;
//   font-size: 10px;
//   border: 1px solid #d7d0c7;
//   color: #5b534f;
//   height: 15px;
// `;

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
    width: 100%;
    max-width: 300px;
    height: auto;
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
  margin-top: 4rem;
  margin-bottom: 4rem;
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
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

const SignupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TagContainer = styled.div`
  font-family:
    Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #71717a;
`;

const TagTitle = styled.div`
  font-weight: 500;
`;

const BarcodeContainer = styled.div`
  display: flex;
  gap: 2px;
  margin-top: 4px;

  span {
    display: block;
    height: 16px;
    width: 2px;
    background-color: #09090b;
  }
`;

const EarlyAccessBadge = styled.div`
  display: none;
  text-align: right;

  @media (min-width: 768px) {
    display: block;
  }
`;

const SmallLabel = styled.div`
  font-family:
    Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #71717a;
`;

const SubtitleText = styled.div`
  margin-top: 4px;
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
  font-size: 1.125rem;
  font-style: italic;
  color: #09090b;
`;

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
  margin-top: 4px;
  color: #dfab00;

  svg {
    width: 12px;
    height: 12px;
    fill: currentColor;
  }
`;

const Star = styled.div`
  img {
    height: 18px;
    width: 18px;
  }
`;

const SignupBody = styled.div`
  margin-top: 4rem;
  max-width: 36rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const SectionSeparator = styled.div`
  font-size: 50px;
  margin-bottom: 20px;
`;

const SignupBodyTitle = styled.h2`
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
  font-weight: 400;
  line-height: 1.25;
  color: #09090b;
  margin: 0;
  font-size: 3rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  em {
    font-style: italic;
    font-family: Georgia, Cambria, "Times New Roman", Times, serif;
    font-weight: 400;
  }
`;

const SignupBodyDescription = styled.p`
  margin-top: 5px;
  max-width: 28rem;
  font-size: 0.875rem;
  font-wight: 400;
  line-height: 1.25rem;
  line-height: 1.625;
  color: #5a5a5a;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.5rem;
    color: #5a5a5a;
    font-wight: 700;
  }
`;

const FormContainer = styled.form`
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.5rem;
  max-width: 28rem;
  width: 100%;
`;

const FormLabel = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 0.5rem;
  font-family:
    Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #71717a;
`;

const InputWrapper = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 9999px;
  border: 1px solid #e4e4e7;
  background-color: #ffffff;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 2px 4px -1px rgba(0, 0, 0, 0.03);
  transition: all 0.2s ease-in-out;

  &:focus-within {
    border-color: #09090b;
    box-shadow: 0 0 0 2px rgba(9, 9, 11, 0.15);
  }
`;

const StyledInput = styled.input`
  flex: 1;
  background-color: transparent;
  padding: 0.75rem 1.25rem;
  font-size: 0.875rem;
  border: none;
  outline: none;
  color: #09090b;

  &::placeholder {
    color: #a1a1aa;
  }
`;

const SubmitButton = styled.button`
  inline-flex: true;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  background-color: #09090b;
  padding: 0.75rem 1.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

const SignupFormFooterContainer = styled.div`
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-family:
    Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #71717a;

  span {
    font-size: 12px;
  }
`;

const FooterBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 12px;

  svg {
    width: 12px;
    height: 12px;
    color: #10b981;
  }
`;

const StatusMessage = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #b91c1c;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
`;

const FooterSection = styled.div`
  padding: 2rem 1.5rem;
  border-top: 1px solid #d7d0c7;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const FooterTitleContainer = styled.div``;

const FooterTitle = styled.p`
  font-family:
    Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 14px;
  color: black;
  margin: 0;
`;

const FormSubmittedSection = styled.div`
  display: flex;
  position: relative;
  z-index: 10;
  padding-top: 4rem;
  padding-bottom: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  box-sizing: border-box;
`;

const FormSubmittedComponent = styled.div`
  overflow: hidden;
  border-radius: 1.5rem;
  border: 1px solid #d7d0c7;
  padding: 3rem 1.5rem;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 38rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 4rem 3rem;
  }
`;

const CheckMark = styled.div`
  height: 80px;
  width: 80px;
  background: #115631;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  svg {
    height: 40px;
    width: 40px;
    color: white;
  }
`;

// const HeaderBadge = styled.div`
//   margin-top: 1.5rem;
//   margin-bottom: 0.75rem;
//   display: inline-flex;
//   padding: 0.375rem 0.75rem;
//   gap: 0.5rem;
//   align-items: center;
//   border: 1px solid #d1cac1;
//   border-radius: 9999px;
//   font-family:
//     Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   font-size: 10px;
//   color: #09090b;

//   svg {
//     height: 16px;
//     width: 16px;
//     color: #115631;
//   }
// `;

const WelcomeMessage = styled.h1`
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #09090b;
  margin-top: 1rem;
  margin-bottom: 0;
  text-align: center;
  font-size: 2.25rem;

  span {
    font-style: italic;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const WelcomeMessageDetails = styled.p`
  margin-top: 1.25rem;
  margin-left: 0;
  margin-right: 0;
  width: 100%;
  max-width: 28rem;
  font-size: 0.875rem;
  line-height: 1.6;
  color: #4b5563;
  text-align: center;
  margin-bottom: 0;

  span {
    font-style: italic;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.625;
  }
`;

const StatsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.5rem;
  margin-top: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 28rem;
  box-sizing: border-box;
`;

const StatCard = styled.div`
  border-radius: 15px;
  border: 1px solid #d7d0c7;
  background-color: #fcfbf9;
  padding: 0.75rem 2px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StatLabel = styled.div`
  font-family:
    Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #5b534f;
  line-height: 1;
  text-align: center;
`;

const StatValue = styled.div`
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
  line-height: 1.25;
  margin-top: 6px;
  text-align: center;
  white-space: nowrap;
  font-size: clamp(12px, 3.5vw, 1.125rem);
`;
