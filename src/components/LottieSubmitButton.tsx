import React, { useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/send-animation.json"; // adjust path if needed

const LottieSubmitButton: React.FC = () => {
  const lottieRef = useRef<any>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default form submission

    // Play animation
    lottieRef.current?.goToAndPlay(0, true);

    // Submit the form after animation (adjust delay as needed)
    setTimeout(() => {
      const form = document.querySelector("form") as HTMLFormElement;
      if (form) form.requestSubmit();
    }, 1300); // depends on animation length
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="w-full flex items-center justify-center"
    >
      <div className="w-28 h-28">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={false} // disable autoplay so it only runs on click
        />
      </div>
    </button>
  );
};

export default LottieSubmitButton;

