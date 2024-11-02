import ProgressButton from './ProgressButton';
import { MaterialSymbolsPause } from '../../svg/Pause';
import { MdiPlay } from '../../svg/Play';

export default {
  title: 'ProgressButton',
  component: ProgressButton,
};

export const Default = {
  args : {
      text: "Meditación",
      textColor: "text-primary-500",
      unfilledColor : "bg-scale-800",
      filledColor : "bg-primary-800",
      timeText: "0:10",
      progress: 0.5,
  }
};