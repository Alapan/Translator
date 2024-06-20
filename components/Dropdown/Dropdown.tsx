import styles from './Dropdown.module.css';
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
    <div className={styles.dropdownContainer}>
      <label htmlFor={dropdownName}>{label}</label>
      <select name={dropdownName} className={styles.dropdown}>
        {options.map(({name, code}) => (
          <option value={code} key={code}>{name}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
