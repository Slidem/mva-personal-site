"use client";

import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import React from "react";

export interface Meta {
  title: string;
  description: string;
  publishDate: string;
  canonicalUrl: string;
}

interface Props {
  children: React.ReactNode;
  meta: Meta;
}

const Layout: React.FC<Props> = ({ children, meta }) => {
  return (
    <>
      <Head>
        <title>Blog posts</title>
        <meta name="description" key="description" content="Blog posts" />
        <link rel="canonical" href={meta.canonicalUrl} />
      </Head>
      <MDXProvider>{children}</MDXProvider>
    </>
  );
};

export default Layout;
