import "./main.css";
import React, { useState, useEffect } from "react";

function Main() {
    const [advice, setAdvice] = useState("");
    const [ id , setId]= useState(null)
    const [ loading , setLoading]= useState(true)
    useEffect(() => {
        fetchAdvice();
    }, []);

    const fetchAdvice = () => {
      setLoading(true)
        fetch('https://api.adviceslip.com/advice')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setAdvice(data.slip.advice);
                setId(data.slip.id)
            })
            .catch(error => {
              
                console.error('There was a problem fetching the advice:', error);
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="wrapper">
            <span className="adviseId">{loading? ("Loading..."):(<p className="pa">Advice {id}</p>)}</span>
            {loading ? (
                  <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            ) : (
                <p className="advise">{advice}</p>
            )}
            
                <div className="play"> 
                <svg width="444" height="16" viewBox="0 0 444 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="8" width="196" height="1" fill="#4F5D74"/>
                <rect x="248" y="8" width="196" height="1" fill="#4F5D74"/>
                <rect x="212" width="6" height="16" rx="3" fill="#CEE3E9"/>
                <rect x="226" width="6" height="16" rx="3" fill="#CEE3E9"/>
                </svg>

            </div>
            <button className="btn" onClick={fetchAdvice}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0H20C22.2081 0.002526 23.9975 1.79191 24 4V20C23.9975 22.2081 22.2081 23.9975 20 24H4C1.79191 23.9975 0.002526 22.2081 0 20V4C0.002526 1.79191 1.79191 0.002526 4 0ZM6 16.5C6 17.3284 6.67157 18 7.5 18C8.32843 18 9 17.3284 9 16.5C9 15.6716 8.32843 15 7.5 15C6.67157 15 6 15.6716 6 16.5ZM7.5 9C6.67157 9 6 8.32843 6 7.5C6 6.67157 6.67157 6 7.5 6C8.32843 6 9 6.67157 9 7.5C9 8.32843 8.32843 9 7.5 9ZM10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12ZM16.5 18C15.6716 18 15 17.3284 15 16.5C15 15.6716 15.6716 15 16.5 15C17.3284 15 18 15.6716 18 16.5C18 17.3284 17.3284 18 16.5 18ZM15 7.5C15 8.32843 15.6716 9 16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5Z" fill="#202733"/>
                </svg>
              
            </button>
        </div>
    );
}

export default Main;
