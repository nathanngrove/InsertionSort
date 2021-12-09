import './App.css';
import { useState } from 'react';
import ActionsBar from './components/ActionsBar';
import DisplayBarsComponent from './components/DisplayBarsComponent';

function App() {

    const colors = [
        {color: "Teal", key: 0},
        {color: "Crimson", key: 1},
        {color: "DarkOliveGreen", key: 2},
        {color: "DarkMagenta", key: 3},
        {color: "DarkCyan", key: 4},
        {color: "CornflowerBlue", key: 5},
        {color: "Purple", key: 6},
        {color: "CadetBlue", key: 7},
        {color: "Blue", key: 8},
        {color: "Brown", key: 9},
        {color: "Chocolate", key: 10},
        {color: "DarkKhaki", key: 11},
        {color: "DarkSalmon", key: 12},
        {color: "DarkSlateBlue", key: 13},
        {color: "DeepPink", key: 14},
        {color: "DarkGreen", key: 15},
        {color: "LightSeaGreen", key: 16},
        {color: "MediumSlateBlue", key: 17},
        {color: "MidnightBlue", key: 18},
        {color: "PaleVioletRed", key: 19},
        {color: "Peru", key: 20},
        {color: "Plum", key: 21},
        {color: "RosyBrown", key: 22},
        {color: "SandyBrown", key: 23},
        {color: "SteelBlue", key: 24},
        {color: "Tomato", key: 25},
        {color: "Thistle", key: 26},
    ];

    const randomColor = () => {
        return colors[Math.floor(Math.random() * 26)].color;
    }

    const [list, setList] = useState([
        {"value": Math.floor((Math.random() * 90) + 1), "color": randomColor(), "pointer": false, "condition": false, "key": Math.random() * 1000 },
        {"value": Math.floor((Math.random() * 90) + 1), "color": randomColor(), "pointer": false, "condition": false, "key": Math.random() * 1000 },
        {"value": Math.floor((Math.random() * 90) + 1), "color": randomColor(), "pointer": false, "condition": false, "key": Math.random() * 1000 },
        {"value": Math.floor((Math.random() * 90) + 1), "color": randomColor(), "pointer": false, "condition": false, "key": Math.random() * 1000 },
        {"value": Math.floor((Math.random() * 90) + 1), "color": randomColor(), "pointer": false, "condition": false, "key": Math.random() * 1000 },
        {"value": Math.floor((Math.random() * 90) + 1), "color": randomColor(), "pointer": false, "condition": false, "key": Math.random() * 1000 },
        {"value": Math.floor((Math.random() * 90) + 1), "color": randomColor(), "pointer": false, "condition": false, "key": Math.random() * 1000 },
        {"value": Math.floor((Math.random() * 90) + 1), "color": randomColor(), "pointer": false, "condition": false, "key": Math.random() * 1000 },
        {"value": Math.floor((Math.random() * 90) + 1), "color": randomColor(), "pointer": false, "condition": false, "key": Math.random() * 1000 },
        {"value": Math.floor((Math.random() * 90) + 1), "color": randomColor(), "pointer": false, "condition": false, "key": Math.random() * 1000 },
        {"value": Math.floor((Math.random() * 90) + 1), "color": randomColor(), "pointer": false, "condition": false, "key": Math.random() * 1000 },
        {"value": Math.floor((Math.random() * 90) + 1), "color": randomColor(), "pointer": false, "condition": false, "key": Math.random() * 1000 },
        {"value": Math.floor((Math.random() * 90) + 1), "color": randomColor(), "pointer": false, "condition": false, "key": Math.random() * 1000 },
        {"value": Math.floor((Math.random() * 90) + 1), "color": randomColor(), "pointer": false, "condition": false, "key": Math.random() * 1000 },
        {"value": Math.floor((Math.random() * 90) + 1), "color": randomColor(), "pointer": false, "condition": false, "key": Math.random() * 1000 },
    ]);

  return (
    <div className="main-wrapper">
        <h1 className="header-title">Insertion Sort Visualizer</h1>
        <DisplayBarsComponent list={list}/>
        <ActionsBar list={list} setList={setList} randomColor={randomColor}/>
    </div>
  );
};

export default App;
