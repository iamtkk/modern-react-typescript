export default function App() {
  const texts = ['Hello', 'World!!'].map((text, idx) => <div key={idx} children={text} />)
  return <div>{texts}</div>
}
