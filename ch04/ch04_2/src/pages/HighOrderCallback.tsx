import {useMemo, useCallback} from 'react'
import {Title} from '../components'
import {Button} from '../theme/daisyui'
import * as D from '../data'

export default function HighOrderCallback() {
  const onClick = useCallback((name: string) => () => alert(`${name} clicked`), [])
  const buttons = useMemo(
    () =>
      D.makeArray(3)
        .map(D.randomName)
        .map((name, index) => (
          <Button
            key={index}
            onClick={onClick(name)}
            className="btn btn-primary normal-case btn-wide btn-xs">
            {name}
          </Button>
        )),
    [onClick]
  )
  return (
    <section className="mt-4">
      <Title>HighOrderCallback</Title>
      <div className="flex justify-evenly mt-4">{buttons}</div>
    </section>
  )
}
