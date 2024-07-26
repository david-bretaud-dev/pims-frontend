import { useTranslation } from 'react-i18next';
import { Checkbox } from '@codegouvfr/react-dsfr/Checkbox';

type Props = {
	kitListChecked: boolean;
	setKitListChecked: (nextValue: boolean) => void;
};

export default function EmergencyKitListing(props: Props) {
	const { t } = useTranslation('emergency_kit_screen');

	return (
		<div>
			<p>{t('kit_listing.title')}</p>
			<ol>
				{[...Array(14).keys()].map((value) => (
					<li key={`kit-listing-item-${value}`}>
						{t(`kit_listing.items.item_${value + 1}`)}
					</li>
				))}
			</ol>
			<Checkbox
				options={[
					{
						label: t('kit_listing.checkbox'),
						nativeInputProps: {
							checked: props.kitListChecked,
							onChange: (e) => props.setKitListChecked(e.currentTarget.checked),
						},
					},
				]}
			/>
		</div>
	);
}