import React from 'react'
import { useState } from 'react';

export const AddTodo = ({addTodo}) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e)=>{
e.preventDefault();
if (!title || !desc) {
  alert("title and description can not be blank");
}else{
addTodo(title,desc);
  setTitle("");
  setDesc("");
}
  }
  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label"> Todo Title</label>
          <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" placeholder="Example input placeholder" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label"> Todo Description</label>
          <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder="Another input placeholder" />
        </div>

     
        <div className="col-12">
          <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
        </div>
      </form>
    </div>
  )
}
