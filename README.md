# use-children

Filter React children for specific component

## Why?

Imagine you're building a Modal component which consists of three components:

1. ModalRoot - Portal component
2. ModalOverlay - Overlay component
3. ModalContent - The primary content container component

where the intended usage is the following:

```jsx
import { useState } from "react";
import { ModalRoot, ModalOverlay, ModalContent } from "../modal";

const MyModal = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <ModalRoot isOpen={open}>
      <ModalOverlay />
      <ModalContent />
    </ModalRoot>
  );
};
```

However, since ModalRoot does not force the user to pass in only ModalOverlay and ModalContent. The user can also do the following:

```jsx
import { useState } from "react";
import { ModalRoot, ModalOverlay, ModalContent } from "../modal";

const MyModal = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <ModalRoot isOpen={open}>
      <div>Some content</div>
    </ModalRoot>
  );
};
```

With `use-children` you can filter for just `ModalContent` and `ModalOverlay`

## Install:

**NPM**:

```shell
npm install --save use-children
```

**Yarn**:

```shell
yarn add -D use-children
```

## Usage:

```jsx
import useChildren from "useChildren";

const ModalContent = () => {
  return <>{/** Some JSX */}</>;
};

const ModalOverlay = () => {
  return <>{/** Some JSX */}</>;
};

const ModalRoot = ({ children, isOpen }) => {
  // withOverlay is an array of all ModalOverlay components
  const [withOverlay] = useChildren(children, ModalOverlay);
  // withContent is an array of all MdalContent components
  const [withContent] = useChildren(children, ModalContent);

  return (
    <div className="modal-root">
      {isOpen ? (
        <>
          {withOverlay}
          {withContent}
        </>
      ) : null}
    </div>
  );
};
```
