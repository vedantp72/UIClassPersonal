export function DataBindingComponent3(){
    var courses = [
        {Title : 'ABC', Poster : "ABC.webp", Topics : ["WEB", "API", "MVC",]},
        {Title : 'PQR', Poster : "PQR.webp", Topics : ["WEB", "API", "MVC",]},
        {Title : 'XYZ', Poster : "XYZ.webp", Topics : ["WEB", "API", "MVC",]},
    ];

    return(
        <div className="container-fluid">
            <h2>Courses</h2>
            <div className="d-flex flex-wrap"></div>
            {
                courses.map(course =>
                    <div className="card m-1 p-1 w-25">
                        <img src={course.Poster} className="card-img-top" height={200}/>
                        <div className="card-header">
                            <h3>{course.Title}</h3>
                        </div>
                        <div className="card-body">
                            <ul>
                                {
                                    course.Topics.map(topic =>
                                        <li>{topic}</li>
                                        )
                                }
                            </ul>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary w-100">Join Course</button>

                        </div>
                    </div>)
            }

        </div>
    )
}