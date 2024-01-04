import {useMemo, useCallback, useState} from 'react'
import {Title, Subtitle} from '../components'
import * as D from '../data'

export default function HigherOrderRadioInputTest() {
  const jobTitles = useMemo(() => D.makeArray(4).map(D.randomJobTitle), [])
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const onChange = useCallback(
    (index: number) => () => setSelectedIndex(notUsed => index),
    []
  )
  return (
    <section className="mt-4">
      <h2 className="font-bold text-5xl text-center">HigherOrderRadioInputTest</h2>
      <div className="mt-4"></div>
    </section>
  )
}
