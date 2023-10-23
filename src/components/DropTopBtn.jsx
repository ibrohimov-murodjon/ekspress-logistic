//img
import DropTop from "../assets/drop-top-icon.svg";
import useScrollToTop from "../hooks/useScrollToTop";

const ScrollToTopButton = () => {
  const { shown, scrollToTop } = useScrollToTop(300);

  return (
    <button
      aria-label="scroll to top"
      onClick={scrollToTop}
      className={`${
        shown ? "scale-100" : "scale-0"
      } w-12 h-12 transition-transform duration-200 flex fixed right-10 bottom-10 bg-gradient-to-r from-[#f7971e] to-[#ffd200] padding-0 rounded-full shadow-2xl shadow-[#f7971e] justify-center items-center`}
    >
      <img src={DropTop} alt="" />
    </button>
  );
};

export default ScrollToTopButton;
