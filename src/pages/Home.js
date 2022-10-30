import { Formik,Form,Field } from "formik";

export default function Home() {
  return (
    <>
    <Formik
    initialValues={{
      
      sou: '',
      des:'Goa'
    }}
    onSubmit={async (values, actions) => {

      console.log("submitted values", values)
     

      actions.resetForm()
      console.log("after", values)


    }}>
      {formik => (
                    <Form>
                        <div className="container ">
    <div className="container overflow-hidden text-center">
  <div className="row gx-5">
    <div className="col">
      <label class="text-white bg-dark">Source Airport</label><br/>
      <Field as="select" name="sou">
             <option value="Mumbai">Mumbai</option>
             <option value="Goa">Goa</option>
             <option value="Surat">Surat</option>
           </Field>
 
  
    </div>
    <div className="col">
      <label class="text-white bg-dark">Destination Airport</label>
      <br/>
      <Field as="select" name="des">
             <option value="Mumbai">Mumbai</option>
             <option value="Goa">Goa</option>
             <option value="Surat">Surat</option>
           </Field>
    </div>
  </div>
</div>
    </div>
    <input type="submit" className="btn btn-primary texxt-center " value="Submit"/>

                      </Form>
      )}
    </Formik>
    
    
    <div className="container mt-3">
      <table className="text-white bg-dark table  table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Sorce</th>
      <th scope="col">Destination</th>
      <th scope="col">Delay</th>
      <th scope="col">Reason for Delay</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@twitter</td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table></div></>
  )
}
