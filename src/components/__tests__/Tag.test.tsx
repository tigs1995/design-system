import React from "react";
import { render, screen } from "@testing-library/react";
import Tag from "../Tag";

describe("Test Tag component", () => {
    it("should display text passed in", () => {
      render(<Tag text="OFF TRACK" textColour="#15693B" backgroundColour="#DDF9EA"/>);
      
      expect(screen.getByText('OFF TRACK')).toBeInTheDocument(); 
    });
});
