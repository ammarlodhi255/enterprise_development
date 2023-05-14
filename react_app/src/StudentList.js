const StudentList = (props) => {
    const students = props.students;

    return (
        <div className="students">
            {students.map((student) => (
                <div className="student" key={ student.id }>
                    <h4>Name: { student.name }</h4>
                    <p>Age: { student.age }</p>
                    <button onClick={ () => props.handleDelete(student.id) }>delete student</button>
                </div>
            ))}
        </div>
    );
}

export default StudentList;