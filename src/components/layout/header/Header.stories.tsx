import Header from "./Header";
import {EmptyBox} from "../../svg/common/Common";

export default {
  title: "Layout/Header",
  component: Header,
}

export const Default = {
args: {
  name: "default",
  title: "PageTitle",
  comp: {icon: <EmptyBox /> , iconColor: "text-primary-500", bgColor: ""}}
}

export const Home = {
args: {
  name: "home",
  title: "Home",
  comp: {icon: <EmptyBox /> , iconColor: "text-primary-500", bgColor: ""}}
}