 import styles from "../../styles/components/listjob.module.scss"
import Louis from "../../images/Louis.jpg"
import axios from "axios"
import React from "react"

function listJob(props){
  console.log(props);
  const {
    listData:{
      jobList: {
        data: { rows, count },
      },
    }
      
  } = props;
    return(
        <>
         <div className={styles.content}>
            <div class={`row ${styles.data}`}>
              <div class="col-6">
                <div class="row row-cols-auto">
                  <img src={Louis.src} />
                  <div class={`col ${styles.identity}`}>
                    <h4>Louis Tomlinson</h4>
                    <p>Web Development</p>
                    <div className="row">
                      <button type="button" class={styles.skill} disabled>
                        PHP
                      </button>
                      <button type="button" class={styles.skill} disabled>
                  </button>
                      <button type="button" class={styles.skill} disabled>
                        HTML
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2 offset-4">
                <button type="button" class={`btn ${styles.open}`}>
                  Lihat Profile
                </button>
              </div>
            </div>
            <div class={`row ${styles.data}`}>
              <div class="col-6">
                <div class="row row-cols-auto">
                  <img src={Louis.src} />
                  <div class={`col ${styles.identity}`}>
                    <h4>Louis Tomlinson</h4>
                    <p>Web Development</p>
                    <div className="row">
                      <button type="button" class={styles.skill} disabled>
                        PHP
                      </button>
                      <button type="button" class={styles.skill} disabled>
                        Javascript
                      </button>
                      <button type="button" class={styles.skill} disabled>
                        HTML
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2 offset-4">
                <button type="button" class={`btn ${styles.open}`}>
                  Lihat Profile
                </button>
              </div>
            </div>
            <div class={`row ${styles.data}`}>
              <div class="col-6">
                <div class="row row-cols-auto">
                  <img src={Louis.src} />
                  <div class={`col ${styles.identity}`}>
                    <h4>Louis Tomlinson</h4>
                    <p>Web Development</p>
                    <div className="row">
                      <button type="button" class={styles.skill} disabled>
                        PHP
                      </button>
                      <button type="button" class={styles.skill} disabled>
                        Javascript
                      </button>
                      <button type="button" class={styles.skill} disabled>
                        HTML
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2 offset-4">
                <button type="button" class={`btn ${styles.open}`}>
                  Lihat Profile
                </button>
              </div>
            </div>
            <div class={`row ${styles.data}`}>
              <div class="col-6">
                <div class="row row-cols-auto">
                  <img src={Louis.src} />
                  <div class={`col ${styles.identity}`}>
                    <h4>Louis Tomlinson</h4>
                    <p>Web Development</p>
                    <div className="row">
                      <button type="button" class={styles.skill} disabled>
                        PHP
                      </button>
                      <button type="button" class={styles.skill} disabled>
                        Javascript
                      </button>
                      <button type="button" class={styles.skill} disabled>
                        HTML
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2 offset-4">
                <button type="button" class={`btn ${styles.open}`}>
                  Lihat Profile
                </button>
              </div>
            </div>
            <div class={`row ${styles.data}`}>
              <div class="col-6">
                <div class="row row-cols-auto">
                  <img src={Louis.src} />
                  <div class={`col ${styles.identity}`}>
                    <h4>Louis Tomlinson</h4>
                    <p>Web Development</p>
                    <div className="row">
                      <button type="button" class={styles.skill} disabled>
                        PHP
                      </button>
                      <button type="button" class={styles.skill} disabled>
                        Javascript
                      </button>
                      <button type="button" class={styles.skill} disabled>
                        HTML
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2 offset-4">
                <button type="button" class={`btn ${styles.open}`}>
                  Lihat Profile
                </button>
              </div>
            </div>
            <div class={`row ${styles.data}`}>
              <div class="col-6">
                <div class="row row-cols-auto">
                  <img src={Louis.src} />
                  <div class={`col ${styles.identity}`}>
                    <h4>Louis Tomlinson</h4>
                    <p>Web Development</p>
                    <div className="row">
                      <button type="button" class={styles.skill} disabled>
                        PHP
                      </button>
                      <button type="button" class={styles.skill} disabled>
                        Javascript
                      </button>
                      <button type="button" class={styles.skill} disabled>
                        HTML
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2 offset-4">
                <button type="button" class={`btn ${styles.open}`}>
                  Lihat Profile
                </button>
              </div>
            </div>
          </div>
        </>
    )
}



// export async function getServerSideProps() {
//   const jobList = await axios.get(
//     `${process.env.NEXT_PUBLIC_API_URL}/v1/user/list?limit=10&page=1`
//   );
//   const convertData = jobList.data;

//   return {
//     props: {
//       jobList: convertData,
//     }, // will be passed to the page component as props
//   };
// }

export default listJob