import React from "react";

import { download } from "../assets";
import { downloadImage } from "../utils";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
      <div
        className="group-hover:flex flex-col max-h-[94.5%] hidden absolute
      bottom-0 right-0 left-0 bg-[#10131f] m-2 p-4 rounded-md"
      >
        <p className="text-white text-md prompt overflow-y-auto">{prompt}</p>
        <div className="mt-5 justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-green-600 flex justify-center items-center text-white text-xs font-bold">
              {name[0].toUpperCase()}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="outline-none bg-transparent border-none"
          >
            <img
              src={download}
              alt="download"
              className="h-6 w-6 invert object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
