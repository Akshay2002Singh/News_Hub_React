import React from 'react'

function Tootlip(props) {
  return (
    <div id="tooltip_box" style={{
      display : props.dis_tooltip,
    }}>
        <svg onClick={()=>{props.set_dis_tooltip("none")}} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.881px" height="122.88px"
            viewBox="0 0 122.881 122.88" enable-background="new 0 0 122.881 122.88" xmlSpace="preserve">
            <g>
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M61.44,0c33.933,0,61.441,27.507,61.441,61.439 c0,33.933-27.508,61.44-61.441,61.44C27.508,122.88,0,95.372,0,61.439C0,27.507,27.508,0,61.44,0L61.44,0z M81.719,36.226 c1.363-1.363,3.572-1.363,4.936,0c1.363,1.363,1.363,3.573,0,4.936L66.375,61.439l20.279,20.278c1.363,1.363,1.363,3.573,0,4.937 c-1.363,1.362-3.572,1.362-4.936,0L61.44,66.376L41.162,86.654c-1.362,1.362-3.573,1.362-4.936,0c-1.363-1.363-1.363-3.573,0-4.937 l20.278-20.278L36.226,41.162c-1.363-1.363-1.363-3.573,0-4.936c1.363-1.363,3.573-1.363,4.936,0L61.44,56.504L81.719,36.226 L81.719,36.226z" />
            </g>
        </svg>

        <div id="tooltip_box_img"><img id="tooltip_image"
                src={props.data.urlToImage} alt="news image" /></div>
        <div id="tooltip_box_heading">{props.data.title}</div>
        <div id="tooltip_box_desc">{props.data.description}</div>
        <div id="tooltip_box_source">Source : <a id="source_url" href={props.data.url} target="_blank">{props.data.url}</a></div>

    </div>
  )
}

export default Tootlip