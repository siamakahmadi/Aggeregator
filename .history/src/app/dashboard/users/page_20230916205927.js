import React from 'react'
import Styles from './posts.module.scss'
import PageHeader from '../'
export default function Page() {
  return (
    <div>
      
      <PageHeader title="Posts" description="View your team’s trades and transactions.">
          <a href="/dashboard/posts/newpost">
            <Btn title="add new site" hasIcon={true} type="primary">
              <AddIcon />
            </Btn>
          </a>
        </PageHeader>

    </div>
  )
}
