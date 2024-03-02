'use client';

export default function MoviePageErrorBoundary(
  props: Readonly<{ error: Error }>,
) {
  return <div>{props.error.message}</div>;
}
