import Styles from "./tableItem.module.scss";
import StatusLabel from "../../components/StatusLabel/index";
import Link from "next/link";
import moment from "moment";

export default function tableItem(props) {
  const Time = moment(props.date).format("MMMM DD, YYYY");
  return (
    <div className={Styles.tableItems}>
      <div className={Styles.profile}>
        <div className={Styles.profileImage}>t</div>
        <div className={Styles.userName}>{props.name}</div>
      </div>
      <div className={Styles.email}>{props.email}</div>
      <div className={Styles.date}>{Time}</div>
      <div>
        <StatusLabel type={props.type} title={props.status} />
      </div>
      <div className={Styles.pointer} onClick={props.onClick}>
        {props.isSuspend ? (
          "susspend"
        ) : (
          <div className={Styles.susspendBtn}>Unsuspend</div>
        )}
      </div>
      <Link className={Styles.pointer} href="" onClick={props.getDetail}>
        <div onClick={props.openModal}>Detail</div>
      </Link>
    </div>
  );
}
