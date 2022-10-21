import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const MarkdownPreviewer = ({ scrollSync, markdownContent }) => {
  return (
    <ScrollSyncPane group={scrollSync ? "one" : ""}>
      <div className="w-full h-[90vh] bg-[#F7F7F7] dark:bg-[#161616] border-l-4 py-5 px-12 border-l-white dark:border-l-black overflow-y-auto">
        <div className="prose prose-lg prose-blue max-w-none">
          <ReactMarkdown
            className="markdown-content"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={CodeBlock}
          >
            {markdownContent}
          </ReactMarkdown>
        </div>
      </div>
    </ScrollSyncPane>
  );
};

export default MarkdownPreviewer;
