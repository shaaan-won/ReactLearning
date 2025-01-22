import React, { useEffect, useState } from 'react'

const TodoList2 = () => {

    const [item, setitem] = useState({
        name: "",
        time: "",
        completed: false
    })
    const [List, setList] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setitem((p) => ({
            ...p,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedTodoList = [...List, item];
        setList(updatedTodoList)
        localStorage.setItem("todolist", JSON.stringify(updatedTodoList))
        setitem({
            name: "",
            time: "",
            completed: false
        })
    }

    const deletetask = (id) => {
        const restTodoList = List.filter((item, i) => (i !== id));
        setList(restTodoList)
        localStorage.setItem("todolist", JSON.stringify(restTodoList))
    }

    const toggleComplete = (i) => {
        alert(i)
    }

    useEffect(() => {
        setList(JSON.parse(localStorage.getItem('todolist')) || [])
    }, [])

    return (
        <>

            <form onSubmit={handleSubmit}>
                <label htmlFor="">TaskName</label> <br />
                <input value={item.name} type="text" name='name' onChange={handleChange} /><br />
                <label htmlFor="">Time</label> <br />
                <input value={item.time} type="text" name='time' onChange={handleChange} /><br />
                <button type='submit'>Submit</button>
            </form>


            <div className="row">
                <div className="col-md-6">

                    <table className='table table-strip'>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Hour</td>
                                <td>Action</td>
                            </tr>
                        </thead>

                        <tbody>
                            {List?.map((data, i) => (
                                <tr onClick={() => toggleComplete(i)} key={i.toString()}>
                                    <th>{data.name}</th>
                                    <th>{data.time}</th>
                                    <th><button onClick={() => deletetask(i)} className='btn btn-danger'>-</button> </th>
                                </tr>
                            ))}

                        </tbody>


                    </table>

                </div>
            </div>
        </>
    )
}

export default TodoList2