import { useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { IProps } from "./types";
import * as s from "./styles";

const EditableText = ({ initialValue, onChange, maxWidth, disabled, actionsRef }: IProps) => {
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(initialValue);
  const inputRef = useRef<null | HTMLInputElement>(null);

  const inputCallbackRef = useCallback((node: null | HTMLInputElement) => {
    inputRef.current = node;
    node?.focus();
  }, []);

  const handleUpdate = () => {
    if (!input.trim()) setInput(initialValue);
    else if (initialValue !== input) onChange(input);
    setEdit(false);
  };

  useImperativeHandle(actionsRef, () => (!disabled ? { setEdit } : { setEdit: () => {} }), [disabled]);

  useEffect(() => {
    if (edit && inputRef.current) {
      inputRef.current!.style.width = "0px";
      inputRef.current!.style.width = `${(inputRef.current?.scrollWidth || 0) + 2}px`;
    }
  }, [input, edit]);

  return edit ? (
    <s.InlineInput
      ref={inputCallbackRef}
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onBlur={handleUpdate}
      onKeyDown={(e) => {
        e.stopPropagation();
        if (e.key === "Enter") handleUpdate();
      }}
      maxWidth={maxWidth}
    />
  ) : (
    <s.TextWrapper
      tabIndex={0}
      role="button"
      {...(!disabled
        ? {
            onClick: () => setEdit(true),
            onKeyDown: (e) => {
              if (e.key === "Enter") setEdit(true);
            },
          }
        : { "aria-disabled": true })}
    >
      {input}
    </s.TextWrapper>
  );
};

export default EditableText;
