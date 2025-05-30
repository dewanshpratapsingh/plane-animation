import React from "react";
import styles from "./App.module.css";
export default function App() {
    return(
        <div className={styles.App}>
            <div className={styles.plane}>
                <img src="/plane.png" alt="plane" width="220" height="110" />
            </div>
            <div className={styles.boom}>
                <img src="/explosion-14627.gif" alt="boom" width="800" height="400" />
            </div>
        </div>
    )
}