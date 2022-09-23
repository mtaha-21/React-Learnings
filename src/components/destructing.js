import React from 'react'

// function Greet(){
//     return <h1>Hello Taha</h1>
// }

// es6 arrow function
const Destruct = (props)=>{
 const {name,heroName}=props
    // console.log()
    return (
    <div>
    <h1>Hello {name} a.k.a {heroName}</h1>
    </div>
    )
} 

export default Destruct
