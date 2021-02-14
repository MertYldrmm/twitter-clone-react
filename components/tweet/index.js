import React from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import styles from './style.module.css'

import Photo from '../photo'
import IconButton from '../icon-button'
import * as Icon from '../icons'

function Tweet({ name, slug, datetime, text }) {
  return (
    <article className={styles.tweet}>
      {/* avatar */}
      <div className={styles.avatar}>
        <Photo />
      </div>

      {/* body */}
      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.name}>{name}</span> <span>@{slug}</span> .{' '}
          <span>{formatDistanceToNowStrict(datetime)}</span>
        </header>

        <div className={styles.content}>{text}</div>

        <footer className={styles.footer}>
          {/* Reply */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Reply />
            </IconButton>
            <span>5</span>
          </div>

          {/* Retweet */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Retweet />
            </IconButton>
            <span>12</span>
          </div>

          {/* Like */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Like />
            </IconButton>
            <span>689</span>
          </div>

          {/* Share */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Share />
            </IconButton>
          </div>
        </footer>
      </div>
    </article>
  )
}

export default Tweet
