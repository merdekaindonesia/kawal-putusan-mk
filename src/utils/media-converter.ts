import sharp from "sharp";

export async function compressImageWebp({
  buffer,
  width = 500,
  quality = 82,
  drop = 2,
  maxSize = 100000, // 100kb
}: {
  buffer: Buffer | ArrayBuffer;
  width?: number;
  quality?: number;
  drop?: number;
  maxSize?: number;
}) {
  if (buffer instanceof ArrayBuffer) {
    buffer = Buffer.from(buffer);
  }

  const sharpHead = await sharp(buffer)
    .resize({
      width,
      fit: sharp.fit.inside,
      withoutEnlargement: true,
    })
    .webp({
      quality,
    })
    .keepMetadata()
    .toBuffer();

  if (sharpHead.byteLength > maxSize) {
    return compressImageWebp({
      buffer,
      quality: quality - drop,
    });
  }

  return sharpHead;
}
