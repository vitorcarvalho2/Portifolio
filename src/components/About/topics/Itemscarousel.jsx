import { Box, ButtonBase } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Colors, Gradients } from "../../../utils/colors";
import { icons } from "../../../utils/icons";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, animate, useMotionValue } from "framer-motion";

function ItemsCarousel() {
  const containerRef = useRef(null);
  const [items] = useState([...icons, ...icons]);
  const x = useMotionValue(0);
  const targetX = useMotionValue(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const itemSize = 100;
  const buttonSize = 60;
  const moveDistance = itemSize * 2;

  const handleNext = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newX =
      Math.round(targetX.get() / moveDistance) * moveDistance - moveDistance;

    animate(targetX, newX, {
      type: "spring",
      stiffness: 300,
      damping: 30,
      onUpdate: (latest) => x.set(latest),
      onComplete: () => setIsAnimating(false),
    });
  }, [x, targetX, moveDistance, isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newX =
      Math.round(targetX.get() / moveDistance) * moveDistance + moveDistance;

    animate(targetX, newX, {
      type: "spring",
      stiffness: 300,
      damping: 30,
      onUpdate: (latest) => x.set(latest),
      onComplete: () => setIsAnimating(false),
    });
  }, [x, targetX, moveDistance, isAnimating]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [handleNext]);

  useEffect(() => {
    const removeListener = x.onChange((latest) => {
      if (latest < -icons.length * moveDistance) {
        const adjustment = icons.length * moveDistance;
        targetX.set(targetX.get() + adjustment);
        x.set(x.get() + adjustment);
      } else if (latest > 0) {
        const adjustment = icons.length * moveDistance;
        targetX.set(targetX.get() - adjustment);
        x.set(x.get() - adjustment);
      }
    });
    return () => removeListener();
  }, [x, targetX, moveDistance]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100%",
        width: "100%",
        px: 4,
        py: 4,
        position: "relative",
      }}
    >
      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          position: "relative",
        }}
      >
        <ButtonBase
          onClick={handlePrev}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            width: buttonSize,
            height: buttonSize,
            flexShrink: 0,
            zIndex: 10,
            backgroundColor: Colors.secondaryColor,
            "&:hover": {
              backgroundColor: Colors.primaryColor,
            },
          }}
        >
          <ArrowBackIosNewIcon fontSize="large" sx={{ color: "white" }} />
        </ButtonBase>

        <Box
          sx={{
            flex: 1,
            position: "relative",
            overflow: "hidden",
            height: itemSize * 1.5,
            maxWidth: "500px",
            padding: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            style={{
              display: "flex",
              height: "100%",
              x: x,
              alignItems: "center",
            }}
          >
            {items.map((icon, index) => (
              <motion.div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: itemSize,
                  height: itemSize,
                  marginRight: itemSize,
                  flexShrink: 0,
                  background: Gradients.itemGradient,
                  borderRadius: "50%",
                }}
                whileHover={{ scale: 1.3 }}
              >
                {icon}
              </motion.div>
            ))}
          </motion.div>
        </Box>

        <ButtonBase
          onClick={handleNext}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            width: buttonSize,
            height: buttonSize,
            flexShrink: 0,
            zIndex: 10,
            backgroundColor: Colors.secondaryColor,
            "&:hover": {
              backgroundColor: Colors.primaryColor,
            },
          }}
        >
          <ArrowForwardIosIcon fontSize="large" sx={{ color: "white" }} />
        </ButtonBase>
      </Box>
    </Box>
  );
}

export default ItemsCarousel;
