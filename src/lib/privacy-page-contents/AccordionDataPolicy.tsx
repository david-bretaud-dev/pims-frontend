import { type TFunction } from 'i18next';
import { Trans } from 'react-i18next';

const FRONTEND_DOMAIN = import.meta.env.VITE_APP_DOMAIN;
const FRONTEND_URL = import.meta.env.VITE_APP_URL;

type Props = {
	t: TFunction;
};

export default function AccordionDataPolicy(props: Props) {
	const { t } = props;

	const rightItemList = [
		'right_access',
		'right_information',
		'right_rectification',
		'right_deletion',
		'right_limit_treatment',
		'right_opposition',
	];

	return (
		<div>
			<h3>{t('data_policy.object.title')}</h3>
			<p>
				<Trans
					t={t}
					i18nKey="data_policy.object.content_1"
					components={{
						k1: (
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={FRONTEND_URL}
							/>
						),
					}}
					values={{ domain: FRONTEND_DOMAIN }}
				/>
			</p>
			<p>{t('data_policy.object.content_2')}</p>
			<h3>{t('data_policy.rights.title')}</h3>
			<p>{t('data_policy.rights.law')}</p>
			<ul>
				{rightItemList.map((i18nKey) => (
					<li>
						<b>{t(`data_policy.rights.${i18nKey}.title`)}</b>
						<br />
						<span>{t(`data_policy.rights.${i18nKey}.description`)}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
