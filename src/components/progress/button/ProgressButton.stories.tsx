import ProgressButton from './ProgressButton';
import { MaterialSymbolsPause } from '../../svg/progressButton/Pause';
import { MdiPlay } from '../../svg/progressButton/Play';

export default {
  title: 'Progress/ProgressButton',
  component: ProgressButton,
};

export const Default = {
  args : {
      text: "MEDITATE",
      textColor: "text-scale-1000",
      unfilledColor : "bg-scale-100",
      filledColor : "bg-primary-800",
      timeText: "0:10",
  }
};