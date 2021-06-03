import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#ced8ef",
  primaryBright: "#ced8ef",
  primaryDark: "#ced8ef",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#0d1f38",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#3e3718",
  background: "#10242b",
  backgroundDisabled: "#333a3e",
  contrast: "#bdcae4",
  invertedContrast: "#133054d9",
  input: "#133054d9",
  primaryDark: "##0d0e0e",
  tertiary: "#0f2121",
  text: "#f1d7a3",
  textDisabled: "#666171",
  textSubtle: "#ced8ef",
  borderColor: "#524B63",
  card: "#164688d4",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};

