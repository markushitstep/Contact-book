import { FC, useEffect, useRef } from "react";

interface IProps{
    ref:any;
    isLoading: boolean;
    callback():any;
}

export const useObserver: FC<IProps> = ({ref, isLoading, callback}):any =>{
    const observer = useRef<IntersectionObserver>();

    useEffect(() => {
        if(isLoading) return;
        if(observer.current) observer.current.disconnect();

        let cb = function(entries:any, observer:any) {
          if(entries[0].isIntersecting) {
            callback();
          }
        };

        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current);
    }, [isLoading]);
}