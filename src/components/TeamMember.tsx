import React from 'react';
import styles from './TeamMember.module.css';

const TeamMenberCard = ({
  menberName,
  avatar,
  role,
}: {
  menberName: string;
  avatar: string;
  role: string;
}) => (
  <div className={`col col--4 ${styles.card}`}>
    <div className="text--center">
      <img className={styles.avtr} alt={menberName} src={avatar} />
    </div>
    <div className="text--center padding-horiz--md">
      <h2>{menberName}</h2>
      <p>{role}</p>
    </div>
  </div>
);

export default TeamMenberCard;
