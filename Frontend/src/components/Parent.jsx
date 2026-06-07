import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        
        <Child name="surya" age={18}
         marks={[86,89,90,94,95]} 
        person={{ name:"prabha", dept:["AI&DS"]}}/>
    </div>
  )
}

export default Parent