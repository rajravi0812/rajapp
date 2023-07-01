import React from 'react'

export default function Alert(props) {
    const capital=(word)=>{ word = word[0].toUpperCase()+word.slice(1).toLowerCase(); return word;}
  return (
    <div style={{height:'40px'}}>
    {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capital(props.alert.type)}</strong> : {props.alert.msg}
  
</div>}
</div>
  )
}
