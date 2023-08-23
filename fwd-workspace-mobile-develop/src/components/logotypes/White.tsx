import * as React from 'react';
import Svg, {SvgProps, Mask, Path, G} from 'react-native-svg';

function SvgWhite(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 72 40"
      fill="none"
      ref={svgRef}
      {...props}>
      <Mask
        id="white_svg__a"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={6}
        y={5}
        width={60}
        height={30}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 5h59.074v29.096H6V5z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#white_svg__a)">
        <Path
          d="M53.893 14.45a.706.706 0 010 .997l-3.5 3.44a.735.735 0 01-.783.151.702.702 0 01-.44-.648v-6.882c0-.286.174-.54.44-.652a.732.732 0 01.782.153l3.501 3.441z"
          fill="#fff"
        />
      </G>
      <Mask
        id="white_svg__b"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={6}
        y={5}
        width={60}
        height={30}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 5h59.074v29.096H6V5z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#white_svg__b)">
        <Path
          d="M31.946 5.498a2.86 2.86 0 00-.896 1.187c-.182.458-.384 1.122-.62 1.998l-.185.688-2.275 8.875-2.652-11.352c-.226-1.085-.84-1.754-2.358-1.754H6.753c-.745 0-.771.78-.774.786v18.396s.013.391.394.391h1.505c1.082 0 2.464-.69 2.464-2.597v-5.604h5.676c2.165 0 2.692-1.532 2.692-2.403v-.324c0-.309-.106-.497-.482-.497h-7.886V8.646h11.149l3.364 12.842c.103.384.692 2.416.692 2.416.226.713.201.816.814.816h1.363c1.674 0 2.253-1.023 2.548-1.744.15-.392.255-.563.494-1.445l2.966-11.07 3.137 11.014c.102.385.65 2.425.65 2.425.226.71.203.82.815.82h1.361c1.677 0 2.256-1.025 2.552-1.751.145-.391.291-.766.532-1.646l3.084-12.665h9.55c.82 0 1.482.07 2.077.25.77.228 1.455.8 2.026 1.696.553.878.87 2.416.884 4.325 0 2.153-.65 4.063-1.857 5.096-.268.24-.583.427-.958.563-.38.14-.75.228-1.098.262-.377.04-.874.115-1.53.12h-.009l-2.083.004h-2.992l-.015-.003c-.647 0-.668.372-.668.532v.77c0 1.12.934 2.409 2.808 2.409h.064l3.635-.002a15.964 15.964 0 002.5-.203 8.182 8.182 0 002.107-.65 7.235 7.235 0 001.812-1.209 8.531 8.531 0 001.707-2.197c.438-.818.761-1.73.964-2.734.192-.947.287-1.621.287-2.745v-.024c-.032-3.64-1.116-6.227-3.279-8.033a6.748 6.748 0 00-2.79-1.449c-.955-.238-2.082-.355-3.37-.355h-11.57c-.636.007-1.587.332-1.953 1.813l-2.51 11.279-2.668-8.844v.006l-.18-.652c-.257-.943-.464-1.619-.618-2.028-.156-.408-.429-.786-.83-1.136C34.91 5.173 34.35 5 33.63 5c-.713 0-1.272.165-1.685.498z"
          fill="#183028"
        />
      </G>
      <Path
        d="M13.305 29.122h1.194l-1.66 5.756h-1.204l-1.373-4.1-1.372 4.1H7.67L6 29.122h1.237l1.102 3.962 1.33-3.962h1.212L12.22 33.1l1.085-3.978zM16.146 31.996c0 .325.054.609.161.852.108.239.249.436.424.593.18.157.381.276.601.357a2.146 2.146 0 001.373 0c.226-.08.427-.2.602-.357.18-.157.325-.354.432-.593.107-.243.161-.527.161-.852 0-.325-.054-.606-.16-.844a1.704 1.704 0 00-1.034-.95 2.017 2.017 0 00-.687-.122 2.017 2.017 0 00-1.288.47 1.729 1.729 0 00-.424.602 2.04 2.04 0 00-.16.844zm-1.212.008c0-.465.085-.882.255-1.25.17-.374.395-.69.678-.95.282-.26.61-.458.982-.593.373-.14.763-.211 1.17-.211.407 0 .796.07 1.17.211.378.135.708.333.99.593a2.9 2.9 0 01.679.95c.17.368.254.785.254 1.25 0 .466-.085.882-.254 1.25-.17.369-.396.682-.678.942-.283.26-.613.46-.992.601a3.402 3.402 0 01-1.17.203c-.406 0-.796-.068-1.169-.203a2.925 2.925 0 01-1.66-1.543 2.956 2.956 0 01-.255-1.25zM23.914 32.662h-.61v2.216h-1.178v-5.756h2.347c.294 0 .556.046.788.138.237.092.438.216.602.373.17.157.3.344.39.56.09.217.135.45.135.699 0 .406-.116.752-.347 1.039-.226.287-.537.484-.933.593l1.288 2.354h-1.305l-1.177-2.216zm.339-.966c.299 0 .53-.074.695-.22a.735.735 0 00.245-.576.745.745 0 00-.245-.585c-.164-.146-.396-.219-.695-.219h-.95v1.6h.95zM29.337 32.491l-.746.788v1.6h-1.17v-5.757h1.17v2.606l2.407-2.606h1.534L30.15 31.63l2.398 3.247h-1.465l-1.746-2.387zM36.33 30.802a1.106 1.106 0 00-.093-.26.774.774 0 00-.187-.267 1.015 1.015 0 00-.33-.203 1.26 1.26 0 00-.483-.081 1.13 1.13 0 00-.39.064.914.914 0 00-.297.163.728.728 0 00-.186.227.6.6 0 00.093.69c.108.114.271.192.492.236l.839.154c.27.049.51.127.72.236.209.108.384.238.525.39a1.516 1.516 0 01.432 1.07c0 .223-.048.442-.144.659a1.72 1.72 0 01-.423.568c-.181.162-.407.295-.678.398a2.546 2.546 0 01-.924.154c-.401 0-.746-.054-1.034-.162a2.468 2.468 0 01-.728-.43 1.868 1.868 0 01-.441-.577 2.007 2.007 0 01-.187-.633l1.085-.276c.011.14.045.276.102.406.062.13.147.246.254.349.107.097.24.175.398.235.159.06.345.09.56.09.316 0 .556-.066.72-.196a.628.628 0 00.254-.511.574.574 0 00-.186-.43c-.125-.125-.305-.209-.543-.252l-.839-.162c-.48-.092-.864-.28-1.152-.56-.282-.287-.424-.65-.424-1.089 0-.254.054-.49.161-.706.113-.222.266-.414.458-.576a2.17 2.17 0 01.67-.382c.254-.092.522-.138.804-.138.362 0 .67.049.924.146.26.092.474.211.644.357.17.146.3.309.39.488.096.173.16.34.195.503l-1.051.308zM40.554 31.744c.294 0 .523-.073.687-.219a.767.767 0 00.254-.6c0-.26-.085-.464-.254-.61-.164-.146-.393-.219-.687-.219h-.923v1.648h.923zm-.932.966v2.168h-1.17v-5.756h2.246c.294 0 .563.046.805.138.243.086.452.21.627.373.176.157.308.347.399.569.096.216.144.454.144.714 0 .26-.048.5-.144.723-.09.222-.223.411-.399.568a1.977 1.977 0 01-.627.373c-.242.087-.51.13-.805.13h-1.076zM47.168 33.563h-2.44l-.5 1.315H42.99l2.305-5.756h1.356l2.288 5.756h-1.271l-.5-1.315zm-2.051-1.023h1.66l-.83-2.176-.83 2.176zM52.427 35c-.418 0-.813-.07-1.186-.211-.373-.14-.7-.341-.983-.6a2.88 2.88 0 01-.661-.943 3.024 3.024 0 01-.246-1.242c0-.46.082-.874.246-1.242.17-.374.395-.69.678-.95.282-.26.607-.46.974-.6.373-.142.76-.212 1.161-.212.413 0 .777.057 1.094.17.322.109.593.255.813.439.226.179.407.381.542.609.142.227.243.457.305.69l-1.101.333a1.684 1.684 0 00-.17-.414 1.28 1.28 0 00-.322-.374 1.616 1.616 0 00-.483-.268 1.969 1.969 0 00-.678-.105c-.226 0-.449.04-.67.122-.22.075-.417.192-.592.349a1.73 1.73 0 00-.424.6 2.099 2.099 0 00-.161.853c0 .309.05.582.153.82.107.233.245.43.415.593.175.157.373.279.593.365.226.081.46.122.703.122.255 0 .478-.035.67-.106a1.74 1.74 0 00.5-.284 1.592 1.592 0 00.517-.787l1.093.316c-.057.222-.156.45-.297.682-.135.228-.32.436-.55.625-.227.19-.5.347-.823.471-.316.12-.686.179-1.11.179zM56.178 34.878v-5.756h3.763v1.055h-2.593v1.316h2.347v.998h-2.347v1.332h2.593v1.055h-3.763z"
        fill="#FEF9F4"
      />
      <Path
        d="M62.44 31.583V30h.95v1.583H65v.885h-1.61v1.591h-.95v-1.59h-1.6v-.886h1.6z"
        fill="#183028"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgWhite);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
