import Head from "next/head";
import styles from "../../../styles/profileRecruitment.module.scss";
import Navbar from "@/components/organism/Navbar";
import Footer from "@/components/organism/Footer";
import Louis from "../../../images/Louis.jpg";
import Mail from "../../../images/mail.png";
import Instagram from "../../../images/instagram.png";
import Github from "../../../images/github.jpg";
import Gitlab from "../../../images/gitlab.jpg";
import Porto1 from "../../../images/Portofolio/porto1.jpg";
import Porto2 from "../../../images/Portofolio/porto2.jpg";
import Porto3 from "../../../images/Portofolio/porto3.jpg";
import Porto4 from "../../../images/Portofolio/porto4.jpg";
import Porto5 from "../../../images/Portofolio/porto5.jpg";
import Porto6 from "../../../images/Portofolio/porto6.jpg";
import { useRouter } from "next/router";
import axios from "axios";
import React from "react";

export default function ProfileRecruitment(props) {
  const [profile, setProfile] = React.useState(props.jobList.data[0]);
  return (
    <>
      <Head>
        <title>Profile | Hire Job</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div className={styles.content}>
          <div className="container text-center">
            <div className="row">
              <div className="col-4">
                <div className={`border ${styles.borderLeft}`}>
                  <img src={profile.user.photo_profile} />
                  <h2>{profile.user.fullname}</h2>
                  <p className={styles.role}>{profile.job}</p>
                  <p className={styles.job}>Freelancer</p>
                  <p className={styles.bio}>{profile.description}</p>
                  <button type="button" className={styles.button}>
                    Hire
                  </button>
                  <h4>Skills</h4>
                  <div className="row">
                    <button type="button" className={styles.skill} disabled>
                      PHP
                    </button>
                    <button type="button" className={styles.skill} disabled>
                      Javascript
                    </button>
                    <button type="button" className={styles.skill} disabled>
                      HTML
                    </button>
                  </div>
                  <div className={`container text-center ${styles.contact}`}>
                    <div className="row row-cols-auto">
                      <div className={`col ${styles.icon}`}>
                        <img src={Mail.src} />
                      </div>
                      <div className={`col ${styles.account}`}>
                        Louistommo@gmail.com
                      </div>
                    </div>
                    <div className="row row-cols-auto">
                      <div className={`col ${styles.icon}`}>
                        <img src={Instagram.src} />
                      </div>
                      <div className={`col ${styles.account}`}>@Louist91</div>
                    </div>
                    <div className="row row-cols-auto">
                      <div className={`col ${styles.icon}`}>
                        <img src={Github.src} />
                      </div>
                      <div className={`col ${styles.account}`}>@Louistommo</div>
                    </div>
                    <div className="row row-cols-auto">
                      <div className={`col ${styles.icon}`}>
                        <img src={Gitlab.src} />
                      </div>
                      <div className={`col ${styles.account}`}>
                        @Louistommo91
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className={`border ${styles.borderRight}`}>
                  <ul className={`nav nav-pills ${styles.navBar}`}>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Portofolio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Pengalaman Kerja
                      </a>
                    </li>
                  </ul>
                  <div className="container text-center">
                    <div className="row">
                      <div className={`col-3 ${styles.porto}`}>
                        <img src={Porto1.src} />
                        <p>Reminder App</p>
                      </div>
                      <div className={`col-3 ${styles.porto}`}>
                        <img src={Porto2.src} />
                        <p>Social Media App</p>
                      </div>
                      <div className={`col-3 ${styles.porto}`}>
                        <img src={Porto3.src} />
                        <p>Project Management Web</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className={`col-3 ${styles.porto}`}>
                        <img src={Porto4.src} />
                        <p>Reminder App</p>
                      </div>
                      <div className={`col-3 ${styles.porto}`}>
                        <img src={Porto5.src} />
                        <p>Social Media App</p>
                      </div>
                      <div className={`col-3 ${styles.porto}`}>
                        <img src={Porto6.src} />
                        <p>Project Management Web</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.id;
  const job = await axios.get(
    `${process.env.NEXT_PUBLIC_URL_BACKEND}/v1/user/detail/${id}`
  );
  const jobData = job.data;
  return {
    props: {
      jobList: jobData,
    },
  };
}
