export const Colors1 = {
  // Roxo Profundo (Dark Purple)
  backgroundColor: "rgb(31, 11, 30)",
  secondaryColor: "rgb(62, 18, 60)",
  thirdColor: "rgb(156, 58, 153)",
  lightColor: "rgb(180, 80, 177)",
  hoverColor: "rgba(156, 58, 153, 0.3)",
  textColor: "rgb(255, 255, 255)",
  accentColor: "rgb(255, 180, 50)",
};

export const Colors2 = {
  // Roxo Neon + Verde (Cyberpunk)
  backgroundColor: "rgb(82, 31, 176)",
  secondaryColor: "rgb(140, 90, 220)",
  thirdColor: "rgb(70, 220, 120)",
  hoverColor: "rgba(140, 90, 220, 0.3)",
  textColor: "rgb(255, 255, 255)",
  accentColor: "rgb(255, 100, 150)",
};

export const Colors3 = {
  // Azul Petróleo + Coral (Elegante)
  backgroundColor: "rgb(23, 42, 58)",
  secondaryColor: "rgb(44, 83, 100)",
  thirdColor: "rgb(72, 149, 160)",
  lightColor: "rgb(168, 218, 220)",
  hoverColor: "rgba(72, 149, 160, 0.3)",
  textColor: "rgb(245, 245, 245)",
  accentColor: "rgb(230, 57, 70)",
};

export const Colors4 = {
  // Terra + Laranja (Quente e Moderna)
  backgroundColor: "rgb(40, 30, 25)",
  secondaryColor: "rgb(80, 50, 40)",
  thirdColor: "rgb(200, 100, 50)",
  lightColor: "rgb(220, 150, 100)",
  hoverColor: "rgba(200, 100, 50, 0.3)",
  footerColor: "rgb(180, 80, 40)",
  textColor: "rgb(250, 240, 230)",
  accentColor: "rgb(255, 180, 50)",
};

export const Colors5 = {
  // Verde Floresta + Dourado
  backgroundColor: "rgb(15, 30, 20)",
  secondaryColor: "rgb(40, 70, 50)",
  thirdColor: "rgb(80, 160, 90)",
  lightColor: "rgb(140, 200, 130)",
  hoverColor: "rgba(80, 160, 90, 0.3)",
  textColor: "rgb(240, 245, 240)",
  accentColor: "rgb(220, 190, 50)",
};

export const Colors6 = {
  // Azul Marinho + Coral
  backgroundColor: "rgb(10, 25, 40)",
  secondaryColor: "rgb(30, 60, 90)",
  thirdColor: "rgb(70, 150, 200)",
  lightColor: "rgb(130, 190, 220)",
  hoverColor: "rgba(70, 150, 200, 0.3)",
  textColor: "rgb(230, 240, 250)",
  accentColor: "rgb(255, 90, 80)",
};

export const Colors7 = {
  // Vinho + Rosa Poeira
  backgroundColor: "rgb(50, 10, 25)",
  secondaryColor: "rgb(90, 30, 50)",
  thirdColor: "rgb(180, 70, 100)",
  lightColor: "rgb(210, 130, 150)",
  hoverColor: "rgba(180, 70, 100, 0.3)",
  textColor: "rgb(255, 240, 245)",
  accentColor: "rgb(255, 200, 180)",
};

export const Colors = {
  backgroundColor: "rgb(10, 10, 10)",
  secondaryColor: "rgb(30, 30, 30)",
  thirdColor: "rgb(49, 49, 49)",
  lightColor: "rgb(162, 34, 247)",
  hoverColor: " rgba(53, 90, 116, 0.3)",
  textColor: "rgb(255, 240, 245)",
  accentColor: "rgb(114, 196, 255)",
  transparentaAcentColor: "rgba(114, 196, 255, 0.1)",
  transparentColor: "rgba(0, 0, 0, 0)",
  boxShadowColor: "rgba(114, 196, 255, 0.3)",
};

export const Gradients = {
  backgroundGradient: `linear-gradient(to bottom, ${Colors.backgroundColor} 0%, ${Colors.secondaryColor} 50%, ${Colors.thirdColor} 100%)`,
  reversebackgroundGradient: `linear-gradient(to bottom, ${Colors.secondaryColor} 0%, ${Colors.backgroundColor} 100%)`,
  perfilGradient: `radial-gradient(ellipse, ${Colors.lightColor} 0%, ${Colors.transparentColor} 70%, ${Colors.transparentColor} 100%)`,
  itemGradient: `linear-gradient(135deg,${Colors.boxShadowColor} 0%, rgba(162, 34, 247, 0.2) 100%)`,
  backgroundCircleGradient: `radial-gradient(ellipse, ${Colors.thirdColor} 0%, ${Colors.transparentColor} 70%, ${Colors.transparentColor} 100%)`,
  topicsGradient: `linear-gradient(to bottom, ${Colors.lightColor} 0%, ${Colors.accentColor} 70%)`,
};
