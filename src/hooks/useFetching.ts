import { useState } from 'react';

export const useFetching = (callback:any):any => {
    const [isLoading, setIsLoading] = useState(false);
    
    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback()
        } catch (error:any) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading]
}