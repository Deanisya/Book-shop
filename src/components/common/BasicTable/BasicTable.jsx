import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import styles from './BasicTable.module.scss';

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('7643980998990', 'October 8,2021', 'Delivered', '$ 105', 'View Order'),
	createData('943980998990', 'October 8,2021', 'Processing', '$ 100', 'View Order'),
	createData('879980998990', 'October 8,2021', 'Delivered', '$ 65', 'View Order'),
];

export default function BasicTable({ download }) {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>ORDER NUMBER</TableCell>
						<TableCell align='right'>DATE</TableCell>
						<TableCell align='right'>STATUS</TableCell>
						<TableCell align='right'>TOTAL</TableCell>
						<TableCell align='right'>ACTIONS</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell component='th' scope='row'>
								{row.name}
							</TableCell>
							<TableCell align='right'>{row.calories}</TableCell>
							<TableCell align='right'>{row.fat}</TableCell>
							<TableCell align='right'>{row.carbs}</TableCell>

							<TableCell align='right'>
								<Link className={styles.viewOrder} to='/order'>
									{row.protein}{' '}
								</Link>
								<Link className={styles.viewOrder} to='/order'>
									{download}{' '}
								</Link>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
