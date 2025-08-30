function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      className="border-2 border-[#003D5C] w-full text-sm md:text-md lg:text-lg flex justify-center items-center gap-4 bg-white text-[#003D5C] font-semibold py-2 px-4 rounded-xl hover:bg-[#003D5C] hover:text-white transition-colors duration-200"
    >
      {text}
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  );
}

export default SubmitButton;
