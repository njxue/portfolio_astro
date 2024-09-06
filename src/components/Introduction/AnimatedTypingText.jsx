import { TypeAnimation } from "react-type-animation";
import GraphemeSplitter from "grapheme-splitter";

const AnimatedTypingText = () => {
  const splitter = new GraphemeSplitter();

  return (
    <TypeAnimation
      sequence={["Hi there!👋", 600, "Hi there! I'm Jing Xue"]}
      splitter={(str) => splitter.splitGraphemes(str)}
      wrapper="span"
      speed={60}
      style={{
        fontSize: "5vh",
        display: "inline-block",
        fontWeight: "bold",
        whiteSpace: "pre-line",
        height: "60px",
      }}
      repeat={0}
    />
  );
};

export default AnimatedTypingText;
