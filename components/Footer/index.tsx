import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <ul className={styles.listItems}>
          <li className={styles.logo}>
            <Image
              width={211}
              height={68.68}
              src={"/images/logo.svg"}
              alt="logo"
            />
          </li>
          <li className={styles.menuItems}>
            <Link href={""}>Каталог</Link>
            <Link href={""}>На хадж</Link>
            <Link href={""}>Новинки</Link>
          </li>
          <li className={styles.menuItems}>
            <Link href={""}>Женщинам</Link>
            <Link href={""}>Коллекции</Link>
            <Link href={""}>Покупателям</Link>
          </li>
          <li className={styles.contacts}>
            <h3>Контакты</h3>
            <Link href={""}>leilamezhieva@info.com</Link>
            <Link href={""}>+ 7 (929) 898 - 15 - 65</Link>
            <span className={styles.socialItems}>
              <Link href={""}>
                <Image
                  width={36}
                  height={36}
                  src={"/images/instagram.svg"}
                  alt="instagram"
                />
              </Link>
              <Link href={""}>
                <Image
                  width={36}
                  height={36}
                  src={"/images/telegram.svg"}
                  alt="telegram"
                />
              </Link>
              <Link href={""}>
                <Image
                  width={36}
                  height={36}
                  src={"/images/linkedin.svg"}
                  alt="linkedin"
                />
              </Link>
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <span>© Leila Mezhieva 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
