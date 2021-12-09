import { UseFormRegister } from 'react-hook-form';
import { IFormInput } from '../Header';

import { Label, Input } from './styles';

interface IProps {
  inputId: string;
  label: string;
  register: UseFormRegister<IFormInput>;
}

export function YearSelect({label, register, inputId }: IProps) {
  return (
    <>
      <Label htmlFor={inputId} >{label}</Label>
      <Input
        {...register("year")}
        id={inputId}
        type="number" 
        placeholder="2019"
        min="2010"
        max="2019"
      />
    </>
  )
}