import Link from "next/link";
import styles from "./index.module.scss";
import Image from "next/image";
import classnames from "classnames";

const INFOS = [
  {
    icon: "01",
    path: "/",
    title: "Home",
  },
  {
    icon: "02",
    path: "/infos/info2",
    title: "未定02",
  },
  {
    icon: "03",
    path: "/infos/info3",
    title: "未定03",
  },
];

function Nav(props: any) {
  const statusClassNames = {
    toggleon: props.state.toggle === "on",
    toggleoff: props.state.toggle === "off"
  };
  return (
    <section className={classnames(statusClassNames) + " " + styles.container}>
      <ul className={styles.contents}>
        {INFOS.map((topic, index) => {
          return (
            <li key={index} >
              <Link href={`${topic.path}`}>
                <a>
                  <span>
                    <Image
                      src={`/img/navIcons/${topic.icon}.png`}
                      alt={`${topic.title} icon`}
                      loading="eager"
                      width={33}
                      height={33}
                      priority
                    />
                  </span>
                  <span>{topic.title}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>

  );
};

export default Nav;