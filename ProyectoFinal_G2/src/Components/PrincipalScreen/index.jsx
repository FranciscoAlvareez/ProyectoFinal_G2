import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import './index.css'

export function PrincipalScreen() {
    return (
        <div className="principal-screen">
            
            <div className="conteiner-principal">
                <div className="header-conteiner">
                    <h1 className="header-title"> New and trending</h1>
                    <p className="header-description">Based on player counts and realease data</p>
                </div>
                
                
                <div className="conteiner-sidebar" style={{ marginTop: '20px' }}>
                    <Sidebar />
                </div>
                <div className="conteiner-cards">
                
                </div>
      
            </div>

        </div>
          
    )
}