import Home from "../pages/index";
import ArrowLeft from "../components/Arrows/SliderLeftArrow";
import ArrowRight from "../components/Arrows/SliderRightArrow";
import InputSearch from "../components/Header/InputSearch/HeaderInputSearch";
import Logo from "../components/Header/Logo/Logo";
import Title from "../components/Text/Title";
import ButtonFilter from "../components/Filter/FilterButton";
import FilterButtonmovie from "../components/MainTopMovie/FilterMovies";
import { ContextGlobal } from "../Context/context";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Check if all element is here", () => {
  it("Arrow Left Rendering", () => {
    render(<ArrowLeft />);
    const arrowElement = screen.getByTestId("arrowLeft");
    expect(arrowElement).toBeInTheDocument();
  });
  it("Arrow Right Rendering", () => {
    const { getByTestId } = render(<ArrowRight />);
    const arroRight = getByTestId("arrowRight");
    expect(arroRight).toBeTruthy();
  });
  it("Logo rendering", () => {
    render(<Logo />);
    const logoElement = screen.getByTestId("logo");
    expect(logoElement).toBeInTheDocument();
  });
  it("input search rendering", () => {
    render(<InputSearch />);
    const searchInput = screen.getByTestId("input-search");
    expect(searchInput).toBeInTheDocument();
  });
  it("Title rendering", () => {
    render(<Title />);
    const titleText = screen.getByTestId("title");
    expect(titleText).toBeInTheDocument();
  });
  it("All button filter rendering", () => {
    render(
      <ContextGlobal>
        <ButtonFilter />
      </ContextGlobal>
    );
    const buttonAll = screen.getByTestId("button-all");
    expect(buttonAll).toBeInTheDocument();
  });
});

describe("Check if dropdown genre is rendering", () => {
  it("see if button Genre is rendering ", () => {
    render(
      <ContextGlobal>
        <FilterButtonmovie />
      </ContextGlobal>
    );
    const buttonGenre = screen.getByText(/Genre/i);
    fireEvent.click(buttonGenre);
    expect(screen.getByTestId("genreMovie")).toBeInTheDocument();
    // fireEvent.click(buttonGenre);
    // expect(screen.getByTestId("genreMovie")).not.toBeInTheDocument();
  });
});
