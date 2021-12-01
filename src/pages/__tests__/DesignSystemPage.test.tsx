import React from "react";
import { render, screen } from "@testing-library/react";
import DesignSystemPage from "../DesignSystemPage";
import { Account, ElectoralRoll } from "../../models/reportModel";
import accountMock from "../../mocks/accountMock.json";
import electoralRollMock from "../../mocks/electoralRollMock.json";

const accountMockCopy: Account = accountMock;
const electoralRollMockCopy: ElectoralRoll = electoralRollMock;

describe("Test design system page", () => {
  it("should have the title, tag, description and impact for public information, 'off track'", () => {
    render(<DesignSystemPage courtAndInsolvencies={1} accountOffTrack={undefined} currentElectoralRoll={electoralRollMockCopy}/>);

    expect(screen.getByText('Public information')).toBeInTheDocument();
    expect(screen.getByText('Bankruptcies and individual voluntary arrangements can damage your score')).toBeInTheDocument();
    expect(screen.getByText('HIGH IMPACT')).toBeInTheDocument();
    expect(screen.getByText('OFF TRACK')).toBeInTheDocument();
    expect(screen.getAllByText('ON TRACK')).toHaveLength(2);
  });
  it("should have the title, tag, description and impact for public information, with 'on track'", () => {
    render(<DesignSystemPage courtAndInsolvencies={0} accountOffTrack={accountMockCopy} currentElectoralRoll={undefined}/>);
    
    expect(screen.getByText('ON TRACK')).toBeInTheDocument();
    expect(screen.getAllByText('OFF TRACK')).toHaveLength(2);
  });
  it("should have the title, tag, description and impact for credit utilisation, with 'off track'", () => {
    render(<DesignSystemPage courtAndInsolvencies={0} accountOffTrack={accountMockCopy} currentElectoralRoll={electoralRollMockCopy}/>);
    
    expect(screen.getByText('Credit utilisation')).toBeInTheDocument();
    expect(screen.getByText('Using more than 50% of your available credit can damage your score')).toBeInTheDocument();
    expect(screen.getAllByText('MEDIUM IMPACT')).toHaveLength(2);
    expect(screen.getByText('OFF TRACK')).toBeInTheDocument();
    expect(screen.getAllByText('ON TRACK')).toHaveLength(2);
  });
  it("should have the title, tag, description and impact for credit utilisation, with 'on track'", () => {
    render(<DesignSystemPage courtAndInsolvencies={1} accountOffTrack={undefined} currentElectoralRoll={undefined}/>);
    
    expect(screen.getByText('ON TRACK')).toBeInTheDocument();
    expect(screen.getAllByText('OFF TRACK')).toHaveLength(2);
  });
  it("should have the title, tag, description and impact for electoral roll, with 'on track'", () => {
    render(<DesignSystemPage courtAndInsolvencies={1} accountOffTrack={accountMockCopy} currentElectoralRoll={electoralRollMockCopy}/>);
    
    expect(screen.getByText('Electoral roll')).toBeInTheDocument();
    expect(screen.getByText('Being on the electoral roll can improve your score')).toBeInTheDocument();
    expect(screen.getAllByText('MEDIUM IMPACT')).toHaveLength(2);
    expect(screen.getByText('ON TRACK')).toBeInTheDocument();
    expect(screen.getAllByText('OFF TRACK')).toHaveLength(2);
  });
  it("should have the title, description and impact for electoral roll, with 'off track", () => {
    render(<DesignSystemPage courtAndInsolvencies={0} accountOffTrack={undefined} currentElectoralRoll={undefined}/>);

    expect(screen.getByText('OFF TRACK')).toBeInTheDocument();
    expect(screen.getAllByText('ON TRACK')).toHaveLength(2);
  });
});