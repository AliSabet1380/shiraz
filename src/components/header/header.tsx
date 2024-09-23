import { HeaderLogo } from "./header-logo";
import { Navigation } from "./navigation";

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 lg:px-14 pb-48 pt-8">
      <div className="flex items-center justify-between lg:justify-end space-x-14">
        <Navigation />
        <HeaderLogo />
      </div>
    </header>
  );
};
