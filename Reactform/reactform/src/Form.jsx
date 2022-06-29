import React from 'react';
import styled from 'styled-components'

const Wrapper=styled.div`
     display:flex;
     flex-direction:column;
     margin-left:30%;
     margin-right:30%;
     padding:10px;

`
const Input=()=>{

    let arr=["MECHANICAL","CIVIL"];


    const [name,setName]=React.useState("");
    const [age,setAge]=React.useState("");
    const [address,setAddress]=React.useState("");
    const[department,setDepartment]=React.useState("Mechanical")
    const [salary,setSalary]=React.useState("");
    const [marital,setMarital]=React.useState(false);

    const [usr,setUsr]=React.useState([])


    const handleAdd=(e)=>{
        e.preventDefault()

        const payload={
            name:name,
            age:age,
            address:address,
            department:department,
            salary:salary,
            marital:marital,

        }
        console.log(payload)
        
        fetch(`http://localhost:8654/data`,{
            method:"POST",
            headers:{
            'content-type':'application/json',
            },
            body:JSON.stringify(payload)
        })
        .then((res)=>res.json())
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }



    return(
        <Wrapper>
        < form onSubmit={handleAdd}>
            
            <div>
            <label>Name:</label>
            <input type="text" name="name" placeholder="name" value={name} required  onChange={(e)=>{setName(e.target.value)}} />
            </div>

            <div>
            <label>Age:</label>
            <input type="text" name="age" placeholder="age" value={age} required onChange={(e)=>{setAge(e.target.value)}} />
            </div>

            <div>
            <label>Address:</label>
            <input type="text" name="address" placeholder="address" value={address}  onChange={(e)=>{setAddress(e.target.value)}} />
            </div>

             <select>
                <option value={""}></option>
                 {arr.map((c)=>{return (<><option value={c} style={{color:"red"}}></option></>)})}
             </select>


             <div>
            <label>salary:</label>
            <input type="text" name="salary" placeholder="salary" value={salary} onChange={(e)=>{setSalary(e.target.value)}} />
            </div>

            <div>
                <label>Maritial</label>
                <input type="checkbox" value={marital} onChange={(e=>setMarital(e.target.value))} />
            </div>

            <input  type="submit" value="ADD"/>

        </form>

        </Wrapper>
    )
}

const Table=()=>{

    const [bag,setBag]=React.useState([])

    React.useEffect(()=>{
   fetch(`http://localhost:8654/data`)
   .then((res)=>res.json())
   .then((res)=>setBag(res))
   .catch((err)=>console.log(err));

},[])
    
    return(<>
           <table style={{border:"1px solid red",marginLeft:"25%",marginTop:"5%",marginRight:"25%"}}>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>Address</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Marital</th>
                </tr>
            </thead>
            <tbody>
                {bag.map((ele)=>{return(<>
                   <tr key={ele.id}>
                    <td>{ele.name}</td>
                    <td>{ele.age}</td>
                    <td>{ele.address}</td>
                    <td>{ele.department}</td>
                    <td>{ele.salary}</td>
                    <td>{ele.marital}</td>
                   </tr>
                </>)})}
            </tbody>
           </table>
    </>)

}





const Form=()=>{





    return(
        <>
        <Input />
        <Table/>
        </>
    )
}



export default Form;
