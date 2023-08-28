import React, { FC } from "react";
import styles from "./Sidebar.module.scss";
import { useSelector } from "react-redux";
import selectFilters from "@/redux/filters/selectMenu";
import { getMenuById } from "@/redux/menu/selectMenu";
import { AppState, useAppDispatch } from "@/redux/store";
import { setCategoryValue } from "@/redux/filters/slice";

interface SidebarProps {
  items: { id: number; name: string; link?: string }[];
  activeItem: number | null;
  onClickFn: (id: number) => void;
  title: string;
}

const Sidebar: FC<SidebarProps> = ({ items, activeItem, onClickFn, title }) => {
  return (
    <div className={styles.sidebar}>
      <h3>{title}</h3>
      <ul>
        {items?.map(({ name, id, link }) => (
          <a href={link} key={id}>
            <li
              className={`${activeItem === id && styles.active}`}
              onClick={() => onClickFn(id)}
            >
              {name}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
