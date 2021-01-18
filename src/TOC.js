import "./TOC.css"

const titles_and_subtitles = [
    {
        title : "CONTENT",
        items : ["a", "b", "c", "d", "e"]
    },
    {
        title : "STYLING",
        items : ["a", "b", "c", "d", "e"]
    },
    {
        title : "EVENTS",
        items : ["a", "b", "c", "d", "e"]
    }
]

export var ll = titles_and_subtitles.map((obj, i) => 
    <div key={i.toString()}>
        <h3>{obj.title}</h3> 
        <h4>{obj.items}</h4>    
    </div>
);

function TOC() {
    return(
        <div id="hold_titles_and_subtitles">
            {ll}
        </div>
    )
}

export default TOC;