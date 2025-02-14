import React from 'react'
const contentList = [
    {
        id: 1,
        title: "Hobbies",
        items: "Learning new techs, Squash"
    },
    {
        id: 2,
        title: "Programming Language",
        items: "C#, Java, Python, HTML, CSS, JavaScript, C++, MySQL"
    },
    {
        id: 3,
        title: "FrameWork / Library",
        items: "React, ASP.NET, Flask, Pandas, OpenPyXl"
    },
    {
        id: 4,
        title: "Development Tool",
        items: "Visual Studio, VSC, Eclipse, Ideallij, TinkerCad, GitHub"
    }
]

export default function List(){
    
    return(
        <div className='content-list-container'>
            {contentList.map((content)=>(
                <div key={content.id}>
                    <h1>{content.title}</h1>
                    <p>
                        {content.items}
                    </p>                
                </div>
            ))}
        </div>
    );
}