import { UseFormRegister } from 'react-hook-form';
import { reportSummary } from '../../utils/reportSummary';

import { IFormInput } from '../Header';

import { Label, Select } from './styles';


interface IProps {
  label: string;
  register: UseFormRegister<IFormInput>;
}

export function SelectInput ({label, register }: IProps) {
  return(
    <>
      <Label>{label}</Label>
      <Select {...register("state")}>
        {reportSummary.map((item) => (
          <option key={item.id} value={item.id}>{item.stateName}</option>
        ))}
      </Select>
    </>
  )
}