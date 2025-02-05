import Image from "next/image";

interface Props {
  children: React.ReactNode;
}
//27:45
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-brand p-10">
        <div>
          <Image
            src={"https://picsum.photos/200/300"}
            alt="Logo"
            width={16}
            height={16}
            className="h-auto"
          />
          <div className="space-y-5 text-white">
            <h1 className="h1">Manage your files like elmi manage 🍖</h1>
            <p className="body-1">A simple file manager for your local files</p>
          </div>
        </div>
      </section>
      {children}
    </div>
  );
};

export default Layout;
