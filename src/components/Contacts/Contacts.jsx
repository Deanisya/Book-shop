import React from 'react';
import s from './Contacts.module.scss';
import Title from '../common/Title/Title';
import Input from '../common/Input/Input';
import ButtonForm from '../common/ButtonForm/ButtonForm';

const Contacts = () => {
	return (
		<div className={s.contacts}>
			<Title title='Contact Us' />
			<h3 className={s.subTitle}>
				Say Hello send us your thoughts about our products or share <br /> your ideas with our Team!
			</h3>
			<form className={s.contactsForm} action=''>
				<label className={s.contactsFormLabel} htmlFor=''>
					<Input type='text' placeholder='First name' />
					<Input type='text' placeholder='Last name' />
					<Input type='email' placeholder='Email' />
					<Input type='text' placeholder='Subject' />
				</label>
				<Input type='text' placeholder='Message' />
				<ButtonForm width='60%' title='SEND' />
			</form>
		</div>
	);
};

export default Contacts;
