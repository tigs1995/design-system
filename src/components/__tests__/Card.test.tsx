import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../CardComponent";

describe("Test Card component", () => {
    it("should display correct components with correct text", () => {
      render(<Card tagTrackText="OFF TRACK" tagTextColour="#15693B" tagBackgroundColour="#DDF9EA" tagImpactText="HIGH IMPACT" descriptionText="Test description" titleText="Test title"/>);
      
      expect(screen.getByText('OFF TRACK')).toBeInTheDocument(); 
      expect(screen.getByText('Test description')).toBeInTheDocument(); 
      expect(screen.getByText('Test title')).toBeInTheDocument(); 
      expect(screen.getByText('HIGH IMPACT')).toBeInTheDocument(); 
    });
});
