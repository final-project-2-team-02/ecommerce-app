import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { saveNews, deleteNews } from '../redux/saveredux';

export const Card = ({ data }) => {
    const { saved } = useSelector((state) => state.saved);
    const dispatch = useDispatch();
    const isSaved = saved.find((news) => news.url === data.url);

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
                        <span className="save" onClick={() => {
                            isSaved
                                ? dispatch(deleteNews(data.url))
                                : dispatch(saveNews(data));
                        }}>{isSaved ? "Saved" : "Save"}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
