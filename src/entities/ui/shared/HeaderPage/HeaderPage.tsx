export interface HeaderPageProps {
	titlePage: string
}

export const HeaderPage = ({ titlePage }: HeaderPageProps): JSX.Element => {
	return (
		<div className="px-4 md:px-10 py-4 md:py-7 bg-gray-200">
			<div className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
				{titlePage}
			</div>
		</div>
	)
}