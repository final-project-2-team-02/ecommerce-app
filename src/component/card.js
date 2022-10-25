import React from 'react'

export const Card = ({ data }) => {
    return (
        <div className="card">
            <div className="wrapper">
                <img alt={data.source.name}
                    src={data.urlToImage}
                />
                <div className="cont">
                    <div className="content">
                        <div className="text">
                            <h3>
                                {data.title}
                            </h3>
                            <p>
                                {data.description}
                            </p>
                        </div>
                    </div>
                    <div className="tombol">
                        <span className="read">Read</span>
                        <span className="save">Save</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
