import './style.css';

interface ErrorMessageProps {
  errorMessage?: string | null;
}

export const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  if (!errorMessage) return null;

  return (
    <p className='error-message' role='status'>
      {errorMessage}
    </p>
  );
};
