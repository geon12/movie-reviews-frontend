import {useState} from "react"
import MoveButton from "./MoveButton"
import MovieCard from "./MovieCard"
import ReviewerCard from "./ReviewerCard"
import './styles/TopCardsContainer.css'


function TopCardsContainer({data,isMovie,sortData}) {

    const [dataStart,setDataStart] = useState(0)
    const carouselLength = 4
    const topDataLength = 10

    function handleForwardData() {
        if(dataStart < topDataLength-carouselLength) {
            setDataStart(prevStart => prevStart + 1)
        }
    }
    function handleBackData() {
        if(dataStart > 0) {
            setDataStart(prevStart => prevStart - 1)
        }
    }

    function topData() {
        return data.sort(sortData).slice(0,topDataLength)
        
    }
    return (
        <div className="d-flex flex-row styless justify-content-center m-4">
            <MoveButton handleMove={handleBackData} goBack={true}/>
             {topData().slice(dataStart,dataStart + carouselLength).map(record => 
                isMovie ? <div key={record.id} className="top-card"><MovieCard movie={record} style={"resource-card"}/></div> :
                <div key={record.id} className="top-card"><ReviewerCard reviewer={record} style={"resource-card"}/></div>)}
             <MoveButton handleMove={handleForwardData} goBack={false}/>
        </div>
    )
}

export default TopCardsContainer