import styled from "styled-components";
import { ReactNode } from "react";

const Container = styled.div<{ imgUrl: string; width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ imgUrl }) => `url(${imgUrl})`};
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// width: ${({ width }) => width};
// height: ${({ height }) => height};

const Glass = styled.div<{
  imgUrl: string;
  blur: string;
  topBottom: string | number;
  leftRight: string | number;
  width: string;
  height: string;
}>`
  background: ${({ imgUrl }) => `url(${imgUrl})`};
  background-size: cover;
  width: 100%;
  height: 100%;
  border: 1px solid white;
  background-position: center;
  clip-path: inset(
    ${({ topBottom, leftRight }) => `${topBottom} ${leftRight}`}
  );
  box-shadow: 10px 10px 10px gray;
  filter: blur(${({ blur }) => blur});
  z-index: 0;
`;

const TextArea = styled.div<{
  topBottom: string | number;
  leftRight: string | number;
  width: string;
  height: string;
}>`
  width: calc(${({ leftRight, width }) => `${width} - (2 * ${leftRight})`});
  height: calc(${({ topBottom, height }) => `${height} - (2 * ${topBottom})`});
  z-index: 5;
  position: absolute;
  box-shadow: 10px 15px 40px 20px gray;
  overflow: hidden;
`;

type Props = {
  imgUrl: string;
  blur: string;
  children?: ReactNode;
  topBottom?: string | number;
  leftRight?: string | number;
  width: string;
  height: string;
};

export default function ForstedGlass({
  imgUrl,
  blur,
  children,
  topBottom = 0,
  leftRight = 0,
  width,
  height,
}: Props) {
  return (
    <Container imgUrl={imgUrl} width={width} height={height}>
      <Glass
        width={width}
        height={height}
        imgUrl={imgUrl}
        blur={blur}
        topBottom={topBottom}
        leftRight={leftRight}
      />
      <TextArea
        topBottom={topBottom}
        leftRight={leftRight}
        width={width}
        height={height}
      >
        {children && children}
      </TextArea>
    </Container>
  );
}
