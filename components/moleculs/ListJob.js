import styles from "../../styles/components/listjob.module.scss";
import Louis from "../../images/Louis.jpg";
import axios from "axios";
import React from "react";
import Link from "next/link";

function listJob(props) {
  const {
    listData: {
      jobList: {
        data: { rows, count },
      },
    },
  } = props;
  return (
    <>
      <div className={styles.content}>
        {rows?.map((item, key) => (
          <React.Fragment key={key}>
            <div className={`row ${styles.data}`}>
              <div className="col-6">
                <div className="row row-cols-auto">
                  <img
                    src={item?.["user.photo_profile"]}
                    style={{ width: "200px", height: "150px" }}
                  />
                  <div className={`col ${styles.identity}`}>
                    <h4>{item?.["user.fullname"]}</h4>
                    <p>{item?.job}</p>
                    {item?.skills?.length !== 0 ? (
                      <React.Fragment>
                        {item?.skills
                          .map((_item) => (
                            <span
                              className={`badge text-bg-warning mx-1 ${styles.skill}`}
                              key={_item}
                            >
                              {_item}
                            </span>
                          ))
                          .slice(0, 3)}

                        <span
                          className={`badge text-bg-warning mx-1 ${styles.skill}`}
                        >
                          +{item?.skills.slice(3, item?.skills?.length)?.length}
                        </span>
                      </React.Fragment>
                    ) : null}
                    {/* {item?.skills?.slice(0,3).map((_item)=>(
                           
                           <div className="row"key={_item}>
                            {_item}
                            {item?.skills.slice(3,item?.skills?.length)?.length?(
                             <button type="button" class={styles.skill} disabled>
                               +{item?.skills.slice(3,item?.skills?.length)?.length}
                             </button>
                            ):null}
                           </div>
                           ))} */}
                    {/* //      <button type="button" class={styles.skill} disabled>
                        //  </button>
                        //      <button type="button" class={styles.skill} disabled>
                        //        HTML
                        //      </button> */}
                  </div>
                </div>
              </div>
              <div className="col-2 offset-4">
                <Link href={`/auth/recruitment/${item.id}`}>
                  <button type="button" class={`btn ${styles.open}`}>
                    Lihat Profile
                  </button>
                </Link>
              </div>
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default listJob;
