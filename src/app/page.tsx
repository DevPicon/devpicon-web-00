import React from "react";
import HelloWorld from "../components/HelloWorld";
import ImageDisplay from "../components/ImageDisplay";
import content from "../../data/content.json";
import images from "../../data/images.json";

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "20px" }}>
      <HelloWorld title={content.title} description={content.description} />
      <ImageDisplay
        src={images.dummyImage}
        alt="Imagen Dummy"
        width={images.width}
        height={images.height}
      />
    </main>
  );
}
