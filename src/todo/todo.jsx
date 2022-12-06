import { render } from '@testing-library/react'
import React from 'react'
import './todo.css';
function Todo(props) {
  return (
  <div class="list ">
    <div>{props.value}</div>
    <button onClick={props.fungsi} class="btn btn-light ">Hapus</button>
  </div>
    )
}

export default Todo