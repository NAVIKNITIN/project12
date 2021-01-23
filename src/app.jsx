import React, { useState } from "react";
import Fetchpost from "./fetch";
function App(props){
    const [name,setname] = useState("users");
    let data=Fetchpost(`https://jsonplaceholder.typicode.com/${name}`,name);
    if(!data){return null;}
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
