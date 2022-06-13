import React from 'react';


export default function Formdata(){



    const [formData, setFormData] = React.useState({
        title: "",
        price: "",
        category: "",
        gender: "",
      });
      
    
      const handleChange = (e) => {
        let { title, price, category, gender } = e.target;
    
        
    
        // username, password, age
        setFormData({ ...formData,  });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      
      };
    
      const { title, price, category, gender } = formData;
      return (
        <div >
          <h3>Admin panel</h3>
          <br />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Title"
              name="title"
              onChange={handleChange}
              value={title}
            />
            <br />
            <input
              type="number"
              placeholder="Enter price"
              name="price"
              onChange={handleChange}
              value={price}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Category"
              name="category"
              onChange={handleChange}
              value={category}
            />
            <br />
            
            <br />
           
            <br />
            <input type="submit" value="SUBMIT FORM" />
          </form>
        </div>
      );





}