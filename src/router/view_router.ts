import { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";
import i18n from "@/i18n";

export const view_routers: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/index.vue"),
  },
  {
    path: "/dashboard",
    meta: {
      isMain: true,
      hidden: true,
      icon: "layer-group",
      title: i18n.global.t("route.DASHBOARD"),
    },
    component: Layout,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        meta: { title: i18n.global.t("route.DASHBOARD") },
        component: () => import("@/views/Dashboard/index.vue"),
      },
    ],
  },
  {
    path: "/account",
    meta: {
      isMain: true,
      hidden: false,
      icon: "wallet",
      title: i18n.global.t("route.ACCOUNTMANAGEMENT"),
    },
    component: Layout,
    children: [
      {
        path: "/account/user-management",
        meta: { title: i18n.global.t("route.USERMANAGEMENT") },
        name: "UserManagement",
        component: () => import("@/views/UserManagement/index.vue"),
      },
    ],
  },
  {
    path: "/lot-management",
    meta: {
      isMain: true,
      hidden: true,
      icon: "book",
      title: i18n.global.t("route.LOTMANAGEMENT"),
    },
    component: Layout,
    children: [
      {
        path: "/lot-management",
        name: "LotManagement",
        component: () => import("@/views/LotManagement/index.vue"),
      },
    ],
  },
  {
    path: "/auction-management",
    meta: {
      isMain: true,
      hidden: true,
      icon: "building-columns",
      title: i18n.global.t("route.AUCTIONMANAGEMENT"),
    },
    component: Layout,
    children: [
      {
        path: "/auction-management",
        name: "AuctionManagement",
        component: () => import("@/views/AuctionManagement/index.vue"),
      },
    ],
  },
  {
    path: "/order-management",
    meta: {
      isMain: true,
      hidden: true,
      icon: "file-invoice-dollar",
      title: i18n.global.t("route.ORDERMANAGEMENT"),
    },
    component: Layout,
    children: [
      {
        path: "/order-management",
        name: "OrderManagement",
        component: () => import("@/views/OrderManagement/index.vue"),
      },
    ],
  },
  {
    path: "/film-review",
    meta: {
      isMain: true,
      hidden: true,
      icon: "film",
      title: i18n.global.t("route.FILMREVIEW"),
    },
    component: Layout,
    children: [
      {
        path: "/film-review",
        name: "FilmReview",
        component: () => import("@/views/FilmReview/index.vue"),
      },
    ],
  },
  {
    path: "/message-management",
    meta: {
      isMain: true,
      hidden: true,
      icon: "envelope",
      title: i18n.global.t("route.MESSAGEMANAGEMENT"),
    },
    component: Layout,
    children: [
      {
        path: "/message-management",
        name: "MessageManagement",
        component: () => import("@/views/MessageManagement/index.vue"),
      },
    ],
  },
  {
    path: "/administrator",
    meta: {
      isMain: true,
      hidden: true,
      icon: "user-large",
      title: i18n.global.t("route.ADMINISTRATOR"),
    },
    component: Layout,
    children: [
      {
        path: "/administrator",
        name: "Administrator",
        component: () => import("@/views/Administrator/index.vue"),
      },
    ],
  },
];
