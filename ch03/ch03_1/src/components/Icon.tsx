import type {CSSProperties, FC} from 'react'

export type IconProps = {
  name: string
  style?: CSSProperties
}

export const Icon: FC<IconProps> = ({name, ...props}) => {
  return (
    <span className="material-icons" {...props}>
      {name}
    </span>
  )
}
