
'use client'
import Footer from './component/Footer'
import Header from './component/Header'
import Navbar from './component/Navbar'
import TodoList from './component/TodoList'
import { Provider } from 'react-redux';
import store from './redux/store';
export default function Home() {
  return (
    <Provider store={store}>
          <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"> 
              <Navbar />
              <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">  
                <Header/>
                <hr className="mt-4" />    
                
                <hr className="mt-4" />
                <Footer/>
              </div>
            </div>
    </Provider>
  )
}
