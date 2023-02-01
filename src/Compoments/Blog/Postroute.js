import React, { useState } from 'react';

const Postroute = () => {
  const imageKey="8883b33790ee9795a35b86084c95369f"
    const addPost=(e)=>{
        e.preventDefault()
        
        const name=e.target.name.value
        const details=e.target.details.value
       
        const image=e.target.image.files[0]
        const data={name,details,image}
        
        // const formData=new FormData()
        // formData.append('image',image)
        // const url="http://localhost:5000/api/image"
        // fetch(url,{
        //     method:"POST",
        //     body:formData
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     if(data.success){
        //         const img=data.data.url
        //         console.log(img);
        //         const posts={
        //             name:name,
        //             details:details,
        //             img:img
        //         }
                fetch('http://localhost:5000/news',{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(data)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if(data.insertedId){
                        window.location.reload()
                        console.log(data);
                    }
                })
          
        
                
    
    
            }
        
    return (
      <div className='shadow w-100 mx-auto p-5'>
      <form onSubmit={addPost}>
      <div className="mb-3 mx-auto w-75">
<label for="exampleFormControlInput1" className="form-label">Blog Title</label>
<textarea name='name' className="form-control" id="exampleFormControlTextarea1" rows="2" required></textarea>
</div>
<div className="mb-3 mx-auto w-75">
<label for="exampleFormControlTextarea1" className="form-label">Blog Description</label>
<textarea name='details' className="form-control" id="exampleFormControlTextarea1" rows="7" required></textarea>
</div>
 <div class="form-group">

                <label for="description" class="text-white">Description</label>
                <textarea name="description" placeholder="Description" class="form-control"></textarea>
            </div>
<div className="mb-3 mx-auto w-75">
<input type="datetime-local" name="time" className="form-control w-25 mx-auto"></input> 
</div>

<input type="file" name='image' className="form-control w-25 mx-auto"/>  

<input className="form-control mx-auto w-25 mt-3 rounded bg-primary text-white" type="submit" value="POST" />

</form>
  </div>
    );
};


export default Postroute;