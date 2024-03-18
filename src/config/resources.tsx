import {
  CaretDownOutlined,
  CaretUpOutlined,
  DashboardOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

export const resources: IResourceItem[] = [
  {
    name: "dashboard",
    list: "/",
    meta: {
      label: "Dashboard",
      icon: <DashboardOutlined />,
    },
  },
  {
    name: "Ro'yhat",
    list: "ro'yhat",
    show: "/ro'yhat/:id",
    create: "/ro'yhat/new",
    edit: "/ro'yhat/:id",
    meta: {
      label: "Ro'yhat",
      icon: <OrderedListOutlined />,
    },
  },
  {
    name: "Kirim",
    list: "kirim",
    show: "/kirim/:id",
    create: "/kirim/new",
    edit: "/kirim/:id",
    meta: {
      label: "Kirim",
      icon: <CaretDownOutlined />,
    },
  },
  {
    name: "Chiqim",
    list: "chiqim",
    show: "/chiqim/:id",
    create: "/chiqim/new",
    edit: "/chiqim/:id",
    meta: {
      label: "Chiqim",
      icon: <CaretUpOutlined />,
    },
  },
];
