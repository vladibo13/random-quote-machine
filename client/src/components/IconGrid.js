import React from "react";
import { Twitter, GitHub } from "react-feather";

const IconGrid = ({ color }) => {
  return (
    <div className="mt-2">
      <a href="http://twitter.com/intent/tweet">
        <Twitter className="mr-2" color={color} size={48} />
      </a>
      <a href="https://github.com/vladibo13?tab=repositories">
        <GitHub color={color} size={48} />
      </a>
    </div>
  );
};

export default IconGrid;
