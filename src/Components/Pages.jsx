

function Pages() {
  return (
    <div className="bg-white">
      <ul className="flex center justify-center gap-20 text-2xl font-bold font-sans mt-32">
        <li  className="underline decoration-primary">
          All
        </li>
        <li>
         Human
        </li>
        <li>
          Nature
        </li>
        <li>
         Country
        </li>
        <li>
         Video
        </li>
      </ul>
      <div className="grid grid-rows-3 grid-flow-col gap-x-3  justify-center m-40 ">
        
         <div ><img src="3.jpg" className="h-44 order-1"></img></div> 
         <div><img src="7.jpg" className="order-2"></img></div> 
         <div><img src="37.jpg" className="order-3"></img></div> 
         <div><img src="4.jpg" className="h-80 order-4"></img></div> 
         <div className="-mt-28"><img src="9.jpg" className="order-5"></img></div> 
         <div><img src="5.jpg" className="order-6"></img></div> 
         <div><img src="5.jpg" className="h-40 order-7"></img></div> 
         <div><img src="8.jpg" className="order-8"></img></div> 
         <div><img src="36.jpg" className="h-80 order-9"></img></div> 
         <div><img src="6.jpg" className="order-10"></img></div>  
         <div><img src="10.jpg"  className="h-96 order-last"></img></div> 
          
        
      </div>
    </div>
  )
}

export default Pages;