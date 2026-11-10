import { Upload } from 'lucide-react';
import {ToastContainer , toast} from 'react-toastify'

const Max_Size = (5*1024*1024)

const App = () => {
  const chooseFile = (e)=>{
    const input = e.target 
    const file = input.files[0]
    if(!file.type.startsWith("image/"))
      return toast.error("please choose only image",{position:'top-center'})
    if(file.size > Max_Size)
      return toast.error("file size should be less than 5MB",{position:'top-center'})
    console.log(file)
  }
  return (
    <div className='bg-slate-900 min-h-screen text-center text-white p-2'>
      <h1 className='text-4xl font-bold'>Image Storage</h1>
      <button className='relative bg-[linear-gradient(131deg,#191fc8,#5ac742)]  active:scale-95 hover:border-2 hover:border-fuchsia-500 hover:scale-105 rounded flex flex-col items-center mx-auto my-6 h-45 w-140 justify-center '>
        <Upload size={56} color="#ffffff" strokeWidth={1} />
        <p className='font-medium'>Upload Photo</p>
        <input onChange={chooseFile} type="file" name="" id=""  className='absolute top-0 left-0 h-full w-full opacity-0'/>
      </button>
      <ToastContainer />
    </div>
  )
}

export default App