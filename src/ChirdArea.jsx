import { memo } from "react";
const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "pink",
  fontWeight: "600"
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("childAreaがレンダリングされた");
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("123");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子供のコンポーネント</p>
          <button onclick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
