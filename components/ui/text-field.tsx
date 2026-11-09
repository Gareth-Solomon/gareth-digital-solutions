type TextFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  pattern?: string;
  title?: string;
};

export function TextField({ label, value, onChange, type = "text", required = false, placeholder, pattern, title }: TextFieldProps) {
  return (
    <label className="grid min-w-0 gap-2 text-sm font-bold text-navy">
      {label}
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        pattern={pattern}
        title={title}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 w-full min-w-0 rounded-md border border-slate-300 bg-white px-3 text-base focus:border-royal focus:outline-none focus:ring-4 focus:ring-royal/15"
      />
    </label>
  );
}
