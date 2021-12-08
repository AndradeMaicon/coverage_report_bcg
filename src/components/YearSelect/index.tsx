import { UseFormRegister } from 'react-hook-form';
import { IFormInput } from '../Header';

import { Label, Input } from './styles';

interface IProps {
  label: string;
  register: UseFormRegister<IFormInput>;
}

export function YearSelect({label, register }: IProps) {
  return (
    <>
      <Label>{label}</Label>
      <Input
        {...register("year")}
        type="number" 
        placeholder="2019"
        min="2010"
        max="2019"
      />
    </>
  )
}