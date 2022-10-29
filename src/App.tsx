import React, {useContext, useState} from 'react';
import './App.css';
import {Button} from "antd";
import Context from "./context";

const A: React.FC = () => {
    useState()
    const count = useContext(Context);
    return (
        <div>
            A
            app传过来的数据: {count}
            <B/>
        </div>
    )
}

const B: React.FC = () => {
    const count = useContext(Context);
    return (
        <div>
            B
            app传过来的数据: {count}
        </div>
    )
}

const App: React.FC = () => {
    const [count, setCount] = useState(12);
    return (
        <Context.Provider value={count}>
            <div>
                App
                <A/>
                <Button type={"primary"}
                        onClick={() => setCount(count + 1)}>
                    修改
                </Button>
            </div>
        </Context.Provider>
    )
};

export default App;
