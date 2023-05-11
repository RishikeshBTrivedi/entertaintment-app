import React from 'react'
import { useEffect , useState} from 'react'
import "./CustomPagination.css"
function CustomPagination({setpage}) {
    let [addPage, setaddPage] = useState(0);
    const handlePageChange = (page) => {
        
        setpage(page)
        window.scroll(0,0)
    }//handlePageChange(1)
    
  return (
    <div className="pagination">
        <a onClick={(e) =>{
            e.preventDefault()
            handlePageChange(1)
        }}>1</a>
        <a onClick={(e) =>{
            e.preventDefault()
            handlePageChange(2)
        }}>2</a>
        <a onClick={(e) =>{
            e.preventDefault()
            handlePageChange(3)
        }}>3</a>
        <a onClick={(e) =>{
            e.preventDefault()
            handlePageChange(4)
        }}>4</a>
        <a onClick={(e) =>{
            e.preventDefault()
            handlePageChange(5)
        }}>5</a>
        <a onClick={(e) =>{
            e.preventDefault()
            handlePageChange(6)
        }}>6</a>
        {/* <a onClick={(e) =>{
            console.log(addPage)
            e.preventDefault()
            handlePageChange(addPage)
            setaddPage(addPage++)
            setaddPage(addPage)
        }}></a> */}

        
    </div>
  )
}

export default CustomPagination