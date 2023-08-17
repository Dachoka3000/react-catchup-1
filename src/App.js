import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import { useState } from 'react';
import Students from './StudentsList';

//button.addEventListener("click", function)/
//onClick onSubmit onChange

//let name = "Daisy"
//name = Mary
//const p = document.getElementById("p")
//p.textContent = name

function App() {

  function getStudentName(event){
    event.preventDefault()
    console.log(event.target.value)
  }

  function getStudentImage(event){
    event.preventDefault()
    console.log(event.target.value)
  }

  function getStudentPartingShot(event){
    event.preventDefault()
    console.log(event.target.value)
  }
  let number4 = 4
  let number5 = 5
  // function addNumbers(){
  //   console.log(number4+number5)
  // }

  // let age=12
  // age=age+1

  // function addAge(){
  //   age = age+1
  //   console.log(age)
  // }
  // const [age, setAge] = useState(12)
  // //setAge(13)

  // function addAge(){
  //   setAge(age+1)
  // }
  // console.log(age)

  const [name, setName]= useState("")

  function changeName(event){
    event.preventDefault()
    setName(event.target.value)
  }

  const [image, setImage]=useState("")

  function changeImage(event){
    event.preventDefault()
    setImage(event.target.value)
  }

  const [memo, setMemo]=useState("")

  function changeMemo(event){
    event.preventDefault()
    setMemo(event.target.value)
  }

  const [students, setStudents]=useState([])

  function getStudents(event){
    event.preventDefault()

    let student = {
      studentName: name,
      studentImage: image,
      partingShot: memo
    }

    console.log(student)
    let newArray = [...students, student]
    setStudents(newArray)

    event.target.reset()
  }
  console.log(students)

  return (
    <div className="App">
      <Navbar/>
      {/* <button onClick={addNumbers}>Add numbers</button> */}
      {/* <p>I am {age}</p>
      <button onClick={addAge}>Add age</button> */}

      <form onSubmit={getStudents}>
         <input placeholder='add student name' onChange={changeName}/>
         <input placeholder='add student photo link' onChange={changeImage}/>
         <input placeholder='add student parting shot' onChange={changeMemo}/>

         <button >Submit</button>
      </form>

      <Students student={students}/>

    </div>
  );
}

export default App;
