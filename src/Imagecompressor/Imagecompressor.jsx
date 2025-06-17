import React from "react";

const ImageCompressor = (imgElement, quality = 0.7, maxWidth = 600) => {
  const img = new Image();

  // Cross-origin ko tabhi lagao agar trusted source ho
  if (!imgElement.src.startsWith("data:")) {
    img.crossOrigin = "anonymous";
  }

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const scale = maxWidth / img.width;

    canvas.width = maxWidth;
    canvas.height = img.height * scale;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(
      (blob) => {
        const newUrl = URL.createObjectURL(blob);
        imgElement.src = newUrl;
      },
      "image/jpeg",
      quality
    );
  };

  img.src = imgElement.src;
};

export default ImageCompressor;
