'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Box } from '@mui/material';

import TextFieldComponent from '../../components/common/TextFieldComponent'

const UserForm = () =>{
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('');

    const router = useRouter();

    const initialize = () =>{
        setFirstName('');
        setLastName('');
        setEmail('');
    }

    const create = async(e: any) => {
        e.preventDefault();
        let data = JSON.stringify({
            firstName,
            lastName,
            email,
        })
        await fetch('http://127.0.0.1:8090/api/collections/application/records',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data
        })
        initialize();
        router.refresh();
    }

    return(
        <form onSubmit={create}>
            <Box
                sx={{
                    width: 'auto',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <h3>Create an User</h3>

                <TextFieldComponent id="firstName" label="First Name" name="firstName" value={firstName} onChange={(v: string)=>setFirstName(v)}/>
                <TextFieldComponent id="lastName" label="Last Name" name="lastName" value={lastName} onChange={(v: string)=>setLastName(v)}/>
                <TextFieldComponent id="email" label="Email" name="email" value={email} onChange={(v: string)=>setEmail(v)}/>
                <Button fullWidth type="submit" variant="outlined"> Create </Button>
            </Box>

        </form>
    )
}

export default UserForm;