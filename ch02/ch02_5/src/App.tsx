import EventListener from './pages/EventListener'
import OnClick from './pages/OnClick'
import ReactOnClick from './pages/ReactOnClick'
import DispatchEvent from './pages/DispatchEvent'
import EventBubbling from './pages/EventBubbling'
import StopPropagation from './pages/StopPropagation'
import VariousInputs from './pages/VariousInputs'
import OnChange from './pages/OnChange'
import FileInput from './pages/FileInput'
import DragDrop from './pages/DragDrop'
import FileDrop from './pages/FileDrop'

function App() {
  return (
    <div>
      <EventListener />
      <OnClick />
      <ReactOnClick />
      <DispatchEvent />
      <EventBubbling />
      <StopPropagation />
      <VariousInputs />
      <OnChange />
      <FileInput />
      <DragDrop />
      <FileDrop />
    </div>
  )
}

export default App
