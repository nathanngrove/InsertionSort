import React from 'react'

const ActionsBar = ( {list, setList, randomColor} ) => {

    const generateNewArray = () => {
        let tempList = [];
        for(let i = 0; i < 15; i++) {
            tempList = [...tempList, {"value": Math.floor((Math.random() * 90) + 1), "color": randomColor(), "pointer": false, "condition": false, "key": Math.random() * 1000}]
        }
        setList(tempList);
    }

    const sortArray = () => {
        let tempList = [...list];
        for(let i = 1; i < tempList.length; i++) {
            let key = tempList[i];
            let j = i - 1;
            while(j >= 0 && tempList[j].value > key.value) {
                tempList[j + 1] = tempList[j];
                j = j - 1;
            }
            tempList[j + 1] = key;
        }
        setList(tempList);
    }

    return (
        <div>
            <button className="action-button" onClick={generateNewArray}>New Array</button>
            <button className="action-button" onClick={sortArray}>Sort Array</button>
        </div>
    );
};

export default ActionsBar;