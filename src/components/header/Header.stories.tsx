import Header from "./Header";
import {EmptyBox} from "../svg/common/Common";

export default {
  title: "Common/Header",
  component: Header,
}

export const Default = {
args: {
  name: "medication",
  title: "Medication",
  comp: {icon: <EmptyBox /> , iconColor: "text-primary-500", bgColor: ""}}
}

export const Home = {
args: {
  name: "home",
  title: "Home",
  comp: {icon: <EmptyBox /> , iconColor: "text-primary-500", bgColor: ""}}
}