import React from 'react'

export default function Alert({alert}) {
    const capatalize=(word)=>{
        const low=word.toLowerCase();
        return low.charAt(0).toUpperCase()+low.slice(1)
    }
    return (
        alert && <div>
            <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
             {capatalize(alert.type)}<strong>: {alert.msg}</strong>
            </div>
        </div>
    )
}
