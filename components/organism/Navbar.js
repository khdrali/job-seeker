import Image from "../../images/peworld.png";
import Bell from "../../images/bell.jpg";
import Mail from "../../images/mail.png";
import Profile from "../../images/profile.png";
import style from "../../styles/components/navbar.module.scss";

export default function Navbar() {
  return (
    <>
      <main>
        <div className="container">
          <div class={`row justify-content-between ${style.navPad}`}>
            <div class="col-3">
              <img src={Image.src} width="100px" />
            </div>
            <div class="col-3">
              <div class="row row-cols-auto">
                <div class="col">
                  <img src={Bell.src} width="30px" />
                </div>
                <div class="col">
                  <img src={Mail.src} width="30px"></img>
                </div>
                <div class="col">
                  <img src={Profile.src} width="30px"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.nav}>
          <div className="container">
            <h2>Top Jobs</h2>
          </div>
        </div>
      </main>
    </>
  );
}
