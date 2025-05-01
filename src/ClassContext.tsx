import React, { Component } from 'react'
import { ThemeContext } from './Contexts.tsx'

export class ClassContext extends Component{
  themeStyles(dark){
    return{
      backgroundColor: dark ? '#333' : '#ccc',
      color: dark ? '#ccc' : '#333',
      padding: '2rem',
      margin:'2rem'
    }
  }
  render(){
    return(
      <ThemeContext.Consumer>
          {(context) => {
            if (!context) {
              // Handle the case where the context is undefined
              return <div>DarkTheme context is not available</div>;
            }
            const {darkTheme} = context 
            return (
              <div style={this.themeStyles(darkTheme)}>Class Theme</div>
            )
        }}
      </ThemeContext.Consumer>
    )

  }
}
