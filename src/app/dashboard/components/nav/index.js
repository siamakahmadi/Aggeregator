import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";
export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.leftSide}>
          <div className={styles.logo}>
            <Link href={"/dashboard"}>Admin</Link>
          </div>
          <div className={styles.linkList}>
            <div className={styles.linkItem}>
              <Link href={"/dashboard/posts"}>Posts</Link>
            </div>
            <div className={styles.linkItem}>
              <Link href={"/dashboard/users"}>Users</Link>
            </div>
            <div className={styles.linkItem}>
              <Link href={"/dashboard/category/all"}>Category</Link>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <Link className={styles.settings} href="/dashboard/settings">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_605_4959)">
                <path
                  d="M10.0013 12.4993C11.382 12.4993 12.5013 11.3801 12.5013 9.99935C12.5013 8.61864 11.382 7.49935 10.0013 7.49935C8.62059 7.49935 7.5013 8.61864 7.5013 9.99935C7.5013 11.3801 8.62059 12.4993 10.0013 12.4993Z"
                  stroke="#667085"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.6074 12.2721C15.5065 12.5006 15.4764 12.754 15.521 12.9998C15.5656 13.2455 15.6827 13.4723 15.8574 13.6509L15.9028 13.6963C16.0437 13.837 16.1554 14.0041 16.2317 14.1881C16.3079 14.372 16.3472 14.5692 16.3472 14.7683C16.3472 14.9674 16.3079 15.1646 16.2317 15.3485C16.1554 15.5324 16.0437 15.6995 15.9028 15.8403C15.7621 15.9811 15.595 16.0929 15.4111 16.1691C15.2271 16.2454 15.03 16.2846 14.8308 16.2846C14.6317 16.2846 14.4346 16.2454 14.2506 16.1691C14.0667 16.0929 13.8996 15.9811 13.7589 15.8403L13.7134 15.7948C13.5349 15.6202 13.3081 15.503 13.0624 15.4584C12.8166 15.4139 12.5631 15.444 12.3346 15.5448C12.1106 15.6408 11.9195 15.8003 11.7849 16.0035C11.6503 16.2068 11.578 16.445 11.5771 16.6887V16.8175C11.5771 17.2194 11.4174 17.6048 11.1333 17.8889C10.8491 18.1731 10.4638 18.3327 10.0619 18.3327C9.66007 18.3327 9.27468 18.1731 8.99053 17.8889C8.70639 17.6048 8.54676 17.2194 8.54676 16.8175V16.7493C8.54089 16.4986 8.45973 16.2554 8.31381 16.0514C8.1679 15.8474 7.96398 15.692 7.72858 15.6054C7.50008 15.5046 7.24661 15.4745 7.00086 15.519C6.7551 15.5636 6.52833 15.6808 6.34979 15.8554L6.30433 15.9009C6.16362 16.0417 5.99651 16.1535 5.81258 16.2297C5.62864 16.306 5.43148 16.3452 5.23236 16.3452C5.03325 16.3452 4.83609 16.306 4.65215 16.2297C4.46821 16.1535 4.30111 16.0417 4.16039 15.9009C4.01952 15.7601 3.90776 15.593 3.83151 15.4091C3.75527 15.2252 3.71602 15.028 3.71602 14.8289C3.71602 14.6298 3.75527 14.4326 3.83151 14.2487C3.90776 14.0647 4.01952 13.8976 4.16039 13.7569L4.20585 13.7115C4.3805 13.5329 4.49765 13.3062 4.54221 13.0604C4.58677 12.8146 4.55669 12.5612 4.45585 12.3327C4.35982 12.1086 4.20036 11.9175 3.99711 11.7829C3.79386 11.6483 3.55569 11.5761 3.31191 11.5751H3.18312C2.78128 11.5751 2.39589 11.4155 2.11175 11.1313C1.8276 10.8472 1.66797 10.4618 1.66797 10.06C1.66797 9.65811 1.8276 9.27273 2.11175 8.98858C2.39589 8.70444 2.78128 8.5448 3.18312 8.5448H3.2513C3.50206 8.53894 3.74525 8.45777 3.94926 8.31186C4.15327 8.16594 4.30866 7.96203 4.39524 7.72662C4.49609 7.49813 4.52617 7.24466 4.48161 6.9989C4.43705 6.75315 4.31989 6.52638 4.14524 6.34783L4.09979 6.30238C3.95891 6.16166 3.84716 5.99456 3.77091 5.81062C3.69466 5.62669 3.65541 5.42952 3.65541 5.23041C3.65541 5.0313 3.69466 4.83413 3.77091 4.6502C3.84716 4.46626 3.95891 4.29916 4.09979 4.15844C4.2405 4.01757 4.40761 3.90581 4.59154 3.82956C4.77548 3.75331 4.97264 3.71407 5.17176 3.71407C5.37087 3.71407 5.56803 3.75331 5.75197 3.82956C5.93591 3.90581 6.10301 4.01757 6.24373 4.15844L6.28918 4.20389C6.46773 4.37854 6.6945 4.4957 6.94025 4.54026C7.186 4.58482 7.43947 4.55474 7.66797 4.45389H7.72858C7.95264 4.35786 8.14374 4.19841 8.27834 3.99516C8.41295 3.79191 8.48518 3.55373 8.48615 3.30996V3.18117C8.48615 2.77932 8.64578 2.39394 8.92993 2.10979C9.21407 1.82565 9.59946 1.66602 10.0013 1.66602C10.4031 1.66602 10.7885 1.82565 11.0727 2.10979C11.3568 2.39394 11.5165 2.77932 11.5165 3.18117V3.24935C11.5174 3.49313 11.5897 3.7313 11.7243 3.93455C11.8589 4.1378 12.05 4.29726 12.274 4.39329C12.5025 4.49413 12.756 4.52422 13.0017 4.47966C13.2475 4.4351 13.4743 4.31794 13.6528 4.14329L13.6983 4.09783C13.839 3.95696 14.0061 3.8452 14.19 3.76896C14.374 3.69271 14.5711 3.65346 14.7702 3.65346C14.9694 3.65346 15.1665 3.69271 15.3505 3.76896C15.5344 3.8452 15.7015 3.95696 15.8422 4.09783C15.9831 4.23855 16.0948 4.40565 16.1711 4.58959C16.2473 4.77353 16.2866 4.97069 16.2866 5.1698C16.2866 5.36892 16.2473 5.56608 16.1711 5.75002C16.0948 5.93395 15.9831 6.10106 15.8422 6.24177L15.7968 6.28723C15.6221 6.46577 15.505 6.69254 15.4604 6.9383C15.4158 7.18405 15.4459 7.43752 15.5468 7.66602V7.72662C15.6428 7.95069 15.8022 8.14179 16.0055 8.27639C16.2087 8.41099 16.4469 8.48323 16.6907 8.4842H16.8195C17.2213 8.4842 17.6067 8.64383 17.8909 8.92798C18.175 9.21212 18.3346 9.59751 18.3346 9.99935C18.3346 10.4012 18.175 10.7866 17.8909 11.0707C17.6067 11.3549 17.2213 11.5145 16.8195 11.5145H16.7513C16.5075 11.5155 16.2694 11.5877 16.0661 11.7223C15.8629 11.8569 15.7034 12.048 15.6074 12.2721Z"
                  stroke="#667085"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_605_4959">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <div className={styles.profile}>SA</div>
        </div>
      </div>
    </div>
  );
}
