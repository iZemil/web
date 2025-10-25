import { format, intervalToDuration } from 'date-fns';
import * as React from 'react';

import { IJob } from './consts';
import styles from './styles.module.css';

function formatDateDifference(startDate: Date, endDate: Date = new Date()) {
	const duration = intervalToDuration({ start: startDate, end: endDate });

	const { years = 0, months = 0 } = duration;

	if (years === 0 && months === 0) {
		return '0 months';
	}

	if (years === 0) {
		return `${months} month${months !== 1 ? 's' : ''}`;
	}

	if (months === 0) {
		return `${years} year${years !== 1 ? 's' : ''}`;
	}

	return `${years} year${years !== 1 ? 's' : ''} and ${months} month${months !== 1 ? 's' : ''}`;
}

export const Job = (props: IJob) => {
	const date = (d: Date) => format(d, 'MMM yyyy');
	const { role, companyName, projectDesc, achievements, from, to, stack } = props;

	return (
		<div className={styles.job}>
			<h3 className={styles.jobRole}>{role}</h3>

			<div className={styles.jobSkills}>
				{stack.map((it, index) => (
					<span className={styles.jobSkill} key={`${it}-${index}`}>
						{it}
					</span>
				))}
			</div>

			<h4 className={styles.jobCompany}>
				{companyName}{' '}
				<div className={styles.jobDates}>
					{date(from)} – {date(to)}{' '}
					<span className={styles.jobDatesDistance}>({formatDateDifference(to, from)})</span>
				</div>
			</h4>
			<div className={styles.jobDesc}>{projectDesc}</div>

			<div className={styles.list}>
				{achievements.map((a, key) => (
					<li key={key}>{a}</li>
				))}
			</div>
		</div>
	);
};
