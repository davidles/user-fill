"use client";
import React from 'react';
import type { } from '@mui/x-data-grid/themeAugmentation';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '@/data';


export type HomeProps = {}

const Home: React.FC<HomeProps> = ({ }) => {
	const pageSize = 5;
	const columns: GridColDef[] = [
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <> {params.value} </>
		},
		{
			field: 'category',
			headerName: 'Categories',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <> {params.value} </>
		},
		{
			field: 'company',
			headerName: 'Company',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <> {params.value} </>
		}
	]
	return (
		<DataGrid
			rows={People}
			columns={columns}
			disableColumnSelector
			disableRowSelectionOnClick
			autoHeight
			pageSizeOptions={[pageSize]}
			getRowId={(row: any) => row.id}
			initialState={{
				pagination: {
					paginationModel: {
						pageSize: 5,
					},
				},
			}}
		/>
	);
};

export default Home;
