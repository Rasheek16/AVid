type Props = {
  children: React.ReactNode;
};
const layout = ({ children }: Props) => {
  return (
    <div className="container mx-auto h-screen flex justify-center items-center">{children}</div>
  );
};

export default layout;
