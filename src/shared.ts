import type { App } from "vue";

// 引入fortawesome字体图标库
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faFilm as fasFilm,
  faBook as fasBook,
  faWallet as fasWallet,
  faEnvelope as fasEnvelope,
  faUserLarge as fasUserLarge,
  faLayerGroup as fasLayerGroup,
  faBuildingColumns as fasBuildingColumns,
  faFileInvoiceDollar as fasFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";

import {
  faAngleUp as fasAngleUp,
  faAngleDown as fasAngleDown,
  faCircleUser as fasCircleUser,
  faArrowRightFromBracket as fasArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const RouteFasIocn = [
  fasFilm,
  fasBook,
  fasWallet,
  fasUserLarge,
  fasLayerGroup,
  fasBuildingColumns,
  fasFileInvoiceDollar,
  fasArrowRightFromBracket,
];

const FasIcons = [fasAngleUp, fasEnvelope, fasAngleDown, fasCircleUser];

export function setupShared(app: App<Element>) {
  library.add(...FasIcons, ...RouteFasIocn);
  app.component("FaIcon", FontAwesomeIcon);
}
