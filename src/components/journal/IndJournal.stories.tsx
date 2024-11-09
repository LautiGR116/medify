import { Description } from "@mui/icons-material"
import IndJournal from "./IndJournal"

export default { 
  title : 'Journal/IndJournal',
  component: IndJournal,
}

export const Default = {
  args: {
    feeling: "good",
    time: "12:00",
    description: "I am feeling good",
    isOpen: () => true
  }
}