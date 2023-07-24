import React from 'react'

function Card(props) {
    const date = (props.curr.publishedAt.split("T")[0]).split('-');
    return (
        <div id="card" onClick={()=> { props.tooltip(props.index) }} key={props.index}>
            <img src= {props.curr.urlToImage} alt="News image" />

            <h3 id="title">{props.curr.title}</h3>
            <p id="description"> {props.curr.description ? props.curr.description : ""}
            </p>
            <span id="published_time">Published At : {date[2]}/{date[1]}/{date[0]} </span>
        </div>
    )
}

export default Card