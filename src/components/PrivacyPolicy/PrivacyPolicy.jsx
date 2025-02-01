import React from 'react';
import s from './PrivacyPolicy.module.scss';
import Title from '../common/Title/Title';

const PrivacyPolicy = () => {
	return (
		<div className={s.privacy}>
			<div className={s.privacyWrapper}>
				<Title title='PrivacyPolicy' />
				<p className={s.privacyDescription}>
					Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a,
					gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac
					urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat
					tortor lacus, ac sodales lectus placerat quis.{' '}
				</p>
				<div className={s.blockDescription}>
					<h2 className={s.privacySubTitle}>Security</h2>
					<p className={s.privacyDescription}>
						Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a,
						gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque.
					</p>
				</div>
				<div className={s.blockDescription}>
					<h2 className={s.privacySubTitle}>Cookies</h2>
					<ul>
						<li className={s.privacyDescription}>
							Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin.
						</li>
						<li className={s.privacyDescription}>
							Nam fringilla molestie velit, eget pellentesque risus scelerisque a
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
