import Head from "next/head";
import styles from "../../styles/register.module.scss";

export default function Register() {
  return (
    <>
      <Head>
        <title>Register | Hire Job</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="container">
          <div className="row align-items-center">
            <div className={`col-6 ${styles.left}`}>
              <div className={styles.overlay}></div>
              <h1>
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </h1>
            </div>
            <div className={`col-5 offset-1 ${styles.right}`}>
              <h2>Halo, Pewpeople</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
              <form>
                <div className="mb-3">
                  <label
                    for="exampleInputName"
                    className={`form-label ${styles.label}`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${styles.but}`}
                    id="exampleInputName"
                    placeholder="Masukan Nama Anda"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleInputEmail1"
                    className={`form-label ${styles.label}`}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className={`form-control ${styles.but}`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Masukan Email Anda"
                  />
                  <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                  <label
                    for="exampleInputNoHandphone"
                    className={`form-label ${styles.label}`}
                  >
                    No. Handphone
                  </label>
                  <input
                    type="number"
                    className={`form-control ${styles.but}`}
                    id="exampleInputNoHandphone"
                    placeholder="Masukan No. Handphone Anda"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleInputPassword1"
                    className={`form-label ${styles.label}`}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${styles.but}`}
                    id="exampleInputPassword1"
                    placeholder="Masukan Password Anda"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleInputPassword1"
                    className={`form-label ${styles.label}`}
                  >
                    Konfirmasi Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${styles.but}`}
                    id="exampleInputPassword1"
                    placeholder="Masukan Konfirmasi Password Anda"
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className={`btn ${styles.butLog}`}>
                    Daftar
                  </button>
                </div>
              </form>
              <div className={styles.account}>
                Anda sudah punya akun? <span>Masuk disini</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
