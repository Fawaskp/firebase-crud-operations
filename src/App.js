import './App.css';
import {Firebase} from './firebase/config'
import { getFirestore, collection,getDocs, setDoc,doc,deleteDoc,updateDoc,deleteField } from "firebase/firestore";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, singOut, signOut} from 'firebase/auth'

function App() {
  
  const db = getFirestore(Firebase)
  
  // Getting all documents in a collection
  function showFirebase(){
    getDocs(collection(db,'Users')).then(snapshot=>{
      snapshot.forEach((element) => {
        console.log(element.data(),element.id);
      })
    }).catch(err=>alert(err))
  }
  
  const productsRef = collection(db, "Products"); 
  // Setting a document in a collection
  function setFireBase(){
    setDoc(doc(productsRef), { name: "Nothing", price: 8978, type: "Headphone"});
  }
  
  // Delete document in a collection
  function deleteDocument(){
    deleteDoc(doc(db,'Products','id')).catch(err=>alert(err))
  }
  
  const productDocRef = doc(db,'Products','Rpmo6MmXrTROtSNM43VU')
  // Delete field in a collection
  function updateDocField(){
    updateDoc(productDocRef,{name:'mayamohini'}).catch(err=>alert(err))
  }
  
  
  
  return (
    <div className="App">
      <button onClick={()=>singUp()} >Signup</button>
      <button onClick={()=>logIn()} >Login</button>
      <button onClick={()=>userSignOut()}>Signout</button>
      <button onClick={()=>setFireBase()} >Set into firebase</button>
      <button onClick={()=>showFirebase()}> Show products</button>
      <button onClick={()=>deleteDocument()}> Delete docs</button>
      <button onClick={()=>updateDocField()} > update field</button>
    </div>
  );
}

export default App



var email = 'fawas@gmail.com'
var password = '123456'

function singUp(){
  const auth = getAuth()
  createUserWithEmailAndPassword(auth,'fawas@gmail.com','123456').then(response=>{
    alert('now you are loggedin ',response.user);
  }).catch(err=>alert(err))
}

function logIn(){
  const auth = getAuth()
  signInWithEmailAndPassword(auth,email,password).then(response=>{
    alert('you are succefully logged in now')
  }).catch(err=>{
    alert(err)
  })
}

function userSignOut(){
  const auth = getAuth()
  signOut(auth).then(response=>{
    alert('user succefully logged out')
  }).catch(err=>{
    alert(err)
  })
}