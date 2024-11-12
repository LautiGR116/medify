import ProgressFrame from "./ProgressFrame";

export default {
  title: 'Progress/ProgressFrame',
  component: ProgressFrame 
}

export const Default = {
  args : {
    text: "5",
    progress : 20,
    tag: "You are level 5!",
    subtag: "150 points to level up",
    isBadge: false
  }
}