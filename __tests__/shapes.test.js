const { Shape, Circle, Square, Triangle } = require("../lib/shapes.js");

describe("shapes", () => {
  // arrange
  shapeClass = new Shape();
  // act
  // assert
  it("have a text property", () => {
    expect(shapeClass).toHaveProperty("text");
  });
  it("have a textColor property", () => {
    expect(shapeClass).toHaveProperty("textColor");
  });
  it("have a background color property", () => {
    expect(shapeClass).toHaveProperty("shapeColor");
  });
});

describe("circle", () => {
  // arrange
  const circleClass = new Circle();
  // act
  // assert
  it("should be an instance of the Shape class", () => {
    expect(circleClass).toBeInstanceOf(Shape);
  });
  it("should have a render method", () => {
    expect(circleClass).toHaveProperty("render");
  });
  it("should have a render method that returns a circle svg file", () => {
    expect(circleClass.render()).toEqual(
      `
    <svg width="300" height="200">
    <circle cx="50%" cy="50%" r="50" fill="${this.shapeColor}" />
    <text font-family="serif" font-size="32px" text-anchor="middle" x=50% y=55% fill="${this.textColor}">${this.text}</text>
  </svg>`
    );
  });
});

describe("square", () => {
  // arrange
  const squareClass = new Square();
  // act
  // assert
  it("should be an instance of the Shape class", () => {
    expect(squareClass).toBeInstanceOf(Shape);
  });
  it("should have a render method", () => {
    expect(squareClass).toHaveProperty("render");
  });
  it("should have a render method that returns a square svg file", () => {
    expect(squareClass.render()).toEqual(
      `
      <svg width="300" height="200">
          <rect width="100" height="100" fill="${this.color}"/>
      </svg>`
    );
  });
});

describe("triangle", () => {
  // arrange
  const triangleClass = new Triangle();
  // act
  // assert
  it("should be an instance of the Shape class", () => {
    expect(triangleClass).toBeInstanceOf(Shape);
  });
  it("should have a render method", () => {
    expect(triangleClass).toHaveProperty("render");
  });
  it("should have a render method that returns a triangle svg file", () => {
    expect(triangleClass.render()).toEqual(
      `
      <svg width="300" height="200">
        <polygon points="50,0 0,100 100,100" fill="${this.color}"/>
      </svg>`
    );
  });
});
