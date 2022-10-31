import { Formik,Form,Field } from "formik";
import {React,useEffect} from 'react';
import { getAllCities, getstates } from "../Services/api";
import useState from 'react-usestateref'
export default function Home() {
  var [counter,setCounter,counterRef]=useState([])
  var [city,setcity,cityRef]=useState([])
  useEffect(()=>{
    async function data(){
      let dat=await getAllCities()
      console.log(dat)
      setCounter(dat)
      console.log("dat",counterRef.current)
    }
    data()
    
  },[]);
  return (
    <>
    <Formik
    initialValues={{
      
      sou: 'Mumbai',
      des:'Goa'
    }}
    onSubmit={async (values, actions) => {
      var a={}
      console.log("submitted values", {"sd": values.sou+"_"+values.des})
      try {
        let dat=await getstates( {"sd": values.sou+"_"+values.des})
       
        let json=await dat.json();
        console.log(json)
        setcity(json)
        console.log("city",cityRef.current)

        
      } catch (error) {
        console.log(error)
        
      }
     

      actions.resetForm()
    


    }}>
      {formik => (
                    <Form>
                        <div className="container ">
    <div className="container overflow-hidden ">
  <div className="row ">
    <div className="col-lg-6">
      <label class="text-white bg-dark site-title ">Source Airport</label>
      <Field as="select" className="mx-3 site-title px-4 py-2 " name="sou">
      
      <option  select value="Mumbai">Mumbai</option>
             <option value="Goa">Goa</option>
             <option value="Gujarat">Gujarat</option>
             <option value="Delhi">Delhi</option>
             
           </Field>
 
  
    </div>
    <div className="col-lg-6">
      <label class="text-white bg-dark site-title ">Destination Airport</label>
      
      <Field as="select" className="mx-3 site-title  px-4 py-2 " name="des">
             <option value="Mumbai">Mumbai</option>
             <option value="Goa">Goa</option>
             <option value="Gujarat">Gujarat</option>
             <option value="Delhi">Delhi</option>
           </Field>
    </div>
    
    
  </div>
</div>
    </div>
    <br/>
    <br/>
    <input type="submit" className="btn btn-primary px-4 py-2  site-title " value="Submit"/>
    

                      </Form>
      )}
    </Formik>
    <br/>
    <br/>
    
    <div className="container mt-3">
      <table className="text-white bg-dark table site-title  text-center sit border-bottom-none ">
  <thead>
    <tr className="text-start">
     
      <th scope="col">Source</th>
      <th scope="col">Destination</th>
    
      <th scope="col">Departure</th>
       <th scope="col">Arrival</th>
      <th scope="col">Delay</th>
      <th scope="col">Reason for Delay</th>
      <th scope="col">Contact</th>
    </tr>
  </thead>
  <tbody>
   {
    city && city.map(
      (i,index)=>(
        <td  key={index} >
          <tr scope="col"  className="text-center border-bottom-none">{i[0]}</tr>
          <tr scope="col" className="text-center border-bottom-none">{i[1]}</tr> 
          <tr scope="col" className="text-center border-bottom-none">{i[2]}</tr>
          <tr scope="col" className="text-center border-bottom-none">{i[3]}</tr>
          <tr scope="col" className="text-center border-bottom-none">{i[4]}</tr>
           <tr scope="col" className="text-center border-bottom-none">{i[5]}</tr>
          
        
          
          
        </td>
      )
    )
   }
  
  </tbody>
</table></div></>
  )
}
