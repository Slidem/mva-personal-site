import Image, { ImageProps } from "next/image";

import { BlogImage } from "./components/BlogImage";
import type { MDXComponents } from "mdx/types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useModalContext } from "./components/ModalContext";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
    pre: ({ children, className }) => {
      return <>{children}</>;
    },
    code: ({ children, className }) => {
      const language = className?.replace(/language-/, "") || "javascript";
      return (
        <SyntaxHighlighter language={language} style={{ ...dracula }}>
          {children as string}
        </SyntaxHighlighter>
      );
    },
    img: BlogImage,
  };
}
