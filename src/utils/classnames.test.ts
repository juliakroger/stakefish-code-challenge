import cn from "./classnames";

describe("utils/cn", () => {
  it("Should concatenate class names correctly", () => {
    const classNames = cn("class1", "class2", "class3");
    expect(classNames).toBe("class1 class2 class3");
  });

  it("Should handle undefined and null class names", () => {
    const classNames = cn("class1", undefined, "class3", null, "class5");
    expect(classNames).toBe("class1 class3 class5");
  });

  it("Should handle empty input", () => {
    const classNames = cn();
    expect(classNames).toBe("");
  });

  it("Should handle repeated class names", () => {
    const classNames = cn("class1", "class2", "class1", "class2");
    expect(classNames).toBe("class1 class2 class1 class2");
  });

  it("Should handle spaces in class names", () => {
    const classNames = cn("class 1", "class 2", "class 3");
    expect(classNames).toBe("class 1 class 2 class 3");
  });
});
