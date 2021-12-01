import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "../Title";

describe("Test title component", () => {
    it("should display the title passed in", () => {
      render(<Title title="Test title"/>);
      
      expect(screen.getByText('Test title')).toBeInTheDocument();
    });
});