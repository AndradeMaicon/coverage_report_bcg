import { UseFormRegister } from 'react-hook-form';
import { reportSummary } from '../../utils/reportSummary';

import { IFormInput } from '../Header';

import { Label, Select } from './styles';


interface IProps {
  inputId: string;
  label: string;
  register: UseFormRegister<IFormInput>;
}

export function SelectInput ({label, register, inputId }: IProps) {
  return(
    <>
      <Label htmlFor={inputId} >{label}</Label>
      <Select id={inputId} {...register("state")}>
        {reportSummary.map((item) => (
          <option key={item.id} value={item.id}>{item.stateName}</option>
        ))}
      </Select>
    </>
  )
}