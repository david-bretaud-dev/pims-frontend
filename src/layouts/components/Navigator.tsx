import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonsGroup } from '@codegouvfr/react-dsfr/ButtonsGroup';

import { useScrollToTop } from '../utils';

type Props = {
	currentStep: number;
	setCurrentStep: Dispatch<SetStateAction<number>>;
	isNavigateNextLocked: boolean;
	setIsNavigateNextLocked: (nextValue: boolean) => void;
};

export default function Navigator(props: Props) {
	const {
		currentStep,
		setCurrentStep,
		isNavigateNextLocked,
		setIsNavigateNextLocked,
	} = props;

	const { t } = useTranslation('common');

	const scrollToTop = useScrollToTop();

	const setNextCurrentStep = (nextStep: number) => {
		setCurrentStep(nextStep);
		scrollToTop();
	};

	return (
		<ButtonsGroup
			alignment="right"
			buttonsEquisized
			buttonsIconPosition="left"
			buttonsSize="medium"
			inlineLayoutWhen="always"
			buttons={[
				{
					children: t('go_previous_step'),
					iconId: 'fr-icon-arrow-left-s-line',
					priority: 'secondary',
					type: 'button',
					onClick: () => {
						setIsNavigateNextLocked(false); // Reset
						setNextCurrentStep(currentStep - 1);
					},
					disabled: currentStep === 1,
				},
				{
					children: t('go_next_step'),
					iconId: 'fr-icon-arrow-right-s-line',
					priority: 'primary',
					type: 'button',
					onClick: () => {
						setNextCurrentStep(currentStep + 1);
					},
					disabled: isNavigateNextLocked || currentStep === 5,
				},
			]}
			className="fr-mt-10v"
			data-fr-analytics-rating
			id="pims-layouts__button-navigator"
		/>
	);
}
