import Question from "./Question";

export default {
  title: "Welfare/Question",
  component: Question
}

export const Default = {
  key: "default",
  args: {
    questionnaire: {
      qNumber: 1,
      question: "How long did you sleep last night?"
    },
    variant: 'Question'
  }
}

export const Completed = {
  key: "completed",
  args: {
    variant: 'Success'
  }
}

export const Bonus = {
  key: "bonus",
  args: {
    variant: 'Bonus',
    question: "Do you want to give feedback?"
  }
}