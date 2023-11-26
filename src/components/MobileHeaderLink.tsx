import Link from "next/link";

interface Props {
  page: string;
  label: string;
  icon: any;
}

const MobileHeaderLink: React.FC<Props> = ({ page, label, icon }) => (
  <div className="flex items-center gap-4">
    <Link href={`/${page}`} className="text-gray-800 hover:text-gray-600 ml-4">
      {label}
    </Link>
    <div className="w-4 h-4">{icon}</div>
  </div>
);

export default MobileHeaderLink;
