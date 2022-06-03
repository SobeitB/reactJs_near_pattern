import {Container} from 'react-bootstrap';
import HeaderTop from '../../assets/img/header-top.png';
import HeaderBot from '../../assets/img/header-bot.png';
import s from './AdminPamel.module.css'
import { 
   useMoralisFile, 
   useNewMoralisObject, 
   useMoralis,
} from "react-moralis";
import {Formik, Form, Field} from 'formik'
import * as yup from 'yup';
import {useMemo, useState} from 'react'
import {useNavigate} from 'react-router'
import {FormGroup} from './Boostrap'

const AdminPamel = () => {
   const {login, Moralis} = useMoralis();
   const { save } = useNewMoralisObject("comics");
   const {saveFile} = useMoralisFile();
   const [file, setFile] = useState('');
   const navigate = useNavigate();

   const newComics = async (value) => {
      await login("admin", "admin")

      const Comics = Moralis.Object.extend("comics");
      const query = new Moralis.Query(Comics);
      const comicsFilter = await query
      .find();
      let count = comicsFilter.length ? Number(comicsFilter[comicsFilter.length - 1].attributes.count) + 1 : 1

      let comics = {
         Title:value.Title,
         File:"",
         pages:[],
         count:String(count),
      }

      await saveFile("comics.png", file, {
         type: "image/png",
         onSuccess: (result) => {
            console.log(result._url)
            comics.File = result._url
         },
         onError: (error) => console.log(error),
      })

      await save(
         comics,
         {
            onSuccess:(result) => {
               console.log(result)
            }, 
            onError:(error) => {
               console.log(error)
            }, 
         }
      );

      navigate('/comics')
   }

   const valid = useMemo(() => {
      return yup.object().shape({
         Title: yup.string().typeError('Must be a string').required('Title is required'),
         File: yup.string().typeError('Must be a string').required('Image is required'),
      })
   }, [])

   return(
      <div className="bodyPages py-5">
         <Container className="text-center">
            <img src={HeaderTop} alt="" className="img-fluid" />
               <h1 className="title">Create Comics</h1>
            <img src={HeaderBot} alt="" className="img-fluid" />

            <Formik
               initialValues={{
                  Title:'',
                  File:'',
               }}
               validationSchema={valid}
               onSubmit={newComics}
            >
               {({ errors, touched, values, handleChange}) => (
                  <Form>
                     <div className={s.body_input}>
                        <h2 className={`title ${s.title}`}>Title comics</h2>
                        <Field
                           value={values.Title} 
                           name='Title'
                           placeholder='Title comics'
                           type='text'
                           autoComplete="off"
                           required
                           className="form-control"
                        />

                        {errors.Title && touched.Title &&
                           <p className={s.error}>{errors.Title}</p>                           
                        }
                     </div>

                     <div className={s.body_input}>
                        <h2 className={`title ${s.title}`}>img comics</h2>
                        
                        <FormGroup 
                           handleChange={handleChange}
                           values={values}
                           setFile={setFile}
                        />
                        {errors.File && touched.File &&
                           <p className={s.error}>{errors.File}</p>                           
                        }

                        <button className={`not__nft_btn ${s.btn}`} >next</button>
                     </div>
                  </Form>
               )}
            </Formik>
         </Container>
      </div>
   );
}

export default AdminPamel;