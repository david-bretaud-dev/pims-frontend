import { useTranslation } from 'react-i18next';
import { Accordion } from '@codegouvfr/react-dsfr/Accordion';

import { Container } from '@/components';

import { RISK_LIST } from './risks/constants';
import RiskList from './risks/RiskList';

export default function DisplayRiskListAll() {
	const { t } = useTranslation('information_screen');

	return (
		<Container>
			<Accordion label={t('see_more_risks')}>
				<RiskList
					riskIdList={RISK_LIST.map((item) => item.georisqueApiIdentifier)}
				/>
			</Accordion>
		</Container>
	);
}
