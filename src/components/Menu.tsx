import '../App.css'

export default function Menu ({state}:any) {
  return (
    <div className={`menu ${state.menuSelected ? 'slide-in' : 'slide-out'}`}>
    </div>
  )
}