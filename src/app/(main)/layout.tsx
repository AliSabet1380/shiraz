import { Header } from "@/components/header/header";

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
