// reusable way 
const debounce = (func,delay=1000)=>{
    let timeOutId;
    return (...args)=>{
      if (timeOutId) {
        clearTimeout(timeOutId)
      }  
      timeOutId = setTimeout(() => {
        func.apply(null,args)
        }, delay);    
    }
  }
  
  // easy way to delay the fetch api data 
  
  // let timeOutId;
  // const onInput = (event)=>{
  
  //   if (timeOutId) {
  //     clearTimeout(timeOutId)
  //   }
  //   timeOutId = setTimeout(() => {
  //     fetchData(event.target.value)
  //   }, 1000);
  // }
  