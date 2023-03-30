import {useState, useCallback} from "react";

export function useToggle(initia){
    const [open,setOpen] = useState(initial);

    return [open, useCallback(()=> setOpen(status => !status))];
}