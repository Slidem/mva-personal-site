import Link from "next/link";

interface Props {
  page: string;
  label: string;
}

const MobileHeaderLink: React.FC<Props> = ({ page, label }) => (
  <Link href={`/${page}`} className="text-gray-800 hover:text-gray-600 ml-4">
    {label}
  </Link>
);

export default MobileHeaderLink;
