import React from "react";

const Featured = props => {
    return (
        <div className="card col-sm-12 col-lg-6 border-0">
            <div
                className="card-header bg-white py-1 px-0 border-0"
                id="subject-label"
                style={{ color: props.data[0].subject.color }}
            >
                {props.data[0].subject.name}
            </div>
            <figure className="cont">
                <img
                    src={props.data[0].hero_img}
                    className="card-img-top"
                    alt="..."
                ></img>
                <div className="readbutton">
                    <a href="#">Read More</a>
                </div>
            </figure>
            <div className="card-body px-0 pt-1 pb-5 pb-md-4">
                <h4 className="card-title">{props.data[0].title}</h4>
                <h6 className="card-subtitle py-2 text-muted" id="author">
                    <img
                        src={props.data[0].author.picture}
                        className="pr-1"
                        id="author-image"
                        alt=""
                    ></img>{" "}
                    by {props.data[0].author.name}
                </h6>
                <p
                    className="card-text d-xs-block d-md-none"
                    id="featured-text"
                >
                    {props.data[0].text}
                </p>
            </div>
        </div>
    );
};

export default Featured;
