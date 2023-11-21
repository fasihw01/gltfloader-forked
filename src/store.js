import { proxy } from "valtio";

const state = proxy({
  intro: true,
  colors: ["#FFDBAC", "#F1C27D", "#E0AC69", "#C68642", "#8D5524"],
  decals: ["react", "three2", "pmndrs"],
  color: "#FFDBAC",
  decal: "three2"
});

export { state };
