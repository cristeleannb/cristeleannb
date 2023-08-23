import * as React from 'react';
import Svg, {SvgProps, Path, G, Defs, ClipPath} from 'react-native-svg';

function SvgDefaultAlt(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 80 48"
      fill="none"
      ref={svgRef}
      {...props}>
      <Path
        d="M51.793 13.389a.492.492 0 010 .673l-2.248 2.326a.46.46 0 01-.326.14.419.419 0 01-.177-.038.475.475 0 01-.282-.438V11.4c0-.194.111-.366.282-.441a.453.453 0 01.503.104l2.248 2.326z"
        fill="#E87722"
      />
      <Path
        d="M37.699 7.337a1.928 1.928 0 00-.575.802c-.118.31-.247.758-.399 1.351l-.118.465-1.462 6-1.703-7.675c-.145-.733-.538-1.186-1.513-1.186H21.52c-.478 0-.495.528-.496.532v12.437s.008.264.253.264h.966c.695 0 1.583-.467 1.583-1.756v-3.789h3.644c1.39 0 1.729-1.035 1.729-1.624v-.219c0-.209-.068-.336-.31-.336h-5.063V9.465h7.159l2.16 8.681c.066.26.444 1.634.444 1.634.146.482.13.552.523.552h.875c1.076 0 1.447-.692 1.637-1.18.096-.264.163-.38.317-.977l1.905-7.484 2.014 7.447.417 1.639c.145.48.13.554.524.554h.874c1.077 0 1.449-.692 1.639-1.183.093-.264.187-.518.341-1.113l1.98-8.562h6.134c.527 0 .951.047 1.333.168.495.155.935.542 1.302 1.148.355.593.558 1.633.567 2.924 0 1.455-.417 2.746-1.192 3.445a1.84 1.84 0 01-.615.38 2.77 2.77 0 01-.706.177c-.242.027-.561.078-.982.082h-.006l-1.338.002h-1.921l-.01-.002c-.415 0-.428.251-.428.36v.52c0 .758.599 1.629 1.803 1.629h.04l2.335-.002a9.746 9.746 0 001.605-.136c.48-.088.933-.232 1.354-.44.42-.206.81-.48 1.163-.817a5.738 5.738 0 001.096-1.486c.282-.553.49-1.17.62-1.848.123-.64.184-1.096.184-1.856v-.016c-.02-2.46-.717-4.21-2.106-5.43a4.262 4.262 0 00-1.792-.98c-.613-.161-1.337-.24-2.164-.24h-7.43c-.408.004-1.019.224-1.254 1.225l-1.612 7.626-1.713-5.98v.005l-.115-.44a17.735 17.735 0 00-.398-1.372 1.935 1.935 0 00-.533-.768C39.602 7.117 39.242 7 38.781 7c-.458 0-.817.112-1.082.337zM76.53 35.552v-2.264h1.287v2.264H80v1.265h-2.183v2.276H76.53v-2.276h-2.172v-1.265h2.172z"
        fill="#183028"
      />
      <Path
        d="M9.904 32.032h1.62l-2.252 8.232H7.641L5.779 34.4l-1.86 5.864H2.263L0 32.032h1.678l1.493 5.666 1.804-5.666h1.643l1.816 5.69 1.47-5.69zM24.29 37.094h-.828v3.17h-1.597v-8.232h3.183c.398 0 .755.066 1.069.197.321.132.593.31.815.534.23.225.406.492.529.801.123.31.184.643.184.999 0 .58-.157 1.076-.471 1.486-.307.41-.728.693-1.264.848l1.746 3.367h-1.77l-1.596-3.17zm.46-1.382c.405 0 .72-.104.942-.313.222-.21.333-.484.333-.825 0-.348-.111-.627-.333-.835-.223-.21-.537-.314-.943-.314h-1.287v2.287h1.287zM31.643 36.85l-1.01 1.127v2.287h-1.586v-8.232h1.585v3.727l3.263-3.727h2.08l-3.229 3.588 3.252 4.644H34.01l-2.367-3.414zM41.125 34.435a1.644 1.644 0 00-.126-.371 1.11 1.11 0 00-.253-.383 1.366 1.366 0 00-.448-.29 1.629 1.629 0 00-.655-.117c-.191 0-.368.031-.528.093a1.22 1.22 0 00-.403.232 1.033 1.033 0 00-.252.325.88.88 0 00-.092.395c0 .224.072.422.218.592.146.163.368.275.666.337l1.138.22c.368.07.693.182.977.337.283.155.52.34.712.558.191.209.337.445.437.708.1.263.149.538.149.824 0 .318-.065.631-.195.94-.13.303-.322.573-.575.813a2.865 2.865 0 01-.919.57c-.36.146-.777.22-1.252.22-.544 0-1.012-.077-1.402-.232a3.315 3.315 0 01-.988-.616 2.662 2.662 0 01-.598-.824 2.99 2.99 0 01-.253-.906l1.471-.394c.015.2.061.394.138.58.084.186.2.352.345.5.145.139.325.251.54.336.214.085.467.128.758.128.429 0 .755-.093.977-.279a.916.916 0 00.344-.731.843.843 0 00-.252-.616c-.169-.178-.414-.298-.736-.36l-1.137-.232c-.651-.131-1.172-.398-1.563-.801-.383-.41-.574-.929-.574-1.556 0-.364.072-.7.218-1.01.153-.317.36-.592.62-.824.26-.233.563-.414.908-.546a3.034 3.034 0 011.092-.197c.49 0 .907.07 1.252.208.352.132.644.302.873.511.23.21.406.442.529.697.13.248.218.488.264.72l-1.425.441zM46.853 35.782c.399 0 .709-.104.931-.313.23-.217.345-.504.345-.86 0-.371-.115-.662-.345-.87-.222-.21-.532-.314-.93-.314H45.6v2.357h1.252zm-1.264 1.382v3.1h-1.585v-8.232h3.045c.398 0 .762.066 1.091.197.33.124.613.302.85.534.238.225.418.496.54.813.13.31.196.65.196 1.022 0 .371-.065.716-.196 1.033a2.184 2.184 0 01-.54.813 2.66 2.66 0 01-.85.534 3.08 3.08 0 01-1.091.186h-1.46zM55.82 38.383h-3.309l-.677 1.88h-1.678l3.125-8.231h1.839l3.102 8.232h-1.724l-.677-1.881zm-2.78-1.463h2.252l-1.126-3.112-1.126 3.112zM62.952 40.438a4.31 4.31 0 01-1.608-.302 4.04 4.04 0 01-1.333-.86 4.128 4.128 0 01-.897-1.346c-.222-.526-.333-1.118-.333-1.776 0-.658.111-1.25.334-1.777.23-.534.536-.987.919-1.358a4.072 4.072 0 011.321-.86 4.22 4.22 0 011.574-.301c.56 0 1.053.08 1.482.243.437.155.805.364 1.103.627.307.256.552.546.736.871.191.325.33.654.413.987l-1.493.476a2.486 2.486 0 00-.23-.592 1.804 1.804 0 00-.437-.534 2.161 2.161 0 00-.655-.383c-.26-.1-.566-.151-.919-.151-.306 0-.609.058-.907.174a2.306 2.306 0 00-.805.5c-.237.224-.429.51-.574.858-.146.349-.219.755-.219 1.22 0 .44.07.832.207 1.172.146.333.333.616.563.848.238.224.506.398.804.522.307.117.625.175.954.175.345 0 .648-.05.908-.151a2.24 2.24 0 001.126-.94c.115-.202.2-.4.253-.593l1.482.453a3.71 3.71 0 01-.402.975 3.384 3.384 0 01-.747.894c-.306.271-.678.496-1.115.674-.429.17-.93.255-1.505.255zM68.038 40.264v-8.232h5.102v1.51h-3.516v1.88h3.183v1.428h-3.183v1.904h3.516v1.51h-5.102z"
        fill="#E87722"
      />
      <G clipPath="url(#default-alt_svg__clip0)" fill="#E87722">
        <Path d="M16.372 35.654a2.077 2.077 0 100-4.154 2.077 2.077 0 000 4.154zM20.566 40.293a5.374 5.374 0 00-2.217-1.83 2.717 2.717 0 01-3.995.019 5.362 5.362 0 00-2.176 1.81h8.388z" />
        <Path d="M19.768 36.198h-6.713c-.319-.005-.587.21-.592.482a.44.44 0 000 .067l.37 2.856c.043.289.335.508.677.513h5.725c.345-.005.633-.223.677-.513l.365-2.852c.039-.274-.189-.52-.509-.553z" />
      </G>
      <Defs>
        <ClipPath id="default-alt_svg__clip0">
          <Path
            fill="#fff"
            transform="translate(12.178 31.5)"
            d="M0 0h8.388v8.793H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgDefaultAlt);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
