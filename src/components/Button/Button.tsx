import './Button.scss';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { title: string };

export const Button = ({ title, className, ...props }: Props) => {
  return (
    <button className={`btn ${className}`} {...props}>
      {title}
    </button>
  );
};
