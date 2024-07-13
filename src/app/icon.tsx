import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div className="transparent flex h-full w-full items-center justify-center text-2xl text-primary-950">
        V
      </div>
    ),
    {
      ...size,
    },
  );
}
