import style from "./nav-bar.module.css";

function NavBar() {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.nav__left}>
            <a href="https://vaults.breadarb.finance"><img src="/images/bread-logo.png" alt="bread-logo" className="w-32" /></a>
          </div>
          <div className={style.nav__right}>
            <button className={`${style.connect_wallet}`}>
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
