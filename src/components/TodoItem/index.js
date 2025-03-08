// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodo, deleteTod} = props
  const {id, title} = eachTodo
  const onDelete = () => {
    deleteTod(id)
  }
  return (
    <li className="eachTodo-item">
      <p className="title1">{title}</p>
      <button className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
