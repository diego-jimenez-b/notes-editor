import { useState } from "react";
import ReactSelect, { Props, GroupBase } from "react-select";
import * as s from "./styles";

interface IProps {
  render: (props: { onClick: () => void }) => JSX.Element;
}

const FloatingSelect = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({
  render,
  onChange,
  ...selectProps
}: Props<Option, IsMulti, Group> & IProps) => {
  const [show, setShow] = useState(false);
  return (
    <>
      {render({ onClick: () => setShow(true) })}
      {show && (
        <s.SelectWrapper>
          <ReactSelect
            autoFocus
            menuIsOpen
            onBlur={() => setShow(false)}
            onChange={(selected, action) => {
              setShow(false);
              if (onChange) onChange(selected, action);
            }}
            {...selectProps}
          />
        </s.SelectWrapper>
      )}
    </>
  );
};

export default FloatingSelect;
