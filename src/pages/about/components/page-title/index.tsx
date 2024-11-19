type TitleProps = {
  title: string;
  text: string;
};

const Title: React.FC<TitleProps> = ({ title, text }) => {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-muted-foreground">{text}</p>
    </section>
  );
};

export default Title;
