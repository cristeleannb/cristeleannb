import * as React from 'react';
import Svg, {SvgProps, Path, Circle} from 'react-native-svg';

function SvgNoConnection(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 80 80"
      fill="none"
      ref={svgRef}
      {...props}>
      <Path
        d="M39.861 68.916a4.583 4.583 0 100-9.166 4.583 4.583 0 000 9.166z"
        fill="#E87722"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.333 64.333a5.472 5.472 0 11-10.944 0 5.472 5.472 0 0110.944 0zm-.889 0a4.583 4.583 0 11-9.166 0 4.583 4.583 0 019.166 0z"
        fill="#E87722"
      />
      <Path
        d="M74.81 25.634c-9.13-9.795-21.491-15.19-34.81-15.19-13.319 0-25.68 5.395-34.81 15.19a2.778 2.778 0 004.064 3.788C17.321 20.767 28.24 16 40 16c11.76 0 22.679 4.767 30.746 13.422a2.77 2.77 0 002.032.883 2.778 2.778 0 002.032-4.672z"
        fill="#F3BB90"
      />
      <Path
        d="M64.61 37.105C57.862 30.306 49.122 26.562 40 26.562c-9.125 0-17.865 3.745-24.611 10.543a2.778 2.778 0 003.944 3.914c5.695-5.74 13.034-8.901 20.667-8.901 7.63 0 14.97 3.16 20.667 8.9a2.77 2.77 0 001.971.822 2.778 2.778 0 001.972-4.735zM53.493 48.61c-3.614-3.58-8.794-5.804-13.52-5.804h-.204c-4.725 0-9.906 2.224-13.52 5.804a2.778 2.778 0 003.91 3.947c2.573-2.55 6.345-4.196 9.61-4.196h.204c3.265 0 7.038 1.647 9.61 4.196a2.778 2.778 0 103.91-3.947z"
        fill="#F3BB90"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.865 25.33C14.078 15.447 26.557 10 39.999 10c13.444 0 25.923 5.446 35.136 15.33a3.222 3.222 0 01-4.714 4.395c-7.984-8.566-18.785-13.28-30.42-13.28-11.637 0-22.438 4.714-30.422 13.28a3.222 3.222 0 01-4.714-4.394zm.65.607a2.334 2.334 0 003.414 3.182C17.08 20.374 28.116 15.556 40 15.556s22.92 4.818 31.07 13.563c.46.493 1.083.742 1.708.742a2.333 2.333 0 001.706-3.924C65.44 16.232 53.195 10.889 40 10.889c-13.195 0-25.44 5.343-34.485 15.048zm9.558 10.855C21.898 29.914 30.75 26.118 40 26.118c9.247 0 18.099 3.796 24.926 10.674a3.222 3.222 0 01-4.575 4.54c-5.619-5.662-12.847-8.77-20.351-8.77-7.507 0-14.735 3.108-20.352 8.77a3.222 3.222 0 11-4.575-4.54zM40 27.006c-9 0-17.628 3.693-24.296 10.413a2.333 2.333 0 103.313 3.287C24.79 34.886 32.241 31.672 40 31.672c7.756 0 15.207 3.214 20.982 9.033.456.46 1.056.69 1.657.69a2.333 2.333 0 001.656-3.977C57.625 30.698 48.997 27.005 40 27.005zM25.937 48.294c3.69-3.655 8.98-5.933 13.832-5.933h.205c4.852 0 10.142 2.277 13.832 5.933a3.222 3.222 0 11-4.536 4.578c-2.499-2.476-6.162-4.066-9.297-4.066h-.203c-3.136 0-6.798 1.59-9.298 4.066a3.213 3.213 0 01-2.267.934 3.222 3.222 0 01-2.268-5.511zm13.832-5.044c-4.598 0-9.669 2.17-13.206 5.676a2.333 2.333 0 003.284 3.315c2.646-2.622 6.527-4.324 9.923-4.324h.203c3.396 0 7.277 1.703 9.923 4.324a2.333 2.333 0 103.284-3.315c-3.538-3.505-8.608-5.676-13.206-5.676h-.205z"
        fill="#F3BB90"
      />
      <Circle cx={57.778} cy={47.778} fill="#183028" r={10.667} />
      <Path
        d="M58.634 47.963l3.386 3.386a.42.42 0 01.078.234c0 .104-.026.156-.078.208l-.6.6a.295.295 0 01-.208.078c-.104 0-.182-.026-.234-.079l-3.385-3.385-3.386 3.385a.42.42 0 01-.234.078c-.104 0-.156-.026-.208-.078l-.6-.599c-.051-.052-.078-.104-.078-.208a.42.42 0 01.079-.234l3.385-3.386-3.385-3.385c-.052-.052-.078-.13-.078-.235 0-.078.026-.156.078-.208l.599-.599c.052-.052.104-.078.208-.078a.42.42 0 01.234.078l3.386 3.386 3.385-3.386c.052-.052.13-.078.234-.078.079 0 .157.026.209.078l.599.6c.052.051.078.13.078.207 0 .105-.026.183-.078.235l-3.386 3.385z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54.207 52.39a.42.42 0 01-.234.078c-.104 0-.156-.026-.208-.078l-.6-.599c-.051-.052-.078-.104-.078-.208a.42.42 0 01.079-.234l3.385-3.386-3.385-3.385c-.052-.052-.078-.13-.078-.235 0-.078.026-.156.078-.208l.599-.599c.052-.052.104-.078.208-.078a.42.42 0 01.234.078l3.386 3.386 3.385-3.386c.052-.052.13-.078.234-.078.079 0 .157.026.209.078l.599.6c.052.051.078.13.078.207 0 .105-.026.183-.078.235l-3.386 3.385 3.386 3.386a.42.42 0 01.078.234c0 .104-.026.156-.078.208l-.6.6a.295.295 0 01-.208.078c-.104 0-.182-.026-.234-.079l-3.385-3.385-3.386 3.385zm3.386-2.757l-3.103 3.103-.036.024a.863.863 0 01-.481.153.691.691 0 01-.523-.208l-.599-.6a.69.69 0 01-.208-.522c0-.182.062-.345.153-.48l.024-.037 3.102-3.103-3.07-3.07a.758.758 0 01-.209-.55.74.74 0 01.208-.522l.6-.6a.69.69 0 01.522-.207c.182 0 .345.062.48.152l.037.025 3.103 3.102 3.07-3.071a.758.758 0 01.55-.208c.166 0 .368.054.522.208l.6.599a.74.74 0 01.207.523.758.758 0 01-.208.548l-3.071 3.071 3.102 3.103.025.036c.09.136.152.299.152.481a.692.692 0 01-.208.523l-.599.599a.74.74 0 01-.523.208.758.758 0 01-.548-.208l-3.071-3.072z"
        fill="#fff"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgNoConnection);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;