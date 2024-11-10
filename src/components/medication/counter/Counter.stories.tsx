import Counter from './Counter';
import {PhMinusFill, PhPlusFill} from "../../svg/medication/Medication";

export default {
  title: 'Medication/Counter',
  component: Counter,
};

export const Default = {
  args: {
    minusIcon: <PhMinusFill />,
    plusIcon: <PhPlusFill />
  },
};