import React from 'react'
import Styles from './posts.module.scss'
import PageHeader from '../components/PageHeader/index'
export default function Page() {
  return (
    <div>
      
      <PageHeader title="Posts" description="View your team’s trades and transactions.">
          <a href="/dashboard/posts/newpost">
          </a>
        </PageHeader>

    </div>
  )
}
