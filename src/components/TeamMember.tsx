import React from 'react';
import styles from './TeamMember.module.css';

const TeamMemberCard = ({
  memberName,
  avatar,
  role,
}: {
  memberName: string;
  avatar: string;
  role: string;
}) => (
  <div className={`col col--4 ${styles.card}`}>
    <div className="text--center">
      <img className={styles.avtr} alt={memberName} src={avatar} />
    </div>
    <div className="text--center padding-horiz--md">
      <h2>{memberName}</h2>
      <p>{role}</p>
    </div>
  </div>
);

export default TeamMemberCard;
