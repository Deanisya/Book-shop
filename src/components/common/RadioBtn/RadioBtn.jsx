import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function RadioBtn({ description }) {
	const [value, setValue] = React.useState('Direct bank transfer');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<FormControl>
			<RadioGroup
				aria-labelledby='demo-controlled-radio-buttons-group'
				name='controlled-radio-buttons-group'
				value={value}
				onChange={handleChange}>
				<FormControlLabel
					value='Direct bank transfer'
					control={
						<Radio
							sx={{
								color: 'black',
								'&.Mui-checked': {
									color: 'black',
								},
							}}
						/>
					}
					label='Direct bank transfer'
				/>
				{value === 'Direct bank transfer' && (
					<p style={{ fontSize: '12px', color: '#707070' }}>
						Make your payment directly into our bank account. Please use your Order ID as the
						payment reference. Your order will not be shipped until the funds have cleared in our
						account
					</p>
				)}
				<FormControlLabel
					value='Check payments'
					control={
						<Radio
							sx={{
								color: 'black',
								'&.Mui-checked': {
									color: 'black',
								},
							}}
						/>
					}
					label='Check payments'
				/>
				{value === 'Check payments' && (
					<p style={{ fontSize: '12px', color: '#707070' }}>
						Make your payment directly into our bank account. Please use your Order ID as the
						payment reference. Your order will not be shipped until the funds have cleared in our
						account
					</p>
				)}
				<FormControlLabel
					value='Cash on delivery'
					control={
						<Radio
							sx={{
								color: 'black',
								'&.Mui-checked': {
									color: 'black',
								},
							}}
						/>
					}
					label='Cash on delivery'
				/>
				{value === 'Cash on delivery' && (
					<p style={{ fontSize: '12px', color: '#707070' }}>
						Make your payment directly into our bank account. Please use your Order ID as the
						payment reference. Your order will not be shipped until the funds have cleared in our
						account
					</p>
				)}
				<FormControlLabel
					value='PayPal'
					control={
						<Radio
							sx={{
								color: 'black',
								'&.Mui-checked': {
									color: 'black',
								},
							}}
						/>
					}
					label='PayPal'
				/>
				{value === 'PayPal' && (
					<p style={{ fontSize: '12px', color: '#707070' }}>
						Make your payment directly into our bank account. Please use your Order ID as the
						payment reference. Your order will not be shipped until the funds have cleared in our
						account
					</p>
				)}
			</RadioGroup>
		</FormControl>
	);
}
