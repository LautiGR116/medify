import IndJournal from "./IndJournal"

export default { 
  title : 'Journal/IndJournal',
  component: IndJournal,
}

export const Close = {
  args: {
    feeling: "Very Good",
    time: "12:00",
    description: "I am feeling good",
    day: "Today, 12th July",
    isOpen: () => false
  }
}

export const Open = {
  args: {
    feeling: "Very Sad",
    time: "12:00",
    description: "I am feeling very sad",
    day: "Today, 12th July",
    isOpen: () => true
  }
}