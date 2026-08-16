import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../settings";

const withDataFetching = (title, WrapperComponent, endpoint) => {
    return () => {
        const [products, setProducts] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const [data, setData] = useState([]);
        const [error, setError] = useState("");


        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(`${API_BASE_URL}${endpoint}`);
                    if(!response.ok) {
                        throw new Error("An error occured when fetch product list");
                    }  
                    const data = await response.json();
                    setData(data);
                    setIsLoading(false);
                } catch (error) {
                    console.error(`An error occured when fetch on ${endpoint}`, error);
                    setIsLoading(false);
                    setError("An error occured when fetch data");
                }
            }
            fetchData();
        }, [endpoint]);

        if (isLoading) {
            return (
                <div>
                    <h2>{title}</h2>
                    <p>Loading data</p>
                </div>
            )
        }    

        if (error) {
            return (
                <div>
                    <h2>{title}</h2>
                    <p>{error}</p>
                </div>
            )
        }

        if (data.length === 0) {
            return (
                <div>
                    <h2>{title}</h2>
                    <p>no data was found.</p>
                </div>
            )
        }
        return ( <WrapperComponent data={data}/>)
    }
}

export default withDataFetching;