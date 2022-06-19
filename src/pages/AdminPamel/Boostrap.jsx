import {Form} from 'react-bootstrap';

export const FormGroup = (props) => {
   return(
      <Form.Group controlId="formFile" className="mb-3">
         <Form.Control 
            value={props.File} 
            name={props.name}
            placeholder='File'
            type="file" 
            onChange={(e) => {
               props.handleChange(e)
               props.setFile(e.target.files[0])
            }}
         />                   
      </Form.Group> 
   )
}