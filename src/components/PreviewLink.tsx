import Image from "next/image";
import Link from "next/link";
import parse from "node-html-parser";

export const getLinkMeta = async (url: string) => {
  const response = await fetch(url);
  const body = await response.text();

  const rootElement = await parse(body);
  const metaTags = rootElement.getElementsByTagName("meta");

  const imgUrl = metaTags
    .filter(
      (meta) =>
        meta.attributes?.name?.toLowerCase() === "twitter:image" ||
        meta.attributes?.property?.toLowerCase() === "og:image",
    )
    .map((meta) => meta.attributes.content)[0];

  const title = metaTags
    .filter(
      (meta) =>
        meta.attributes?.name?.toLowerCase() === "twitter:title" ||
        meta.attributes?.property?.toLowerCase() === "og:title",
    )
    .map((meta) => meta.attributes.content)[0];

  return { href: url, title, imgUrl };
};

interface Props {
  url: string;
  width?: number;
  height?: number;
}

export const PreviewBadge: React.FC<Props> = async ({
  url,
  width = 180,
  height = 240,
}) => {
  const { href, title, imgUrl } = await getLinkMeta(url);
  return (
    <div className="relative py-4">
      <Link href={href} target="_blank">
        <Image src={imgUrl} alt={title} width={width} height={height} />
      </Link>
    </div>
  );
};
