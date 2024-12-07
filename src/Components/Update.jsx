import { useLoaderData } from "react-router-dom";


const Update = () => {
    const data=useLoaderData()
    const handleForm=e=>{
        e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const chef=form.chef.value;
    const supplier=form.supplier.value;
    const taste=form.taste.value;
    const coffee={ name, taste, supplier,chef};



    fetch(`http://localhost:4000/update/${data._id}`,{
        method:'PUT',
        headers: {
            'content-type':'application/json'
        },
        body:JSON.stringify(coffee)
    })
    .then(res=>res.json())
    .then(data=> {
        console.log(data)
        if(data.upsertedCount>0){
            alert('updated successfully')
            form.reset()
        }
    }
    )
 
}
    
    return (
        <div>
            <h1>Update</h1>
           <form onSubmit={handleForm} className="w-[60%] mx-auto p-5">
            <div className="flex justify-between items-center gap-5">
            <input type="text" defaultValue={data?.name} required name='name' className="w-1/2 rounded-lg border-2 p-3 " />
            <input type="text" defaultValue={data?.chef} required name='chef' className="w-1/2 rounded-lg border-2 p-3 " />
            </div>
        <div className="flex justify-between items-center gap-5 my-3">
        <input type="text" defaultValue={data?.supplier} required name='supplier' className="w-1/2 rounded-lg border-2 p-3 " />
        <input type="text" defaultValue={data?.taste} required name='taste' className="w-1/2 rounded-lg border-2 p-3 " />

        </div>
        
            <button className="w-full btn">submit</button>
           </form>
        </div>
    );
};

export default Update;