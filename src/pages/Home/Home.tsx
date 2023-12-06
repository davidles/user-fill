"use client";
import React, { useState } from 'react';
import type { } from '@mui/x-data-grid/themeAugmentation';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '@/data';
import { Person } from '@/models/people';
import { Checkbox } from '@mui/material';


export type HomeProps = {}

const Home: React.FC<HomeProps> = ({ }) => {
	const [selectedPeople,setSelectPeople] = useState<Person[]>([]);
	const pageSize = 5;

	const findPerson = ( person : Person ) => !!selectedPeople.find((people) => people.id === person.id)
	const filterPerson = ( person : Person ) => selectedPeople.filter((people) => people.id !== person.id)
 
	const handleChange = (person: Person) =>{
		setSelectPeople(findPerson(person) ?  filterPerson(person) : [...selectedPeople, person])
	}

	const columns: GridColDef[] = [
		{
			field: 'actions',
			type: 'actions',
			sortable: false,
			headerName: '',
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <> {
				<Checkbox size='small' checked={findPerson(params.row)} onChange={() => handleChange(params.row)} />
			} </>
		},
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
