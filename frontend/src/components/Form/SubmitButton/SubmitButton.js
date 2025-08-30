import React from 'react';

function SubmitButton({ text }) {
  return <button type="submit" className="bg-[#1876BC] hover:bg-[#1F71C0] text-white font-semibold py-2 px-4 rounded-xl">{text}</button>;
}

export default SubmitButton;
