import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
export const alt = "#KawalPutusanMK";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function OGImage() {
  // Font
  const interSemiBold = fetch(
    new URL("@/assets/fonts/Inter_24pt-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={
            "https://asset.kompas.com/crops/efPr8jIU2ltY_JaTcYTYpUjvtzg=/72x81:649x466/375x240/data/photo/2024/08/21/66c5af42e0b9b.jpeg"
          }
          alt="Garuda Indonesia"
        />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
