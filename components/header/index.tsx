import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"

function toggle(state:any) {
  if (state.toggle === "on"){
    state.setToggle("off")
  }
  else{
    state.setToggle("on")
  }
}

function Header(props: any) {
  const { data: session } = useSession()

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header__icon} >
          <button onClick={() => toggle(props.state)}>
            <Image
              src="/img/headerIcon/menu.png"
              alt="menu icon"
              loading="eager"
              width={35}
              height={35}
              priority
            />
          </button>
        </div>
        <h1 style={{ letterSpacing: "1px", textAlign: "left" }}>
          <Link href="/">
            <a>
              <span style={{ fontWeight: 250 }}>Simple</span>
              <span style={{ fontWeight: 100 }}>News</span>
            </a>
          </Link>
        </h1>
        {function f() {
          if (session) {
            return (
              <>
                <button onClick={() => signOut()}>Sign out</button>
              </>
            )
          }
          return (
            <>
              <button onClick={() => signIn()}>Sign in</button>
            </>
          )
        }()
        }
      </header>
    </section>
  );
}

export default Header;