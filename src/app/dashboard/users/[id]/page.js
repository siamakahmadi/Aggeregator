"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Styles from "../users.module.scss";
import PageHeader from "../../components/PageHeader/index";
import StatusLabel from "../../components/StatusLabel/index";
import TableItem from "../components/tableItem";
import Modal from "../../components/Modal/index";
import Http from "../../../../../Axios/Https";
import { toast } from "react-toastify";

export default function Page({ params }) {
  const router = useRouter();
  const https = new Http();
  const [users, setUsers] = useState();
  const [userDetail, setUserDetail] = useState();
  const [userTotal, setUserTotal] = useState();

  useEffect(() => {
    if (params.id === "list") {
      https
        .get("admin/user/index?paginate=20")
        .then((Response) => {
          setUsers(Response.data.data.data),
            setUserTotal(Response.data.data.total);
          toast("Users successfully featched");
        })
        .catch((error) => {
          toast(`we cant featched Users ${error}`);
        });
    } else {
      https
        .get(`admin/user/detail/${params.id}`)
        .then((Response) => {
          setUserDetail(Response.data.data);
        })
        .catch((error) => {
          toast(`user not found`);
          setInterval(() => {
            router.push("/dashboard/users/list");
          }, 3000);
        });
    }
  }, [https,params.id,router]);

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

  const tableItems = users ? (
    users.map((item) => (
      <TableItem
        key={item.id}
        link={item.id}
        name={item.name}
        onClick={() => handleSusspend(item.id)}
        email={item.email}
        date="date"
        id={item.id}
        status={item.is_premium === 0 ? "Free" : "Premium"}
        type={item.is_premium === 0 ? "Draft" : ""}
      />
    ))
  ) : (
    <>
      <div>Loading</div>
    </>
  );

  return (
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
          {params.id === "list" ? (
            <></>
          ) : (
            <Modal title={"Title"} onClickHandle={() => router.back()}></Modal>
          )}
          {tableItems}
        </div>
      </div>
    </div>
  );
}
