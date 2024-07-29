import { clsx } from 'clsx';

type Props = {
	children: React.ReactNode;
	className?: string;
	withoutMarginBottom?: boolean;
	flexboxAlignment?: 'center' | 'start' | 'responsive';
	flexboxDirection?: 'column' | 'row' | 'responsive';
};

export default function Container(props: Props) {
	return (
		<div
			className={clsx(props.className || '', {
				'fr-mb-10v': !props.withoutMarginBottom,
				'pims__flexbox-alignment-center': props.flexboxAlignment === 'center',
				'pims__flexbox-alignment-start': props.flexboxAlignment === 'start',
				'pims__flexbox-alignment-responsive':
					props.flexboxAlignment === 'responsive',
				'pims__flexbox-direction-row': props.flexboxDirection === 'row',
				'pims__flexbox-direction-column': props.flexboxDirection === 'column',
				'pims__flexbox-direction-responsive':
					props.flexboxDirection === 'responsive',
				'pims__flexbox-base':
					!!props.flexboxAlignment || !!props.flexboxDirection,
			})}
		>
			{props.children}
		</div>
	);
}