import * as React from "react";
import useChildren from "use-children";

const Hello = ({ name }: { name: string }) => {
  return (
    <>
      Hello {name}
      <br />
    </>
  );
};

/**
 *
 * Should only render Hello components
 */
const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const [withTarget, withoutTarget] = useChildren(children, Hello);

  return <>{withTarget}</>;
};

function App() {
  return (
    <>
      <Wrapper>
        <Hello name="Glen" />
        <Hello name="Archer" />
        <Hello name="Neal" />
        <Hello name="Luke" />
        <div>Hello x</div>
        <div>Hello y</div>
        <div>Hello z</div>
      </Wrapper>
    </>
  );
}

export default App;
