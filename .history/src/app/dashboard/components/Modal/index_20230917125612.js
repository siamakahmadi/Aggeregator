import React from 'react'
import styles from './style.module.scss'
export default function index() {
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>Add New Stack</div>
          <div className={styles.closeIcon} onClick={() => addStack ? setAddStack(false) : setAddStack(true)}>
            <CloseIcon />
          </div>
        </div>
        <div className={styles.body}>
          <Input title="Menu Title" placeholder="Add a title for category" />
          <Input title="Page Title" placeholder="This title will show on page header" />
          <Input title="Page Description" placeholder="This description will show on page header" />
          Seo Configration
          <Input title="Page tag" placeholder="This is the title " />
          <Input title="Meta Description" placeholder="This is the Meta description" />
          <div className={styles.buttons}>
            <div className={styles.discardBtn} onClick={() => addStack ? setAddStack(false) : setAddStack(true)} >
              Discard
            </div>
            <div className={styles.saveBtn}>
              Save
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
