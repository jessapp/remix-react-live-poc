import { LiveProvider, LivePreview } from "react-live";

export default function Index() {
  return (
    <LiveProvider code={`<h1>Hello</h1>`}>
      <LivePreview />
    </LiveProvider>
  );
}
