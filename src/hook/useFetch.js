import {useEffect, useState} from "react";

const useFetch = (url, opts)=>{
    const [load, setLoad] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const requestData = async ()=>{
            setLoad(true)
            try{
                const res = await fetch(url, opts);
                if(res.ok){
                    try{
                        const data = await res.json();
                        setData(data);
                    }
                    catch (error){
                        throw new Error(`Ошибка парсинга ${res.status} ${res.statusText}`);
                    }
                }
                else {
                    throw new Error(`Ошибка соединения ${res.status} ${res.statusText}`);
                }
            }
            catch (error){
                setError(error.message);
            }
            finally {
                setLoad(false);
            }
        }
        requestData();
    },[url, opts]);

    return [data, load, error];
}

export default useFetch;