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
    }
  }
}

export const Completed = {
  key: "completed",
  args: {}
}