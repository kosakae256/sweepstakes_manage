import Link from "next/link";
import styles from "./index.module.scss";
import Image from "next/image";
import type { NextPage } from "next";

const INFOS = [
  {
    icon: "test",
    path: "/",
    title: "Bot一覧",
  },
  {
    icon: "test",
    path: "/infos/invite",
    title: "Bot招待",
  },
  {
    icon: "test",
    path: "/infos/alive",
    title: "Bot死活管理",
  },
  {
    icon: "test",
    path: "/infos/option",
    title: "運用設定",
  },
  {
    icon: "test",
    path: "/infos/word_option",
    title: "検索ワード設定",
  },
  {
    icon: "test",
    path: "/infos/img_amazon",
    title: "画像管理-amazon",
  },
  {
    icon: "test",
    path: "/infos/img_itunes",
    title: "画像管理-itunes",
  },
  {
    icon: "test",
    path: "/infos/img_other",
    title: "画像管理-other",
  },
  {
    icon: "test",
    path: "/infos/earn",
    title: "稼ぎ記録",
  },
];

const Nav: NextPage = () => {
  return (
    <>
    <section className={styles.container}>
      <ul className={styles.contents}>
        {INFOS.map((topic, index) => {
          return (
            <Link href={`${topic.path}`} key={index}>
              <a>
                <li>
                  <span>
                    <Image
                      src={`/img/infoIcons/${topic.icon}.png`}
                      alt={`${topic.title} icon`}
                      loading="eager"
                      width={15}
                      height={15}
                      priority
                    />
                  </span>
                  <span>{topic.title}</span>
                </li>
              </a>
            </Link>
          );
        })}
      </ul>
    </section>
  </>
  );
};

export default Nav;