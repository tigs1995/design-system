import React from "react";
import { render, screen } from "@testing-library/react";
import Description from "../Description";

describe("Test description component", () => {
    it("should display the description passed in", () => {
      render(<Description description="Test description"/>);
      
      expect(screen.getByText('Test description')).toBeInTheDocument();
    });
});