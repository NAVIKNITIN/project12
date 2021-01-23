import React, { useEffect, useState } from "react";
function App(){
    const [data,setdata] = useState([]);
    const [name,setname] = useState("users");
//this.state={data:"users"} same done above by using hook method
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${name}`)
        .then(response=>response.json())
        .then(items=>{setdata(items);
        });
    },[name]);
    return(
        <React.Fragment>
            <div className="ui container">
                <div className="ui row">
                    <div className="col-md-12">
                        <button type="button" className="btn btn-primary"
                        onClick={()=>setname('USERS')}
                        >USERS</button>
                        <button type="button" className="btn btn-info"
                        onClick={()=>setname('POSTS')}
                        >POSTS</button>
                    </div>
                </div>
                <div className="row">
                    {
                        data.slice(0,10).map(item=>{
                            return(
                                <ol key={item.id}>
                                        {item.title ? <h1>{item.title}</h1>
                                        : <h1>{item.username}</h1>}
                                </ol>
                            )
                        })
                    }
                    
                </div>
            </div>
        </React.Fragment>
    )
};
export default App;
