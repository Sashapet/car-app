import * as Yup from 'yup';

const today = new Date();

const minDate = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
);

export const schema = Yup.object().shape({
  date: Yup.date().min(minDate, 'Date must be equal to or after today'),
  carNumber: Yup.string().max(11).required(),
  personalCode: Yup.number().required(),
});
