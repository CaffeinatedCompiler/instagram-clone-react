import { ComponentPropsWithoutRef } from 'react'

export default function DirectIcon(props: { active?: boolean } & ComponentPropsWithoutRef<'svg'>) {
  if (props.active) {
    return (
      <svg fill="#262626" height={22} viewBox="0 0 48 48" width={22} {...props}>
        <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l13.2 13c.5.4 1.1.6 1.7.3l16.6-8c.7-.3 1.6-.1 2 .5.4.7.2 1.6-.5 2l-15.6 9.9c-.5.3-.8 1-.7 1.6l4.6 19c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.5-.5.5-1.1.2-1.6z" />
      </svg>
    )
  }
  return (
    <svg
      aria-label="Direct"
      className="prefix___8-yf5"
      fill="#262626"
      height={22}
      viewBox="0 0 48 48"
      width={22}
      {...props}
    >
      <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z" />
    </svg>
  )
}
