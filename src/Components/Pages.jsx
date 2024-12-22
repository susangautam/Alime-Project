

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
      <div className="grid grid-rows-3 grid-flow-col gap-3 columns-lg justify-center m-40 ">
        
         <div><img src="3.jpg" className="h-44"></img></div> 
         <div><img src="7.jpg"></img></div> 
         <div><img src="37.jpg"></img></div> 
         <div><img src="4.jpg" className="h-80"></img></div> 
         <div><img src="9.jpg"></img></div> 
         <div><img src="5.jpg"></img></div> 
         <div><img src="5.jpg" className="h-40"></img></div> 
         <div><img src="8.jpg"></img></div> 
         <div><img src="36.jpg" className="h-80"></img></div> 
         <div><img src="6.jpg"></img></div>  
         <div><img src="10.jpg" className="h-96"></img></div> 
          
        
      </div>
    </div>
  )
}

export default Pages;