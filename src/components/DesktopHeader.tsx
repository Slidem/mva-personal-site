import DesktopHeaderLink from "./DesktopHeaderLink";
import { headerItems } from "../configs/landingPageContent";

const DesktopHeader = () => (
  <div className="md:flex lg:gap-10 md:gap-6 hidden ">
    {headerItems.map((link) => (
      <div key={link.page}>
        <DesktopHeaderLink {...link} />
      </div>
    ))}
  </div>
);

export default DesktopHeader;
