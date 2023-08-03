interface IProps {
  title: string;
  description: string;
}

export default function Header(props: IProps) {
  const { title, description } = props;
  return (
    <div className="pageInfo">
      <h1 data-testid="title" className="text-center">
        {title}
      </h1>
      <p data-testid="description" className="text-center">
        {description}
      </p>
    </div>
  );
}
