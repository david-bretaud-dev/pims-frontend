import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Download } from '@codegouvfr/react-dsfr/Download';
import { Button } from '@codegouvfr/react-dsfr/Button';

import { AppContext } from '../../providers';
import { Container } from '@/components';

export default function FinalActions() {
	const { t } = useTranslation('final_screen');
	const { apiResponse } = useContext(AppContext);

	const size =
		apiResponse.file_size_mo > 1
			? `${apiResponse.file_size_mo.toFixed(2)} Mo`
			: `${apiResponse.file_size_ko.toFixed(2)} ko`;

	const handleCopyToClipboard = () => {
		navigator.clipboard
			.writeText(apiResponse.pims_url)
			.then(() => {
				alert(t('actions.copyToClipboard'));
			})
			.catch((error) => {
				console.error('Failed to copy: ', error);
			});
	};
	return (
		<Container>
			<p>{t('actions.introducer')}</p>
			<Download
				details={`PDF - ${size}`}
				label={t('actions.download')}
				linkProps={{
					href: apiResponse.pims_url,
					target: '_blank',
					rel: 'noopener noreferrer',
				}}
				data-fr-analytics-rating
				id="pims-step-6__download-file"
			/>
			<Button
				onClick={handleCopyToClipboard}
				size="medium"
				priority="primary"
				data-fr-analytics-rating
				id="pims-step-6__button-share-link"
			>
				{t('actions.share')}
			</Button>
		</Container>
	);
}
