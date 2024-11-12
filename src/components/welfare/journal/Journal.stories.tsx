import { DataArray } from "@mui/icons-material"
import Journal from "./Journal"

export default {
  title : 'Welfare/Journal',
  component: Journal,
}

export const Default = {
  args: {
    journals: [
      {
        feeling: "Very Good",
        time: "12:00",
        description: "I am feeling good",
        day: "Today, 12th July",
      },
      {
        feeling: "Very Sad",
        time: "12:00",
        description: "I am feeling very sad",
        day: "Today, 12th July",
      }
    ],
    time: "12:00",
    day: "Today, 12th July",
  }
}