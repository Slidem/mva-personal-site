import { LegacyRef, forwardRef } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  page: string;
  label: string;
  icon: any;
  onClick?: () => void;
}

const MobileHeaderLink: React.FC<Props> = ({ page, label, icon, onClick }) => {
  return (
    <div className="flex items-center gap-4">
      <Link
        href={`/${page}`}
        passHref
        legacyBehavior
        className="text-gray-800 hover:text-gray-600 ml-4"
      >
        <WrappingButton
          onClick={() => {
            onClick && onClick();
          }}
          label={label}
        />
      </Link>
      <div className="w-4 h-4">{icon}</div>
    </div>
  );
};

interface WrappingButtonProps {
  onClick: () => void;
  label: string;
  href?: string;
}

const WrappingButton = forwardRef(
  (
    { onClick, href, label }: WrappingButtonProps,
    ref: LegacyRef<HTMLAnchorElement>
  ) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        {label}
      </a>
    );
  }
);

export default MobileHeaderLink;
