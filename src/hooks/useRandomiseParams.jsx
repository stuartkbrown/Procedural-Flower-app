import { useFlowerParameters } from "../components/Context";

export const useRandomizeParams = () => {
  const { updateParam } = useFlowerParameters();

  const randomizeParams = () => {
    updateParam("flowerColour1", randomColor());
    updateParam("flowerColour2", randomColor());
    updateParam("verticalResolution", Math.floor(randomFloat(10, 100, 10)));
    updateParam("radialResolution", Math.floor(randomFloat(45, 720, 45)));
    updateParam("petalNumber", Math.floor(randomFloat(1, 20, 1)));
    updateParam("diameter", randomFloat(20, 250, 10));
    updateParam("petalLength", randomFloat(0, 300, 10));
    updateParam("petalSharpness", randomFloat(0.0, 10.0, 0.1));
    updateParam("height", randomFloat(0, 600, 10));
    updateParam("curvature1", randomFloat(0.0, 4, 0.1));
    updateParam("curvature2", randomFloat(0.0, 1.0, 0.05));
    updateParam("bumpiness", randomFloat(0, 5, 0.5));
    updateParam("bumpNumber", Math.floor(randomFloat(0, 20, 1)));
  };

  return randomizeParams;
};

const randomFloat = (min, max, step) => {
  const range = (max - min) / step;
  const randomValue = Math.floor(Math.random() * (range + 1)) * step + min;
  return parseFloat(randomValue.toFixed(2));
};

const randomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
