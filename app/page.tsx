"use client";
import {
  BackgroundImage2,
  BackgroungImage1,
  FooterContainer,
  FooterLink,
  GenerateQuoteButton,
  GenerateQuoteButtonText,
  GradientBackground,
  QuoteGeneratorCon,
  QuoteGeneratorInnerCon,
  QuoteGeneratorSubTitle,
  QuoteGeneratorTitle,
} from "@/components/QuoteGenerator/QuoteGeneratorElements";

import Quote1 from "../assets/Quote3.webp";
import Quote2 from "../assets/Quote4.png";
import { useState } from "react";

export default function Home() {
  const [numberOfQuotesGenerated, setNumberOfQuotesGenerated] =
    useState<Number | null>(0);
  return (
    <GradientBackground>
      <BackgroungImage1 src={Quote1} alt="Background Image 1" height="300" />
      <BackgroundImage2 src={Quote2} alt="Background Image 2" height="200" />

      <QuoteGeneratorCon>
        <QuoteGeneratorInnerCon>
          <QuoteGeneratorTitle>Daily Inspiration Generator</QuoteGeneratorTitle>
          <QuoteGeneratorSubTitle>
            Looking for a splash of inspiration? Generate a quote card with a
            random inspirational quote provided by{" "}
            <FooterLink
              href="https://zenquotes.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ZenQuotes API
            </FooterLink>
            .
          </QuoteGeneratorSubTitle>
          <GenerateQuoteButton>
            <GenerateQuoteButtonText>Make a Quote</GenerateQuoteButtonText>
          </GenerateQuoteButton>
        </QuoteGeneratorInnerCon>
      </QuoteGeneratorCon>

      <FooterContainer>
        <>
          Quotes Generated: {numberOfQuotesGenerated}
          <br />
          Developed by{" "}
          <FooterLink
            href="https://github.com/moheet333"
            target="_blank"
            rel="noopener noreferrer"
          >
            @moheet333
          </FooterLink>
        </>
      </FooterContainer>
    </GradientBackground>
  );
}
