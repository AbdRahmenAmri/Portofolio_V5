import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve } from "path";

interface Link {
  url: string;
  changefreq: "daily" | "weekly" | "monthly";
  priority: number;
  img?: Array<{
    url: string;
    caption: string;
    title: string;
    geo_location?: string;
    license?: string;
  }>;
  video?: Array<{
    thumbnail_loc: string;
    title: string;
    description: string;
    content_loc: string;
    duration: number;
    publication_date: string;
  }>;
  links?: Array<{ lang: string; url: string }>;
}

// Your base URL
const hostname = "https://abdrahmen.tn";

// Array of links for the sitemap
const links: Link[] = [
  {
    url: "/",
    changefreq: "monthly",
    priority: 1.0,
    img: [
      {
        url: `${hostname}/meta.png`,
        caption: "Software Engineer DevOps - AbdRahmen Amri",
        title: "Software Engineer DevOps - AbdRahmen Amri",
      },
    ],
  },
];

// Initialize the sitemap stream
const sitemap = new SitemapStream({ hostname });

// Define the output file path
const outputPath = resolve("public/sitemap.xml");
const writeStream = createWriteStream(outputPath);

// Write links to the sitemap stream
links.forEach((link) => sitemap.write(link));

// Close the sitemap stream
sitemap.end();

// Generate the sitemap file
streamToPromise(sitemap)
  .then((data) => {
    writeStream.write(data.toString());
    console.log("Sitemap created successfully!");
  })
  .catch((err) => console.error("Error creating sitemap:", err));
