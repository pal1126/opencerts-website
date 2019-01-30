import {
  reverseDnsNotation,
  generatePartialChildPaths,
  getSubDirs,
  generateIntermediateIndexTemplate,
  getDirsToMake
} from "./addNewTemplate";

const EXAMPLE_DIR = "./src/components/CertificateTemplates/tlds/com";

describe("reverseDnsNotation", () => {
  test("should work correctly", () => {
    expect(reverseDnsNotation("nus.edu.sg")).toBe("sg/edu/nus");
    expect(reverseDnsNotation("google.com")).toBe("com/google");
  });
});

describe("generatePartialChildPaths", () => {
  test("should work correctly", () => {
    expect(generatePartialChildPaths("sg/edu/nus")).toEqual([
      "",
      "sg",
      "sg/edu",
      "sg/edu/nus"
    ]);
    expect(generatePartialChildPaths("com/google")).toEqual([
      "",
      "com",
      "com/google"
    ]);
  });
});

describe("getSubDirs", () => {
  test("should return 'example' when used on example dir", () => {
    expect(getSubDirs(EXAMPLE_DIR)).toEqual(["example"]);
  });
});

describe("getDirsToMake", () => {
  test("should work", () => {
    expect(getDirsToMake("blockchain-institute.edu.dev")).toEqual([
      "dev",
      "dev/edu",
      "dev/edu/blockchain-institute"
    ]);
    expect(getDirsToMake("tech.gov.sg")).toEqual([]);
    expect(getDirsToMake("nonexistent.gov.sg")).toEqual(["sg/gov/nonexistent"]);
  });
});

describe("intermediateIndexTemplate", () => {
  test("should work", () => {
    console.log(
      generateIntermediateIndexTemplate({
        levels: "../",
        subDirs: [ 'np', 'singaporetech' ],
        currDir: "edu"
      })
    );
  });
});