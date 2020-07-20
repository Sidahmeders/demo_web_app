import React, { useState } from 'react';
import '../../styles/froms/one/one-form.css';


function FormOne() {
    
    const [caseColor, setCaseColor] = useState("white");
    
    const setToothColor = e => {
        if (caseColor === "#f34") {
            const toothId = document.getElementsByClassName(`${e.target.className}`);
            [...toothId].forEach(item => item.style.backgroundColor = "#f34")
        } else {
            e.target.style.backgroundColor = caseColor;
        }
    };

    const teethColorCases = [
        {color: "#f34", case:"case one"},
        {color: "#09f", case:"case two"},
        {color: "#dd0", case:"case three"},
        {color: "#0f6", case:"case four"},
        {color: "#666", case: "case five"},
        {color: "navajowhite", case: "case six"},
        {color: "white", case: "eraser"}
    ];

    const teethColorPalette = () => {
        return (
            teethColorCases.map(item => {
                return (
                    <span 
                      key={item.color}
                      onClick={() => setCaseColor(item.color)}
                      style={{backgroundColor: item.color}}
                    >
                        {item.case}
                    </span>
                );
            })
        );
    };

    const teethArrayNumbers = [
        [
            [18, 17, 16, 26, 27, 28],
            [15, 14, 24, 25],
            [13, 12, 11, 21, 22, 23]
        ],
        [
            [43, 42, 41, 31, 32, 33],
            [45, 44, 34, 35],
            [48, 47, 46, 36, 37, 38]
        ]
    ];

    const teeth = (rowIndex, row, mainClass, firstClass, secondClass, thirdClass) => {
        return (
            <div key={rowIndex} className={mainClass}>
                {
                    row.map((column, columnIndex) => {
                        if (columnIndex === 0) {
                            return (
                                <div key={columnIndex} className={`tooth ${firstClass}`}>
                                    {tooth(column)}
                                </div>
                            );
                        } else if (columnIndex === 1) {
                            return (
                                <div key={columnIndex} className={`tooth ${secondClass}`}>
                                    {tooth(column)}
                                </div>
                            );
                        } else {
                            return (
                                <div key={columnIndex} className={`tooth ${thirdClass}`}>
                                    {tooth(column)}
                                </div>
                            );
                        }
                    })
                }
            </div>
        );
    }; 

    const tooth = column => {
        return column.map(tooth => {
            return (
                <div key={tooth}>
                    <span className={tooth} onClick={e => setToothColor(e)}>{tooth}</span>
                    <span className={tooth} onClick={e => setToothColor(e)}></span>
                    <span className={tooth} onClick={e => setToothColor(e)}></span>
                </div>
            );
        });
    };

    return (
        <div className="one">
            <h2>what's new</h2>
            <div className="teeth-colors">
                <p>select a color that specify your case</p>
                <div className="square-colors">
                    {teethColorPalette()}
                </div>
                <div className="dents">
                    {teethArrayNumbers.map((row, rowIndex) => {
                        if (rowIndex === 0) {
                            return teeth(rowIndex, row, "superior", "molar", "premolar", "anterior");
                        } else {
                            return teeth(rowIndex, row, "inferior", "anterior", "premolar", "molar");
                        }
                    })}
                </div> 
            </div>
        </div>
    );
};

export default FormOne;
