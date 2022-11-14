async function getUser(id: string){
    const res = await fetch(`http://127.0.0.1:8090/api/collections/application/records/${id}`,
        {
            next: { revalidate: 10} //ISR : refresh the page when it is older number of second.
        }
    );
    const data = await res.json();
    return data;
}

export default async function UserPage({params}: any) {
    const user = await getUser(params.id);
    return(
        <div>
            <h1>This is user page</h1>
            <h1>First Name : {user.firstName}</h1>
            <h1>Last Name : {user.lastName}</h1>
            <h1>Email : {user.email}</h1>
        </div>
    )
}