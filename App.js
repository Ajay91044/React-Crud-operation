import logo from './logo.svg';
import './App.css';
// import NavbarRouting from './ReactProjects/BootstrapPresento/NavbarRouting';
// import Navbar from './ReactProjects/BootstrapPresento/Navbar';
// import CustomFormValidation from './Assignments/FormValidation/CustomFormValidation';

// import ControlledAccordions from './Mui/Modal';
// import NestedModal from './Mui/Modal';
// import BasicButtons from './Mui/Button';
// import RecipeReviewCard from './Mui/Card';
// import EnhancedTable from './Mui/ReactTable';
// import Addcolors from './Assignments/Addcolors';
// import ImageONclick from './Assignments/DispalyingImageOnclick/ImageONclick';
// import ToggleComponent from './Assignments/CustomHHooks/ToggleComponent/ToggleComponent';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addproduct from './React-CRUD/Addproduct';
import Allproducts from './React-CRUD/Allproducts';
import SingleProduct from './React-CRUD/SingleProduct';
import Updateproduct from './React-CRUD/Updateproduct';
import Navbar from './React-CRUD/Navbar';
import Productsdata from './React-CRUD/db';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/addproducts' element={<Addproduct />}/>
          <Route path='/products' element={<Allproducts />}/>
          <Route path='/product/:pid' element={<SingleProduct />}/>
          <Route path='/updateproduct/:id' element={<Updateproduct />}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
// import Faqlist from './Assignments/Faq/Faqlist';
// import Imageslider from './Assignments/imageslider';
// import CounterOne from './custom hook/CounterOne';
// import UpdateEffect from './custom hook/UpdateEffect';
// import Toggle from './custom hook/Toggle';
// import Debounce from './custom hook/Debounce';
// import Timeout from './custom hook/Timeout';
// import Formdata from './Assignments/Form/Formdata';
// import BasicGrid from './Assignments/GridMaterialUi/GridMaterialUi';
// import Navbar from './Assignments/Routing/Navbar';
// import Fakestoreapi from './Assignments/Api projects/Faskestoreapi';
// import Moviesapi from './Assignments/Api projects/MoviesApi';
// import CharacterCount from './Assignments/CharacterCounter/CharacterCount';
// import Todolist from './Assignments/Todolist/Todolist';
// import ExpenseTracker from './Component/ExpenseTracker.jsx/ExpenseTracker';
// import Counter from './Assignments/Todolist/Todolist';
// import TodoReducerHook from './Assignments/apple';


{/* <hr /> */ }

{/* <br /><br />
<ImageONclick /> <hr />
<br /><br />
<Addcolors /> <hr />
<br /> <br />
<EnhancedTable /> <hr />
<br /><br />
<NestedModal /> <hr />
<br /><br />
<BasicButtons /> <hr />
<br /><br />
<RecipeReviewCard />   <br /><br /><br /> <hr />
<CounterOne />    <br /><br /><br /> <hr />
<Toggle />   <br /><br /><br /> <hr />
<Timeout />  <br /><br /><br /> <hr />
<Debounce /> <br /><br /><br /> <hr />
<UpdateEffect />    <br /><br /><br /> <hr />
<Faqlist />     <br /><br /><br /> <hr />
<Imageslider /> <br /><br /><br /> <hr />
<Formdata /> <br /><br /><br /> <hr />
<BasicGrid /> <br /><br /><br /> <hr />
<Fakestoreapi /> <br /><br /><br /> <hr />
<Moviesapi /> <br /><br /><br /> <hr />
<CharacterCount   /> <br /><br /><br /> <hr />
<Navbar /> <br /><br /><br /> */}

{/* <Counter /> */ }

{/* < TodoReducerHook/>
< CustomFormValidation/>
 */}
{/* <Faqlist />     <br /><br /><br /> <hr /> */ }

{/* <ExpenseTracker /> */ }


