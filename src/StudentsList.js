import Student from "./StudentCard"


function Students({ students }){
    return <div className="cardlist">
        {students.map(student=>{
            return <Student student={student} key={student.name}/>
        })}
    </div>
}

export default Students