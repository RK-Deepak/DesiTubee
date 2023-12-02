import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { Appstore } from './utils/Redux/AppStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Watch from './components/Watch';
import Container from './components/Container';
import ReactDOM from "react-dom/client"






function App() {
 


  return (
    <Provider store={Appstore}>
    <div className="App">
     <Header/>
     <RouterProvider router={approuter}/>
    </div>
    </Provider>
  );
}


const approuter=createBrowserRouter([

  {
    path:"/",
    element:<Body/>,
    children:[
      {
             
              children:[
                {
                  path:"/",
                  element:<Container/>
                },
                {
                  path:"/watch",
                  element:<Watch/>
                },
              ]
              
      },
      
    ]
  }

])


export default App;

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>)
