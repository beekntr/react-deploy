import React from 'react'
import { Bookmark, Car } from 'lucide-react'
import Card from './components/Card.jsx'
const App = () => {
  const arr = [10,20,30,40]
  
  
  return (
    <div className="parent">
    {arr.map(function(){
      return <Card 
        logourl="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        companyname="Netflix"
        jobtitle="Senior Product Designer"
        jobtype="Full Time"
        joblevel="Mid Level"
        salary="$120,000 - $140,000"
        location="Remote"
      />
    })}
    </div>
  )
}

export default App
