import React, { Component } from 'react';
import styles from './button.module.css';

class downloadButton extends Component{
    render(){
        return <button className={styles.standard}>Normal Button</button>;
    }
}

export default downloadButton;