import Header from "./Header";
import {EmptyBox} from "../svg/common/Common";

export default {
  title: "Common/Header",
  component: Header,
}

export const Default = {

args: {
  name: "default",
  title: "Home",
  comp: {icon: <EmptyBox /> , iconColor: "text-primary-500", bgColor: ""}}
}
