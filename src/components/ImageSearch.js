import React, { useState } from 'react';

const ImageSearch = ({ searchText}) => {
    const [text,setText]=useState("")
    const handleOnSumit=(e)=>{
        e.preventDefault()
        searchText(text)
    }
    return (
        <div className="mb-40 mt-32">
            <form onSubmit={handleOnSumit} className="w-full mx-auto " action="">
                <div className="w-5/12 mx-auto flex">
                    <input onChange={e => setText(e.target.value)} className="flex-1  bg-white shadow-lg p-6 w-auto focus:outline-none" type="text" name="" placeholder="search here..." id="" />
                    <button type="submit" className=" flex-2 p-6 bg-green-400 text-white font-bold focus:outline-none ">Search</button>
                </div>
            </form>            
        </div>
    );
};

export default ImageSearch;