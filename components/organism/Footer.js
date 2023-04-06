import styles from "../../styles/components/footer.module.scss";
import Image from "../../images/image-footer.png";

export default function Footer() {
  return (
    <>
      <main className={styles.main}>
        <div className="container">
          <img src={Image.src} width="200px" />
          <p>
            Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit. In
            euismod ipsum et dui<br></br> rhoncus auctor.
          </p>
          <div className={styles.lineFooter}></div>
          <div className={`row justify-content-between ${styles.space}`}>
            <div className={`col-4 ${styles.copyRight}`}>
              2020 Pewworld. All right reserved
            </div>
            <div className="col-2">
              <div className="row row-cols-auto">
                <div className={`col ${styles.copyRight}`}>Email</div>
                <div className={`col ${styles.copyRight}`}>Telpon</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
