interface InputProps {
  type?: string;
  label?: string;
  id: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function Input({
  type = "text",
  label,
  id,
  placeholder = "",
  value,
  onChange,
  className = "",
}: InputProps) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full rounded-lg outline-blue-500 dark:text-neutral-100 focus:outline outline-2 outline-offset-4 dark:bg-neutral-800 p-4 text-sm ${className}`}
        />
      </div>
    </div>
  );
}
