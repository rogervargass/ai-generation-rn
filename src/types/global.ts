import { ParamListBase } from "@react-navigation/native";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamListBase {}
   }
 }