import ProgressButton from './ProgressButton';
import { MaterialSymbolsPause } from '../../svg/progressButton/Pause';
import { MdiPlay } from '../../svg/progressButton/Play';

export default {
  title: 'Progress/ProgressButton',
  component: ProgressButton,
};

export const Default = {
  args : {
      text: "Meditación",
      textColor: "text-primary-500",
      unfilledColor : "bg-scale-800",
      filledColor : "bg-primary-800",
      timeText: "0:10",
  }
};