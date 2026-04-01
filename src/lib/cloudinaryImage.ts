type CloudinaryImageOptions = {
  sizes: string;
  widths?: number[];
};

type CloudinaryImageSources = {
  sizes?: string;
  src: string;
  srcSet?: string;
};

const DEFAULT_WIDTHS = [360, 520, 760, 980, 1280];
const CLOUDINARY_HOST = "https://res.cloudinary.com";

const isCloudinaryReady = () => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME?.trim();

  if (!cloudName) {
    return false;
  }

  if (typeof window === "undefined") {
    return false;
  }

  const { hostname } = window.location;
  return hostname !== "localhost" && hostname !== "127.0.0.1";
};

const toAbsoluteUrl = (src: string) => {
  if (typeof window === "undefined" || /^https?:\/\//i.test(src)) {
    return src;
  }

  return new URL(src, window.location.origin).toString();
};

const buildCloudinaryFetchUrl = (absoluteUrl: string, width: number) => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME?.trim();

  if (!cloudName) {
    return absoluteUrl;
  }

  const encodedSource = encodeURIComponent(absoluteUrl);
  return `${CLOUDINARY_HOST}/${cloudName}/image/fetch/f_auto,q_auto:eco,dpr_auto,c_limit,w_${width}/${encodedSource}`;
};

export const getCloudinaryImageSources = (src: string, options: CloudinaryImageOptions): CloudinaryImageSources => {
  if (src.startsWith(`${CLOUDINARY_HOST}/`)) {
    return { src };
  }

  if (!isCloudinaryReady()) {
    return { src };
  }

  const absoluteUrl = toAbsoluteUrl(src);
  const widths = options.widths ?? DEFAULT_WIDTHS;
  const srcSet = widths.map((width) => `${buildCloudinaryFetchUrl(absoluteUrl, width)} ${width}w`).join(", ");
  const defaultWidth = widths[Math.min(2, widths.length - 1)] ?? 760;

  return {
    sizes: options.sizes,
    src: buildCloudinaryFetchUrl(absoluteUrl, defaultWidth),
    srcSet,
  };
};
