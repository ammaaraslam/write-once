import { IconButton } from "../Buttons";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
function getHeadings(source) {
  // Get each line individually, and filter out anything that
  // isn't a heading.
  const headingLines = source.split("\n").filter((line) => {
    return line.match(/^#*\s/);
  });

  // Transform the string '## Some text' into an object
  // with the shape '{ text: 'Some text', level: 2 }'
  return headingLines.map((raw) => {
    const text = raw.replace(/^#*\s/, "");
    // I only care about h2 and h3.
    // If I wanted more levels, I'd need to count the
    // number of #s.
    const level =
      (raw.slice(0, 6) === "######" && 6) ||
      (raw.slice(0, 5) === "#####" && 5) ||
      (raw.slice(0, 4) === "####" && 4) ||
      (raw.slice(0, 3) === "###" && 3) ||
      (raw.slice(0, 2) === "##" && 2) ||
      (raw.slice(0, 1) === "#" && 1);

    return { text, level };
  });
}

// Now, the function that renders it all
export const TOC = ({ markdownContent }) => {
  const headings = getHeadings(markdownContent.toString());
  return (
    <div className="relative w-1/2 h-[91.8vh] bg-[#F7F7F7] dark:bg-[#161616] border-l-2 py-4 px-1 border-l-black dark:border-l-white border-opacity-30 dark:border-opacity-30 overflow-y-auto">
      <h2 className="font-bold text-2xl underline">Table of content</h2>
      <ul>
        {headings.map((heading, index) => (
          <>
            {heading.level === 1 && (
              <li key={index} className="ml-4">
                {heading.text}
              </li>
            )}
            {heading.level === 2 && (
              <li key={index} className="ml-4">
                <li className="ml-4">{heading.text}</li>
              </li>
            )}
            {heading.level === 3 && (
              <li key={index} className="ml-4">
                <li className="ml-4">
                  <li className="ml-4">{heading.text}</li>
                </li>
              </li>
            )}
            {heading.level === 4 && (
              <li key={index} className="ml-4">
                <li className="ml-4">
                  <li className="ml-4">
                    <li className="ml-4">{heading.text}</li>
                  </li>
                </li>
              </li>
            )}
            {heading.level === 5 && (
              <li key={index} className="ml-4">
                <li className="ml-4">
                  <li className="ml-4">
                    <li className="ml-4">
                      <li className="ml-4">{heading.text}</li>
                    </li>
                  </li>
                </li>
              </li>
            )}
            {heading.level === 6 && (
              <li key={index} className="ml-4">
                <li className="ml-4">
                  <li className="ml-4">
                    <li className="ml-4">
                      <li className="ml-4">
                        <li className="ml-4">{heading.text}</li>
                      </li>
                    </li>
                  </li>
                </li>
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};
