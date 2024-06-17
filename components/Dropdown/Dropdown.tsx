interface Option {
  name: string;
  code: string;
}

interface DropdownProps {
  options: Option[];
  dropdownName: string;
  label: string;
}

const Dropdown = ({ options, dropdownName, label }: DropdownProps) => {
  return (
    <>
      <label htmlFor={dropdownName}>{label}</label>
      <select name={dropdownName}>
        {options.map(({name, code}) => (
          <option value={code}>{name}</option>
        ))}
      </select>
    </>
  );
}

export default Dropdown;
