
import './App.css'

function App() {
  const studentname:string="Le Ann A. Lazaro";
  const course:string="ACT_MM_2";
  const isEnrolled:boolean=true;
  const subject:string[]=["ACTGRPH", "ACTHUM", "ACTSOP","APTECH","PROPHY2","DATASG","AGUI"];
 
  return (
    <>
      <h1>{studentname}</h1>
      <p>{course}</p>
      <p>{isEnrolled? "Student is Enrolled":"Student is not enrolled"}</p>
      <ul>
        {subject.map((subject,index)=>(
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </>
  )
}

export default App
