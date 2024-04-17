import React, {useState} from 'react';

const Form = (props) =>{
    const [text, setText] = useState('')

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase successfully!")
       
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied successfully!")
 
        
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed successfully!")

        
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase successfully!")

       
    }

    const clearClick = ()=>{
        let newText='';
        setText(newText); 
        props.showAlert("Text cleared successfully!")
    }

    const handlleOnChange = (event)=>{
        setText(event.target.value);
    }

   return(
    <div className="container my-4">
        <div style={{color: props.mode==='light'?'grey':'white'}} className="w-1/2 p-4 mx-auto text-center border">
            <h1>{props.heading}</h1>
            <div className='mt-3'>
            <textarea id="message" value={text} onChange={handlleOnChange} rows="13" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:focus:border-blue-500" style={{backgroundColor: props.mode==='dark'?'rgb(12 13 27)':'white', color: props.mode==='dark'?'white':'black'}} placeholder="Write your thoughts here..."></textarea>
            </div>
            <button type="button" onClick={handleUpClick} className="text-white my-2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">UpperCase</button>
            <button type="button" onClick={handleLowClick} className="text-white my-2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">LowerCase</button>
            <button type="button" onClick={handleExtraSpaces} className="text-white my-2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Extra space</button>

            <button type="button" onClick={clearClick} className="text-white my-2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Clear</button>
            <button type="button" onClick={handleCopy} className="text-white my-2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">copy</button>


            <div className="container my-3">
                <h1> Yout text Summary </h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words,{text.length} characters</p>
            </div>      
        </div>     
    </div>
   );
};

export default Form;