import React from 'react'
import './popupdialog.css'
import { FiX } from "react-icons/fi";
import { TextField, InputAdornment } from "@mui/material";
import Button from '../button/button';

const PopupDialog = (props) => {


    return (
        <div className='box'>

            <div className="dialog-wrapper" onClick={props.closeDialog}></div>
            <div className="dialog-container">
                <div className="inner-container">

                    <p className='ptitle'>Do you want to make updates to <br/>this Book?</p>
                    <p className='description'>Select if the book is available or not</p>
                    <div className='btnflex'>
                        <Button buttonname='Book in Stock'/>
                        <Button buttonname ='Book out of Stock'/>
                    </div>

                    <div className="icon-container" onClick={props.closeDialog}>

                        <FiX className='closeBtn' size={45}/>
                    </div>

                   
                </div>


            </div>





        </div>
    )
}

export default PopupDialog