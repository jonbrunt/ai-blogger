import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home component unit tests", () => {
  // test if the component renders
  it("renders the Home component", () => {
    const { container }: { container: Element } = render(<Home />);
    expect(container).toBeInTheDocument();
  });

  // test for h1 element with correct title
  it("has an h1 element with the text 'About'", () => {
    render(<Home />);
    const heading: HTMLHeadingElement = screen.getByText(
      "AI Blogger"
    ) as HTMLHeadingElement;

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H1");
  });
});
