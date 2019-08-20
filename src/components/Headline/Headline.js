import React from "react";

const Headline = props => {
    return (
        <div className="card col-xs-12 col-sm-6 col-lg-3 border-0">
            <div
                className="card-header bg-white pb-1 pt-2 px-0 border-0"
                id="subject-label"
                style={{ color: props.data.subject.color }}
            >
                {props.data.subject.name}
            </div>
            <figure className="cont">
                <img
                    src={props.data.hero_img}
                    className="card-img-top"
                    alt="..."
                ></img>
            </figure>
            <div className="card-body px-0 pt-1 pb-5 pb-md-4">
                <h5 className="card-title" id="headline-title">
                    {props.data.title}
                </h5>
                <h6 className="card-subtitle py-2 text-muted" id="author">
                    <img
                        src={props.data.author.picture}
                        className="pr-1"
                        id="def-author-image"
                        alt=""
                    ></img>{" "}
                    by {props.data.author.name}
                </h6>
                <p className="card-text">{props.data.text}</p>
            </div>
        </div>
    );
};

export default Headline;
