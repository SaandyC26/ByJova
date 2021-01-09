/*!

=========================================================
* ByJova v1.1.0
=========================================================

*/
import Dashboard from "views/Notifications.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import CreateCard from "views/CreateCard.js";

var routes = [
  {
    path: "/dashboard",
    name: "Información clientes",
    //rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tarjeta digital",
    //rtlName: "قائمة الجدول",
    icon: "tim-icons icon-single-copy-04",
    component: CreateCard,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Diseño",
    //rtlName: "الرموز",
    icon: "tim-icons icon-components",
    component: Icons,
    layout: "/admin"
  },
  // slcervantes {
  //   path: "/map",
  //   name: "Mapa",
  //   rtlName: "خرائط",
  //   icon: "tim-icons icon-pin",
  //   component: Map,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  {
    path: "/user-profile",
    name: "Perfil de usuario",
    //rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },

  // slcervantes {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: Rtl,
  //   layout: "/rtl"
  // }
];
export default routes;
