import { useCallback } from 'react';

export interface PaginationProps {
	currentPage: number;
	lastPage: number;
	setPage: (page: number) => void;
}

export const Pagination = ({ currentPage, lastPage, setPage }: PaginationProps) => {

	const handlePrevPage = useCallback(() => {
		if ( currentPage > 1) {
			setPage(currentPage - 1)
		}
	}, [currentPage, setPage])

	const handleNextPage = useCallback(() => {
		if ( currentPage < lastPage) {
			setPage(currentPage + 1)
		}
	}, [currentPage, lastPage, setPage])

	return (
		<div className="flex justify-start py-3 pl-3 mt-4">
			<div className="flex space-x-2.5">
					<div onClick={handlePrevPage} className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded focus:shadow-none cursor-pointer">
						Назад
					</div>

				{currentPage > 1 &&
					<div onClick={handlePrevPage} className="cursor-pointer page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none">
						{currentPage - 1}
					</div>
				}

					<div className="page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md">
						{currentPage}
					</div>

				{ currentPage !== lastPage &&
					<div onClick={handleNextPage} className="cursor-pointer page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none">
						{currentPage + 1}
					</div>
				}

					<div onClick={handleNextPage} className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded focus:shadow-none cursor-pointer">
						Вперед
					</div>
			</div>
		</div>
	)
}