import React from "react";
import { SINGLE_PAGE_URL } from "@/lib/constants";
import ContentBlock from "@/sections/ContentBlock";
import Hero from "@/sections/Hero";

const SinglePage = async ({ params: { slug } }) => {
  try {
    const res = await fetch(SINGLE_PAGE_URL + slug);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const pages = await res.json();

    return pages[0].acf_flexible_content.map((block, index) => {
      if (block.acf_fc_layout === "hero") {
        return <Hero key={index} data={block} />;
      } else if (block.acf_fc_layout === "content_block") {
        return <ContentBlock key={index} data={block} />;
      } else {
        return null; // handle unknown layout types
      }
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // or handle error state accordingly
  }
};

export default SinglePage;
