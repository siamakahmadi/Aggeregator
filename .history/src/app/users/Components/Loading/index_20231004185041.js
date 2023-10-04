import React from 'react'
import style from './style.module.scss'
export default function index(props) {
  return (
    <div className={style.background}>
        <div className={style.container}>
            <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none">
<path d="M73 38C73 45.151 70.8096 52.1304 66.7235 57.999C62.6374 63.8677 56.8517 68.3438 50.1451 70.8253C43.4384 73.3067 36.1326 73.6742 29.2107 71.8784C22.2889 70.0827 16.0832 66.2097 11.4287 60.7809C6.77427 55.352 3.89443 48.6276 3.17672 41.5127C2.45902 34.3978 3.9379 27.2338 7.41436 20.9848C10.8908 14.7357 16.198 9.70141 22.6218 6.55942C29.0455 3.41743 36.2776 2.31849 43.3447 3.41049" stroke="url(#paint0_linear_983_7060)" stroke-width="5" stroke-linecap="round"/>
<defs>
<linearGradient id="paint0_linear_983_7060" x1="38" y1="3" x2="62.2308" y2="23.3846" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
            </span>
            <div className={style.title}>
                {props.title}
            </div>
        </div>
    </div>
  )
}
