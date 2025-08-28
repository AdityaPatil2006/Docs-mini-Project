import React, { useState, useEffect } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(data.desc || "");

  useEffect(() => {
    setText(data.desc || "");
  }, [data.desc]);

  const handleBlur = () => {
    setIsEditing(false);
    onUpdate(data.id, text);
  };

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.05 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[30px] bg-zinc-900/90 text-white px-6 py-6 shadow-lg flex flex-col"
    >
      {/* Header row */}
      <div className="flex justify-between items-center">
        <FaRegFileAlt />
        <button
          type="button"
          onClick={() => onDelete(data.id)}
          className="text-red-400 hover:text-red-600"
          aria-label="Delete card"
          title="Delete"
        >
          <IoClose />
        </button>
      </div>

      {/* Editable content */}
      <div className="mt-3 flex-1">
        {isEditing ? (
          <textarea
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={handleBlur}
            className="w-full h-full bg-transparent outline-none resize-none text-sm font-semibold text-white whitespace-pre-wrap break-words"
          />
        ) : (
          <p
            className="text-sm font-semibold whitespace-pre-wrap break-words cursor-text"
            onClick={() => setIsEditing(true)}
            title="Click to edit"
          >
            {text || "Click to add text..."}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
