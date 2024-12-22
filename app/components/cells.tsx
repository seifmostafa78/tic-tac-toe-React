import { CLIENT_STATIC_FILES_RUNTIME_MAIN } from "next/dist/shared/lib/constants";
import { Dispatch, SetStateAction } from "react";

type cellprops = {
    id: number,
    cells: string[],
    setcells: Dispatch<SetStateAction<string[]>>,
    turn: string,
    setturn: Dispatch<SetStateAction<string>>,
    cell: string,
    winningmessage: string,
}

const Cell = ({id, cells, setcells, turn, setturn, cell,  winningmessage}: cellprops) => {

    const handleClick = () => {
        const nottaken = !cells[id]
        if(!winningmessage){
            if(nottaken){
                if(turn === "cross"){
                    handleChangeturn("cross")
                    setturn("circle")
                }
                else{
                    handleChangeturn("circle")
                    setturn("cross")
                }
            }
        }
    }

    const handleChangeturn = (turn: string) => {
        let copycells = [...cells]
        copycells[id] = turn
        setcells(copycells)
    }

    return <div className="square" onClick={handleClick}>
        <div className={cell}>{cell? cell == "cross"? "X" : "O" :""}</div>
    </div>
}

export default Cell;