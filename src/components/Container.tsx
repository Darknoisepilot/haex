import * as React from 'react';

type Props = React.PropsWithChildren<{ className?: string }>;

export default function Container({ className = '', children }: Props) {
  return <div className={`container-max ${className}`}>{children}</div>;
}
