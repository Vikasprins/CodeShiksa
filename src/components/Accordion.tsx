import { useState } from 'react';

export const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-3 font-semibold bg-white border-b hover:bg-gray-100 flex justify-between items-center"
      >
        {title}
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="px-4 py-3 bg-gray-50">{children}</div>}
    </div>
  );
};
