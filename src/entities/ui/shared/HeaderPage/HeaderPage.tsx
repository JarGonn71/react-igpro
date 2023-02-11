export interface HeaderPageProps {
	titlePage: string
}

export const HeaderPage = ({ titlePage }: HeaderPageProps): JSX.Element => {
	return (
		<div>
			{titlePage}
		</div>
	)
}