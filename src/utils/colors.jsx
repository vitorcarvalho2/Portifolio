import { link } from "motion/react-client";

export const Colors = {
  backgroundColor: "rgb(31, 11, 30)",
  secondaryColor: "rgb(62, 18, 60)",
  thirdColor: "rgb(156, 58, 153)",
  lightColor: "rgb(123, 38, 119)",
  hoverColor: "rgba(31, 11, 30, 0.2)",
  textColor: "rgb(255, 255, 255)",
  transparent: "rgba(0, 0, 0, 0)",
};

export const Gradients = {
  backgroundGradient: `linear-gradient(to bottom, ${Colors.backgroundColor} 0%, ${Colors.secondaryColor} 50%, ${Colors.thirdColor} 100%)`,
  reversebackgroundGradient: `linear-gradient(to bottom, ${Colors.secondaryColor} 0%, ${Colors.backgroundColor} 100%)`,
  itemGradient: `radial-gradient(ellipse, ${Colors.thirdColor} 0%, ${Colors.secondaryColor} 50%, ${Colors.backgroundColor} 100%)`,
  linkGradient: `radial-gradient(ellipse, ${Colors.secondaryColor} 0%, ${Colors.backgroundColor} 80%)`,
};
