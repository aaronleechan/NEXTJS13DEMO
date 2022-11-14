import PocketBase from 'pocketbase';
import UserForm from './userForm';
import Link from "next/link";

async function getUsers() {
    try{
        const db = new PocketBase('http://127.0.0.1:8090');
        const data = await db.records.getList('application');
        return data?.items as any[];
    }catch(e: any){
        return{
            error: e.message,
            statusCode: e.statusCode
        }
    }
}

const UserFormPage = async () => {
    const users = await getUsers();

    console.log({" users ": users })

    if(users.error){
        return <div> 
            <h1> Run ./pocketbase serve</h1> 
        </div>
    }

    return(
        <>
            <UserForm/>

            <h3> A List of Users </h3>
            {
                users?.map((user)=>{
                    return <UserComponent key={user.id} user={user}/>
                })
            }
        </>
    )
}

function UserComponent({ user }: any){
    const { id,firstName,lastName,email } = user;

    return(
        <Link href={`application/${id}`}>
            <p>
                &nbsp; Name: <span>{firstName}</span>,<span>{lastName}</span> /
                Email: <span>{email}</span>
            </p>
        </Link>
    )
}

export default UserFormPage;