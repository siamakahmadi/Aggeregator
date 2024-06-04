"use client";
import { useState, useEffect } from "react";
import Styles from "../users.module.scss";
import PageHeader from "../../components/PageHeader/index";
import StatusLabel from "../../components/StatusLabel/index";
import TableItem from "../components/tableItem";
import Modal from "../../components/Modal/index";
import Http from "../../../../../Axios/Https";
import { toast } from "react-toastify";
import SyncLoader from "react-spinners/SyncLoader";

import UserDetailModalContext from "../../api/context/IsUserDetailModal";
import moment from "moment";
export default function Page() {
  const https = new Http();
  const [users, setUsers] = useState();
  const [userTotal, setUserTotal] = useState();

  const [isUserDetailModal, setIsUserDetailModal] = useState();
  const [userDetailContent, setUserDetailContent] = useState();

  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    https
      .get("admin/user/index?paginate=200")
      .then((Response) => {
        setUsers(Response.data.data.data),
          setUserTotal(Response.data.data.total);
        toast("Users successfully featched");
      })
      .catch((error) => {
        toast(`we cant featched Users ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleSusspend(id) {
    https
      .get(`admin/user/action/${id}`)
      .then((Response) => {
        setUsers(Response.data.data.data),
          toast("Users successfully susspended");
      })
      .catch((error) => {
        toast(`we cant sesspended User ${error}`);
      });
  }

  function getUserDetail(id) {
    setLoading(true);
    https
      .get(`admin/user/detail/${id}`)
      .then((Response) => {
        setUserDetailContent(Response.data.data);
      })
      .catch((error) => {
        toast(`we cant Fetch User deatil ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const tableItems = users ? (
    users.map((item) => (
      <TableItem
        key={item.id}
        getDetail={() => getUserDetail(item.id)}
        name={item.name}
        openModal={() => setIsUserDetailModal(true)}
        isSuspend={item.is_suspend}
        onClick={() => handleSusspend(item.id)}
        email={item.email}
        date={item.created_at}
        id={item.id}
        status={item.is_premium === 0 ? "Free" : "Premium"}
        type={item.is_premium === 0 ? "Draft" : ""}
      />
    ))
  ) : (
    <div className={Styles.loading}>
      <SyncLoader color="#111111" size={6} />
    </div>
  );

  return (
    <UserDetailModalContext.Provider
      value={{
        value: isUserDetailModal,
        setValue: setIsUserDetailModal,
      }}
    >
      <div>
        <PageHeader title="Users" description="View all your users" />
        <div className={Styles.table}>
          <div className={Styles.tableHeader}>
            <div className={Styles.tableTitle}>
              <span>List Of Users</span>
              <StatusLabel title={`${userTotal} Users`} />
            </div>
            <div className={Styles.rowTitles}>
              <div className={Styles.rowItem}>Name</div>
              <div className={Styles.rowItem}>Email</div>
              <div className={Styles.rowItem}>DateRegistered</div>
              <div className={Styles.rowItem}>Status</div>
              <div className={Styles.rowItem}></div>
              <div className={Styles.name}></div>
            </div>
          </div>
          <div className={Styles.tableBody}>
            {isUserDetailModal && (
              <Modal
                title={"Title"}
                onClickHandle={() => setIsUserDetailModal(false)}
              >
                {loading ? (
                  <div className={Styles.loading}>
                    <SyncLoader color="#111111" size={6} />
                  </div>
                ) : (
                  <div className={Styles.itemsContainer}>
                    <div className={Styles.item}>
                      <div>User Name :</div>
                      <span>{userDetailContent.name}</span>
                    </div>
                    <div className={Styles.item}>
                      <div>Emsil : </div>
                      <span>{userDetailContent.email}</span>
                    </div>
                    <div className={Styles.item}>
                      <div>Google Id :</div>
                      <span>
                        {userDetailContent.google_id === null
                          ? "Not available"
                          : userDetailContent.google_id}
                      </span>
                    </div>
                    <div className={Styles.item}>
                      <div>Status:</div>
                      <span>
                        {userDetailContent.is_premium ? "Premium" : "Free"}
                      </span>
                    </div>

                    <div className={Styles.item}>
                      <div>Sign Up Date :</div>
                      <span>
                        {moment(userDetailContent.created_at).format(
                          "MMMM DD, YYYY, hh:mm:ss"
                        )}
                      </span>
                    </div>
                    <div className={Styles.item}>
                      <div>Last user Update :</div>
                      <span>
                        {moment(userDetailContent.updated_at).format(
                          "MMMM DD, YYYY, hh:mm:ss"
                        )}
                      </span>
                    </div>
                    <div className={Styles.item}>
                      <div>User Is Susspend? :</div>
                      <span>{userDetailContent.is_suspend ? "Yes" : "No"}</span>
                    </div>
                  </div>
                )}
              </Modal>
            )}
            {tableItems}
          </div>
        </div>
      </div>
    </UserDetailModalContext.Provider>
  );
}
