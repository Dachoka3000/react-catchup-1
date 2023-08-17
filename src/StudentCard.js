import './Student.css'

export default function Student({student}){
    return <div className="card">
                <img src={student.studentImage}/>
                <h4>{student.studentName}</h4>
                <p>{student.partingShot}</p>

    </div>
}