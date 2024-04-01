import React from 'react';

function Index(props) {
    return (
        <div className={"container m-3 "}>
            <div className="row">
                <div className="col-md-6">
                    <h2>Media</h2>
                </div>
            </div>
            <div className="row  ">
                <div className="col-md-6 my-3 ">
                    <div className="card w-100">
                        <div className="card-body">
                            <iframe className={"rounded-3"} width="100%" height="250"
                                    src="https://www.youtube.com/embed/9yP9287oZRg?si=AmYrmHjMDptfd8Hp"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <h6 className={"my-3"}>ANGRENDA ILK MAROTIBA IT O`QUV MARKAZI </h6>
                            <p> - IBS school ochilish marosimi ANGREN HOKIMINI MASLAXATLARI</p>

                        </div>
                    </div>
                </div>
                <div className="col-md-6 my-3">
                    <div className="card w-100">
                        <div className="card-body">
                            <iframe width="100%" className={"rounded-3"} height="250"
                                    src="https://www.youtube.com/embed/SXibtPzaxhU?si=P_0qlYyHInhwF8vq"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <h6 className={"my-3"}>IBS SCHOOL Ochilish Marosimi.</h6>
                            <p>ANGRENDA ILK MAROTIBA IT O`QUV MARKAZI</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Index;