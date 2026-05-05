import './style.css';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <header className='header'>
      <h1>{title}</h1>

      {subtitle && <p>{subtitle}</p>}
    </header>
  );
};
