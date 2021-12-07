import { Label, Select } from './styles';

interface IProps {
  label: string;
  placeholder: string;
}

export function SelectInput ({label, placeholder}: IProps) {
  return(
    <>
      <Label>{label}</Label>
      <Select placeholder="placeholder">
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </Select>
    </>
  )
}